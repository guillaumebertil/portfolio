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
            <p>© {new Date().getFullYear()} Guillaume Bertil - Développeur web</p>        </footer>
    )
}