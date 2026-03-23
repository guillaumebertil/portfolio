export default function Footer() {
    return (
        <footer className="footer footer-center bg-base-300 text-base-content p-6 gap-4">
            <div className="flex gap-6">
                <a href="https://github.com/guillaumebertil" target="_blank">
                    <i className="devicon-github-original text-2xl hover:text-primary transition-colors"></i>
                </a>
                <a href="https://www.linkedin.com/in/guillaume-bertil-77223a3b8/" target="_blank">
                    <i className="devicon-linkedin-plain colored text-2xl"></i>
                </a>
            </div>
            <p>© {new Date().getFullYear()} Guillaume Bertil - Développeur web</p>
            <p className="text-xs opacity-50">Photo by <a href="https://unsplash.com/fr/photos/photo-en-gros-plan-du-clavier-dordinateur-WkfDrhxDMC8" target="_blank" className="underline">Christian Wiediger</a> on Unsplash</p>
        </footer>
    )
}