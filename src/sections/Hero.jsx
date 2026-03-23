import heroImg from '../assets/img/hero.jpg'

export default function Hero() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                `url(${heroImg})`,
            }}
            >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg">
                <h1 className="mb-2 text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-wider">Guillaume Bertil</h1>
                <h2 className="mb-5 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Développeur web</h2>
                <p className="text-lg font-semibold leading-relaxed mb-8">
                    De la logistique militaire au développement web, après 9 ans dans l'armée je me suis reconverti dans ce domaine.<br />
                    Je cherche un stage pour contribuer à de vrais projets.
                </p>
                <a href="#contact" className="btn btn-primary btn-outline btn-wide hover:scale-105 transition-transform">Me contacter</a>
                </div>
            </div>
        </div>
    )
}