import { useId, useRef, useState } from 'react'

// Galerie de captures dans une fenêtre modale.
// La balise <dialog> ouverte avec showModal() gère seule : la touche Échap,
// le blocage du reste de la page et le retour du focus sur le bouton à la fermeture.
export default function ProjectGallery({ title, images }) {
    const dialogRef = useRef(null)
    const [index, setIndex] = useState(0)
    const titleId = useId()

    const image = images[index]

    function open() {
        setIndex(0)
        dialogRef.current.showModal()
    }

    function close() {
        dialogRef.current.close()
    }

    function showPrevious() {
        setIndex((current) => (current - 1 + images.length) % images.length)
    }

    function showNext() {
        setIndex((current) => (current + 1) % images.length)
    }

    return (
        <>
            <button type="button" onClick={open} className="link-draw cursor-pointer text-primary">
                &gt; captures ({images.length})
            </button>

            <dialog ref={dialogRef} className="modal" aria-labelledby={titleId}>
                <div className="modal-box w-11/12 max-w-5xl border border-base-300 bg-base-200 p-4 sm:p-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                        <h3 id={titleId} className="font-mono text-heading">{title} : captures</h3>
                        <button type="button" onClick={close} className="btn btn-ghost btn-sm btn-square" aria-label="Fermer la galerie">
                            <span aria-hidden="true">✕</span>
                        </button>
                    </div>

                    {/* loading="lazy" : les captures ne sont téléchargées qu'à l'ouverture de la galerie */}
                    <img
                        src={image.url}
                        alt={image.alt}
                        width="1920"
                        height="1080"
                        loading="lazy"
                        className="aspect-video w-full rounded border border-base-300 bg-base-100 object-contain"
                    />

                    <div className="mt-4 flex items-center justify-between gap-4">
                        <button type="button" onClick={showPrevious} className="btn btn-outline btn-sm btn-lift border-base-300" aria-label="Capture précédente">
                            <span aria-hidden="true">←</span>
                        </button>
                        <p className="text-center font-mono text-sm" aria-live="polite">
                            {index + 1} / {images.length} · {image.alt}
                        </p>
                        <button type="button" onClick={showNext} className="btn btn-outline btn-sm btn-lift border-base-300" aria-label="Capture suivante">
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>

                {/* Clic à côté de la fenêtre : fermeture (comportement daisyUI) */}
                <form method="dialog" className="modal-backdrop">
                    <button tabIndex={-1}>Fermer</button>
                </form>
            </dialog>
        </>
    )
}
