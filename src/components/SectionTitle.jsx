// Titre de section façon commentaire de code : « // MES COMPÉTENCES »
export default function SectionTitle({ children }) {
    return (
        <h2 className="mb-8 font-mono text-sm font-medium uppercase tracking-widest text-primary sm:text-base">
            <span className="text-secondary" aria-hidden="true">// </span>
            {children}
        </h2>
    )
}
