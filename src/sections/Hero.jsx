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
                    Après 9 ans dans la logistique militaire, je me reconvertis aujourd'hui dans le développement web.<br />
                    Je termine actuellement une formation DWWM et je suis à la recherche d'un poste de développeur web junior.
                </p>
                <a href="#contact" className="btn btn-primary btn-outline btn-wide hover:scale-105 transition-transform">Me contacter</a>
                </div>
            </div>
        </div>
    )
}