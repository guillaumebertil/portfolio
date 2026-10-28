import heroBg from '../assets/img/hero-bg.jpg'
import HeroIllustration from '../components/HeroIllustration'

// Voile sombre sur la gauche de l'image : le texte garde un contraste suffisant
const heroBackground = {
    backgroundImage: `linear-gradient(90deg, rgb(13 17 23 / 0.92) 0%, rgb(13 17 23 / 0.75) 45%, rgb(13 17 23 / 0.15) 100%), url(${heroBg})`,
}

export default function Hero() {
    return (
        <section
            className="border-b border-base-300 bg-base-100 bg-cover bg-right bg-no-repeat"
            style={heroBackground}
        >
            <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 sm:px-6 md:py-24 lg:flex-row lg:items-center">
                <div className="min-w-0 lg:flex-1">
                    {/* Clin d'œil terminal : la commande whoami affiche le nom de l'utilisateur */}
                    <p className="mb-5 font-mono text-sm text-muted sm:text-base" aria-hidden="true">
                        <span className="text-primary">guillaume@dijon</span>:<span className="text-secondary">~</span>$ whoami
                    </p>
                    <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl">
                        Guillaume Bertil<span className="text-primary" aria-hidden="true">█</span>
                    </h1>
                    <p className="mt-4 font-mono text-xl text-primary sm:text-2xl">&lt; Développeur web /&gt;</p>
                    <p className="mt-7 mb-9 max-w-xl text-lg leading-relaxed">
                        Après 9 ans dans la logistique militaire, je me reconvertis aujourd'hui dans le développement web.<br />
                        Je termine actuellement une formation DWWM et je suis à la recherche d'un poste de développeur web junior.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#contact" className="btn btn-primary btn-lift">Me contacter</a>
                        <a href="#portfolio" className="btn btn-outline btn-lift border-base-300 text-base-content hover:border-primary hover:bg-transparent hover:text-primary">
                            Voir mes projets
                        </a>
                    </div>
                    <p className="mt-5 font-mono text-sm text-muted">
                        <span className="text-secondary" aria-hidden="true">● </span>Disponible dès maintenant · Dijon
                    </p>
                </div>

                <div className="min-w-0 lg:flex-1">
                    <HeroIllustration />
                </div>
            </div>
        </section>
    )
}
