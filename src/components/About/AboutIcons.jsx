// Icônes des cartes « À propos », dessinées en SVG (trait de la couleur du texte : currentColor).
// aria-hidden : décoratives, le titre de la carte suffit.
const iconProps = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
}

// Parcours : une carte dépliée
export function MapIcon() {
    return (
        <svg {...iconProps}>
            <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
            <path d="M9 4v14M15 6v14" />
        </svg>
    )
}

// Motivations : une ampoule
export function LightbulbIcon() {
    return (
        <svg {...iconProps}>
            <path d="M9 18h6M10 22h4" />
            <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z" />
        </svg>
    )
}

// Objectif : une cible
export function TargetIcon() {
    return (
        <svg {...iconProps}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1" />
        </svg>
    )
}
