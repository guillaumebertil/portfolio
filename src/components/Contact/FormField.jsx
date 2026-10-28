// Un champ du formulaire : label visible, champ, message d'erreur relié au champ.
// aria-invalid et aria-describedby permettent aux lecteurs d'écran d'annoncer l'erreur.
export default function FormField({ id, label, error, multiline = false, inputRef, ...inputProps }) {
    const errorId = `${id}-error`
    const fieldClass = `w-full bg-base-200 ${error ? 'border-error' : 'border-base-300'}`

    const commonProps = {
        id,
        ref: inputRef,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': error ? errorId : undefined,
        ...inputProps,
    }

    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-sm text-muted">{label}</label>
            {multiline
                ? <textarea {...commonProps} rows="6" className={`textarea ${fieldClass}`} />
                : <input {...commonProps} className={`input ${fieldClass}`} />}
            {error && <p id={errorId} className="text-sm text-error">{error}</p>}
        </div>
    )
}
