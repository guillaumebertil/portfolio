import Project from "../components/Portfolio/Project"

// EasyFit
import easyfitHomeImg from "../assets/img/portfolio/easyfit/home.jpg"
import easyfitCatalogueImg from "../assets/img/portfolio/easyfit/catalogue.jpg"
import easyfitDetailImg from "../assets/img/portfolio/easyfit/detail.jpg"
import easyfitCartImg from "../assets/img/portfolio/easyfit/cart.jpg"
import easyfitDashboardUsersImg from "../assets/img/portfolio/easyfit/dashboard-users.jpg"
import easyfitDashboardProductsImg from "../assets/img/portfolio/easyfit/dashboard-products.jpg"

// Port Russel
import russellHomeImg from "../assets/img/portfolio/port-russell/home.jpg"
import russellDashboardImg from "../assets/img/portfolio/port-russell/dashboard.jpg"
import russellReservationsImg from "../assets/img/portfolio/port-russell/reservations.jpg"
import russellReservationsInfoImg from "../assets/img/portfolio/port-russell/reservations-info.jpg"
import russellReservationsCreateImg from "../assets/img/portfolio/port-russell/reservations-create.jpg"
import russellReservationsEditImg from "../assets/img/portfolio/port-russell/reservations-edit.jpg"

export default function Portfolio() {
    const projects = [
        // EasyFit
        {
            title: 'EasyFit',
            description: 'Site e-commerce de vêtement de sport',
            skills: [
                'PHP',
                'Symfony',
                'TailwindCSS',
                'MariaDB'
            ],
            images: [
                { url: easyfitHomeImg, alt: 'Accueil EasyFit' },
                { url: easyfitCatalogueImg, alt: 'Catalogue EasyFit' },
                { url: easyfitDetailImg, alt: 'Fiche produit' },
                { url: easyfitCartImg, alt: 'Panier' },
                { url: easyfitDashboardUsersImg, alt: 'Gestion des utilisateurs' },
                { url: easyfitDashboardProductsImg, alt: 'Gestion des produits' },
            ],
            link: 'https://github.com/guillaumebertil/easyfit'
        },
        // Port Russel
        {
            title: 'Port de Russel',
            description: 'Application web de gestion des réservations pour la capitainerie du Port de Plaisance Russell',
            skills: [
                'PHP',
                'Laravel',
                'TailwindCSS',
                'SQLite'
            ],
            images: [
                { url: russellHomeImg, alt: 'Accueil Port Russel'},
                { url: russellDashboardImg, alt: 'Dashboard'},
                { url: russellReservationsImg, alt: 'Liste des réservations'},
                { url: russellReservationsInfoImg, alt: 'Infos d\'une réservation'},
                { url: russellReservationsCreateImg, alt: 'Créer une réservation'},
                { url: russellReservationsEditImg, alt: 'Modifier une réservation'},
            ],
            link: 'https://github.com/guillaumebertil/port-russell-v2'
        }
    ]
    return (
        <section id="portfolio" className="bg-base-100 mx-auto text-center px-6 flex justify-center py-20">
            <div className="max-w-6xl w-full flex flex-col justify-between flex-1 gap-12">
                <div>
                    <h2 className="text-4xl font-bold">Mon portfolio</h2>
                    <div className="flex flex-col justify-center items-center">
                        {projects.map((project) => (
                            <Project
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                skills={project.skills}
                                images={project.images}
                                link={project.link}
                            />
                        ))}
                    </div>
                    <div>
                        <p>Le code source de mes autres projets sont disponibles sur mon GitHub</p>
                        <a href="https://github.com/guillaumebertil" target="_blank" className="btn btn-outline btn-wide mt-4 gap-2">
                            <i className="devicon-github-original text-2xl mr-2"></i>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}