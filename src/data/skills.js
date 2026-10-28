// Icônes Devicon (v2.16.0, licence MIT) : https://devicon.dev
import html5Icon from '../assets/icons/html5.svg'
import css3Icon from '../assets/icons/css3.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import phpIcon from '../assets/icons/php.svg'
import nodejsIcon from '../assets/icons/nodejs.svg'
import bootstrapIcon from '../assets/icons/bootstrap.svg'
import tailwindIcon from '../assets/icons/tailwindcss.svg'
import reactIcon from '../assets/icons/react.svg'
import laravelIcon from '../assets/icons/laravel.svg'
import symfonyIcon from '../assets/icons/symfony.svg'
import mysqlIcon from '../assets/icons/mysql.svg'
import mongodbIcon from '../assets/icons/mongodb.svg'
import pythonIcon from '../assets/icons/python.svg'
import githubIcon from '../assets/icons/github.svg'
import figmaIcon from '../assets/icons/figma.svg'

// darkIcon : logo noir à inverser pour rester visible sur le fond sombre
export const skillGroups = [
    {
        name: 'Frontend',
        skills: [
            { name: 'HTML', level: 'Intermédiaire', icon: html5Icon },
            { name: 'CSS', level: 'Intermédiaire', icon: css3Icon },
            { name: 'JavaScript', level: 'Débutant', icon: javascriptIcon },
        ],
    },
    {
        name: 'Backend',
        skills: [
            { name: 'PHP', level: 'Débutant', icon: phpIcon },
            { name: 'Express', level: 'Débutant', icon: nodejsIcon },
        ],
    },
    {
        name: 'Frameworks',
        skills: [
            { name: 'Bootstrap', level: 'Intermédiaire', icon: bootstrapIcon },
            { name: 'Tailwind', level: 'Débutant', icon: tailwindIcon },
            { name: 'React', level: 'Intermédiaire', icon: reactIcon },
            { name: 'Laravel', level: 'Débutant', icon: laravelIcon },
            { name: 'Symfony', level: 'Débutant', icon: symfonyIcon, darkIcon: true },
        ],
    },
    {
        name: 'Base de données',
        skills: [
            { name: 'MySQL', level: 'Intermédiaire', icon: mysqlIcon },
            { name: 'MongoDB', level: 'Débutant', icon: mongodbIcon },
        ],
    },
    {
        name: 'Autre',
        skills: [
            { name: 'Python', level: 'Intermédiaire', icon: pythonIcon },
            { name: 'Github', level: 'Intermédiaire', icon: githubIcon, darkIcon: true },
            { name: 'Figma', level: 'Débutant', icon: figmaIcon },
        ],
    },
]
