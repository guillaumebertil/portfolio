import { useRef } from 'react'

const links = [
    { href: '#', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#competences', label: 'Compétences' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
]

const cvLink = '/guillaume_bertil_cv.pdf'

export default function Header() {
    // <details> gère nativement l'ouverture du menu mobile (clic, clavier).
    // On le referme à la main après un clic sur un lien.
    const mobileMenuRef = useRef(null)

    function closeMobileMenu() {
        mobileMenuRef.current.open = false
    }

    return (
        <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
                <a href="#" className="font-mono text-base font-bold text-primary">
                    GB<span className="text-secondary" aria-hidden="true">_</span>
                </a>

                {/* Menu desktop */}
                <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => (
                        <a key={link.label} href={link.href} className="nav-link px-3 py-2.5 text-muted">
                            {link.label}
                        </a>
                    ))}
                    <a href={cvLink} download className="btn btn-primary btn-sm btn-lift ml-2">
                        Télécharger mon C.V
                    </a>
                </nav>

                {/* Menu mobile */}
                <details ref={mobileMenuRef} className="dropdown dropdown-end lg:hidden">
                    <summary className="btn btn-ghost btn-square" aria-label="Ouvrir le menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </summary>
                    <nav aria-label="Navigation mobile">
                        <ul className="dropdown-content menu z-50 mt-2 w-56 rounded-box border border-base-300 bg-base-200 p-2" onClick={closeMobileMenu}>
                            {links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                            <li>
                                <a href={cvLink} download className="text-primary">Télécharger mon C.V</a>
                            </li>
                        </ul>
                    </nav>
                </details>
            </div>
        </header>
    )
}
