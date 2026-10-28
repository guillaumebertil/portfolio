// Une compétence : icône, nom et niveau.
// L'icône est décorative (alt vide) : le nom est écrit juste à côté.
export default function SkillCard({ name, level, icon, darkIcon = false }) {
    return (
        <li className="flex items-center gap-2.5 rounded border border-base-300 bg-base-200 px-3 py-2 font-mono text-sm transition hover:-translate-y-px hover:border-primary">
            <img src={icon} alt="" width="22" height="22" className={darkIcon ? 'invert' : ''} />
            <span className="text-heading">{name}</span>
            <span className="text-muted">· {level}</span>
        </li>
    )
}
