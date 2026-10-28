// Carte de la section « À propos » : icône, titre et paragraphe
export default function AboutCard({ icon, title, text }) {
    return (
        <article className="flex flex-col gap-4 rounded-box border border-base-300 bg-base-100 p-6 transition-colors duration-200 hover:border-primary">
            <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                    {icon}
                </span>
                <h3 className="text-xl font-semibold text-heading">{title}</h3>
            </div>
            <p className="leading-relaxed">{text}</p>
        </article>
    )
}
