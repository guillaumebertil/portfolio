import SectionTitle from '../components/SectionTitle'
import FeaturedProject from '../components/FeaturedProject'
import AboutCard from '../components/About/AboutCard'
import { MapIcon, LightbulbIcon, TargetIcon } from '../components/About/AboutIcons'

const badges = ['Dijon', 'Disponible dès maintenant', 'Formation DWWM - CEF']

const cards = [
    {
        icon: <MapIcon />,
        title: 'Mon parcours',
        text: "Après 9 ans comme Brigadier-chef dans le régiment du Train, j'ai quitté l'armée en 2024 et commencé à apprendre le développement web en 2025. Un changement radical, mais une même façon d'aborder les choses : méthode, rigueur et sens des responsabilités.",
    },
    {
        icon: <LightbulbIcon />,
        title: 'Mes motivations',
        text: "Ce qui m'attire dans le code, c'est la logique et la satisfaction de construire quelque chose de concret. Aujourd'hui en formation DWWM au CEF, je travaille principalement avec React et je monte en compétences sur Laravel et Symfony.",
    },
    {
        icon: <TargetIcon />,
        title: 'Mon objectif',
        text: 'En fin de formation Développeur Web et Web Mobile, je recherche un poste de développeur web junior dans le secteur de Dijon.',
    },
]

export default function About() {
    return (
        <section id="about" className="border-b border-base-300 bg-base-200">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
                <SectionTitle>À propos de moi</SectionTitle>

                <ul className="mb-10 flex flex-wrap gap-2">
                    {badges.map((badge) => (
                        <li key={badge} className="rounded border border-base-300 bg-base-100 px-3 py-1.5 font-mono text-sm">
                            {badge}
                        </li>
                    ))}
                </ul>

                <div className="mb-12 grid gap-5 md:grid-cols-3">
                    {cards.map((card) => (
                        <AboutCard key={card.title} icon={card.icon} title={card.title} text={card.text} />
                    ))}
                </div>

                <FeaturedProject />
            </div>
        </section>
    )
}
