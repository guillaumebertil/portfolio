# Portfolio de Guillaume — refonte du design

## Objectif
Refaire le design de mon portfolio personnel pour qu'il serve de vitrine à un recruteur.
Cible : développeur web junior (PHP/Symfony/Laravel) en recherche d'un premier emploi.
Un recruteur doit comprendre qui je suis et ce que j'ai construit en moins de 30 secondes.

## Périmètre
Nouveau design, même contenu : on garde les textes et les sections existants (le contenu actuel dans `src/` fait foi), on change le rendu visuel.
Ne pas réécrire ni reformuler mes textes sans me le demander.
Deux changements de contenu sont voulus :
- Section « À propos » : mettre en avant EasyFit, mon projet le plus important.
- Formulaire de contact : à repenser (voir plus bas).
Le CV sera mis à jour plus tard : ne pas y toucher.

## Stack (existante, à conserver)
- React 19 + Vite 8, JavaScript (pas de TypeScript)
- Tailwind CSS 4 (plugin `@tailwindcss/vite`) + daisyUI 5
- Tailwind 4 et daisyUI 5 se configurent dans le CSS (`@plugin "daisyui"`, `@theme`), pas dans un `tailwind.config.js`. Ne pas créer ce fichier.
- Utiliser les composants daisyUI avant d'écrire du CSS custom.
- Déploiement : Vercel (site actuel : guillaumebertil.vercel.app)

## Commandes
- Dev : `npm run dev`
- Build : `npm run build`
- Lint : `npm run lint`
- Prévisualiser le build : `npm run preview`

## Contenu
- Présentation courte (qui je suis, reconversion, ce que je cherche)
- Projets (pour chaque projet : description en 2 lignes, stack, liens)
  - EasyFit : e-commerce Symfony 7 — dépôt https://github.com/guillaumebertil/easyfit — démo https://guillaumeb.alwaysdata.net/
  - Port Russell : application de gestion de réservations de port de plaisance en Laravel — dépôt https://github.com/guillaumebertil/port-russell-v2
- Compétences (uniquement celles que je maîtrise réellement)
- Contact :
  - Email : guillaume.bertil@gmail.com
  - GitHub : https://github.com/guillaumebertil
  - LinkedIn : https://www.linkedin.com/in/guillaume-bertil/
- Langue du site : français uniquement (pas d'i18n)

## Formulaire de contact
Le site est statique (Vite, sans backend) : l'envoi passe par Formspree, déjà configuré.
- Conserver le endpoint Formspree existant (le retrouver dans le code actuel, ne pas en inventer un autre).
- Seul le design et l'expérience du formulaire changent : champs, validation côté client, messages de succès et d'erreur, état de chargement, accessibilité (labels, focus, erreurs annoncées).
- Ne pas changer de service d'envoi et ne pas ajouter de dépendance pour le formulaire sans me le demander.

## Design
- Direction : sombre et technique (thème sombre par défaut, ambiance développeur, détails discrets type terminal, sans surcharge)
- Pas de site de référence : avant de coder, proposer 2 ou 3 pistes visuelles courtes (palette, typographie, ambiance) et me laisser choisir
- Thème daisyUI personnalisé (piste « Terminal discret ») avec deux couleurs d'accent : un accent principal vert (`#3ddc97`, actions : boutons, liens) et un accent secondaire ambre (`#f2b134`, touches de contraste)
- Animations et effets au survol : présents mais discrets. Pas d'effet qui distrait ou ralentit (pas de parallaxe, pas d'animation en boucle). Respecter `prefers-reduced-motion`.
- Responsive obligatoire (mobile d'abord)
- Accessibilité : contrastes suffisants, balises sémantiques, attributs alt, navigation au clavier
- Pas de rendu générique : éviter les dégradés violets et les mises en page cliché

## Règles de travail
- Avant de coder : proposer un plan et attendre ma validation
- Git : travailler sur une branche dédiée (`refonte-design`), jamais directement sur `main`
- Ne jamais merger dans `main`, ne jamais pousser sur `main`, ne jamais réécrire l'historique (pas de `push --force`) : c'est moi qui valide et qui merge
- Un changement = un commit, message en français, clair
- Ne pas ajouter de dépendance sans me le demander et me dire pourquoi
- Ne pas inventer de contenu (projets, expériences, chiffres, liens) : si une info manque, poser la question
- Expliquer brièvement tout choix technique que je pourrais ne pas connaître : je dois pouvoir le défendre à l'oral
- Code simple et lisible plutôt que malin ; composants petits, un fichier = une responsabilité

## Définition de « terminé »
- `npm run build` et `npm run lint` passent sans erreur
- Le site est vérifié en largeur mobile et desktop
- Score Lighthouse visé : > 90 en performance et accessibilité
