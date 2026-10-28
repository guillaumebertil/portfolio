// EasyFit
import easyfitHomeImg from '../assets/img/portfolio/easyfit/home.jpg'
import easyfitCatalogueImg from '../assets/img/portfolio/easyfit/catalogue.jpg'
import easyfitDetailImg from '../assets/img/portfolio/easyfit/detail.jpg'
import easyfitCartImg from '../assets/img/portfolio/easyfit/cart.jpg'
import easyfitDashboardUsersImg from '../assets/img/portfolio/easyfit/dashboard-users.jpg'
import easyfitDashboardProductsImg from '../assets/img/portfolio/easyfit/dashboard-products.jpg'

// Port Russell
import russellHomeImg from '../assets/img/portfolio/port-russell/home.jpg'
import russellDashboardImg from '../assets/img/portfolio/port-russell/dashboard.jpg'
import russellReservationsImg from '../assets/img/portfolio/port-russell/reservations.jpg'
import russellReservationsInfoImg from '../assets/img/portfolio/port-russell/reservations-info.jpg'
import russellReservationsCreateImg from '../assets/img/portfolio/port-russell/reservations-create.jpg'
import russellReservationsEditImg from '../assets/img/portfolio/port-russell/reservations-edit.jpg'

// La première image de chaque projet sert d'aperçu sur la carte
export const projects = [
    {
        title: 'EasyFit',
        description: "Site e-commerce de vêtements de sport développé en Symfony, que j'ai présenté lors de mon passage du titre professionnel Développeur Web et Web Mobile.",
        stack: ['Symfony 7', 'Twig', 'Doctrine', 'MySQL', 'EasyAdmin'],
        images: [
            { url: easyfitHomeImg, alt: 'Accueil EasyFit' },
            { url: easyfitCatalogueImg, alt: 'Catalogue EasyFit' },
            { url: easyfitDetailImg, alt: 'Fiche produit' },
            { url: easyfitCartImg, alt: 'Panier' },
            { url: easyfitDashboardUsersImg, alt: 'Gestion des utilisateurs' },
            { url: easyfitDashboardProductsImg, alt: 'Gestion des produits' },
        ],
        repo: 'https://github.com/guillaumebertil/easyfit',
        demo: 'https://guillaumeb.alwaysdata.net/',
    },
    {
        title: 'Port Russell',
        description: 'Application web de gestion des réservations pour la capitainerie du Port de Plaisance Russell : CRUD des catways, réservations et utilisateurs, vérification de la disponibilité des catways.',
        stack: ['Laravel', 'Blade', 'SQLite', 'Tailwind'],
        images: [
            { url: russellHomeImg, alt: 'Accueil Port Russell' },
            { url: russellDashboardImg, alt: 'Dashboard' },
            { url: russellReservationsImg, alt: 'Liste des réservations' },
            { url: russellReservationsInfoImg, alt: "Infos d'une réservation" },
            { url: russellReservationsCreateImg, alt: 'Créer une réservation' },
            { url: russellReservationsEditImg, alt: 'Modifier une réservation' },
        ],
        repo: 'https://github.com/guillaumebertil/port-russell-v2',
        demo: null,
    },
]

// Projet mis en avant dans la section « À propos »
export const featuredProject = projects[0]
