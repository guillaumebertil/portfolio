import githubIcon from '../assets/icons/github.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'

// Liens composés uniquement d'une icône : aria-label donne leur nom aux lecteurs d'écran
export default function Footer() {
    return (
        <footer className="border-t border-base-300 bg-base-200">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 sm:px-6">
                <div className="flex gap-2">
                    <a href="https://github.com/guillaumebertil" target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub" className="btn btn-ghost btn-square btn-lift">
                        <img src={githubIcon} alt="" width="24" height="24" className="invert" />
                    </a>
                    <a href="https://www.linkedin.com/in/guillaume-bertil/" target="_blank" rel="noopener noreferrer"
                        aria-label="LinkedIn" className="btn btn-ghost btn-square btn-lift">
                        <img src={linkedinIcon} alt="" width="24" height="24" />
                    </a>
                </div>
                <p className="font-mono text-sm text-muted">© {new Date().getFullYear()} Guillaume Bertil - Développeur web</p>
            </div>
        </footer>
    )
}
