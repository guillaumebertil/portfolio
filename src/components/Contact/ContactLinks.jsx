import githubIcon from '../../assets/icons/github.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'

// Enveloppe dessinée en SVG (Devicon n'a pas d'icône email)
function MailIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-secondary" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    )
}

// Les icônes sont décoratives (alt vide) : l'adresse est écrite à côté
export default function ContactLinks() {
    return (
        <div className="font-mono">
            <p className="mb-3 text-sm text-muted" aria-hidden="true">$ cat contact.txt</p>
            <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3.5">
                    <MailIcon />
                    <a href="mailto:guillaume.bertil@gmail.com" className="link-draw break-all text-primary">
                        guillaume.bertil@gmail.com
                    </a>
                </li>
                <li className="flex items-center gap-3.5">
                    <img src={githubIcon} alt="" width="24" height="24" className="shrink-0 invert" />
                    <a href="https://github.com/guillaumebertil" target="_blank" rel="noopener noreferrer" className="link-draw text-primary">
                        github.com/guillaumebertil
                    </a>
                </li>
                <li className="flex items-center gap-3.5">
                    <img src={linkedinIcon} alt="" width="24" height="24" className="shrink-0" />
                    <a href="https://www.linkedin.com/in/guillaume-bertil/" target="_blank" rel="noopener noreferrer" className="link-draw text-primary">
                        linkedin.com/in/guillaume-bertil
                    </a>
                </li>
            </ul>
        </div>
    )
}
