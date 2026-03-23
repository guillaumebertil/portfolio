export default function Header() {
    return (
        <header className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="flex-1">
                <a href="#" className="btn btn-ghost text-xl text-primary">GB</a>
            </div>

            {/* Menu desktop */}
            <div className="hidden lg:flex flex-none items-center gap-2">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#competences">Compétences</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="/guillaume_bertil_cv.pdf" download className="btn btn-accent">Télécharger mon C.V</a>
            </div>

            {/* Menu mobile */}
            <div className="lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow">
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#competences">Compétences</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="/guillaume_bertil_cv.pdf" download>Télécharger mon C.V</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}