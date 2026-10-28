import { useRef, useState } from 'react'
import FormField from './FormField'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeerbnqk'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EMPTY_FIELDS = { name: '', email: '', message: '' }

// Renvoie un objet { nomDuChamp: messageDErreur } ; vide si tout est valide
function validate(fields) {
    const errors = {}
    if (!fields.name.trim()) {
        errors.name = 'Indiquez votre nom.'
    }
    if (!fields.email.trim()) {
        errors.email = 'Indiquez votre adresse email.'
    } else if (!EMAIL_PATTERN.test(fields.email.trim())) {
        errors.email = 'Adresse email invalide (ex. nom@domaine.fr).'
    }
    if (!fields.message.trim()) {
        errors.message = 'Écrivez votre message.'
    }
    return errors
}

export default function ContactForm() {
    const [fields, setFields] = useState(EMPTY_FIELDS)
    const [errors, setErrors] = useState({})
    // idle | sending | success | error
    const [status, setStatus] = useState('idle')

    const inputRefs = { name: useRef(null), email: useRef(null), message: useRef(null) }

    function handleChange(event) {
        const { name, value } = event.target
        const nextFields = { ...fields, [name]: value }
        setFields(nextFields)
        // Si le champ était en erreur, on revérifie pendant la saisie pour retirer le message
        if (errors[name]) {
            setErrors({ ...errors, [name]: validate(nextFields)[name] })
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const newErrors = validate(fields)
        setErrors(newErrors)
        const firstInvalidField = Object.keys(EMPTY_FIELDS).find((name) => newErrors[name])
        if (firstInvalidField) {
            inputRefs[firstInvalidField].current.focus()
            return
        }

        setStatus('sending')
        try {
            // Accept: application/json → Formspree répond en JSON au lieu de rediriger vers sa page
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: new FormData(event.target),
                headers: { Accept: 'application/json' },
            })
            if (!response.ok) {
                throw new Error(`Formspree a répondu ${response.status}`)
            }
            setStatus('success')
            setFields(EMPTY_FIELDS)
        } catch {
            setStatus('error')
        }
    }

    const isSending = status === 'sending'

    // noValidate : on remplace les bulles d'erreur du navigateur par nos propres messages
    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="contact-name" name="name" label="Votre nom" autoComplete="name"
                    value={fields.name} onChange={handleChange} error={errors.name} inputRef={inputRefs.name} />
                <FormField id="contact-email" name="email" type="email" label="Votre email" autoComplete="email"
                    value={fields.email} onChange={handleChange} error={errors.email} inputRef={inputRefs.email} />
            </div>
            <FormField id="contact-message" name="message" label="Votre message" multiline
                value={fields.message} onChange={handleChange} error={errors.message} inputRef={inputRefs.message} />

            {/* Piège à robots de Formspree : invisible pour les humains, rempli par les robots */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="btn btn-primary btn-lift" disabled={isSending}>
                    {isSending && <span className="loading loading-spinner loading-sm" aria-hidden="true" />}
                    {isSending ? 'Envoi en cours…' : 'Envoyer'}
                </button>

                {/* Zones annoncées par les lecteurs d'écran quand leur contenu change */}
                <div aria-live="polite">
                    {status === 'success' && (
                        <p className="font-mono text-sm text-primary">✓ Message envoyé. Je vous réponds rapidement.</p>
                    )}
                </div>
            </div>
            <div role="alert">
                {status === 'error' && (
                    <p className="rounded border border-error px-3 py-2.5 text-sm text-error">
                        L'envoi a échoué. Réessayez, ou écrivez-moi directement à guillaume.bertil@gmail.com.
                    </p>
                )}
            </div>
        </form>
    )
}
