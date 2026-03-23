export default function About() {
    return (
        <section id="about" className="bg-base-100 mx-auto text-center px-6 flex justify-center py-20">

            <div className="max-w-3xl w-full flex flex-col justify-between flex-1 gap-12">
                <div>
                    <h2 className="text-4xl font-bold">À propos de moi</h2>
                    {/* Badges */}
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <div className="badge badge-primary badge-lg gap-2">
                            📍 Dijon
                        </div>
                        <div className="badge badge-secondary badge-lg gap-2">
                            📅 Disponible dès maintenant
                        </div>
                        <div className="badge badge-accent badge-lg gap-2">
                            🎓 Formation DWWM - CEF
                        </div>
                    </div>
                </div>

                {/* Mon parcours */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Mon parcours</h3>
                    <p className="text-lg">
                        Après 9 ans comme Brigadier-chef dans le régiment du Train, j'ai quitté l'armée en 2024 et commencé à apprendre le développement web en 2025.
                        Un changement radical, mais une même façon d'aborder les choses : méthode, rigueur et sens des responsabilités.
                    </p>
                </div>

                {/* Mes motivations */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Mes motivations</h3>
                    <p className="text-lg">
                        Ce qui m'attire dans le code, c'est la logique et la satisfaction de construire quelque chose de concret.
                        Aujourd'hui en formation DWWM au CEF, je travaille principalement avec React et je monte en compétences sur Laravel et Symfony.
                    </p>
                </div>

                {/* Mon objectif */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Mon objectif</h3>
                    <p className="text-lg">
                        Je cherche un stage de 10 semaines dans le secteur de Dijon pour intégrer une vraie équipe, apprendre sur le terrain et contribuer à des projets concrets.
                    </p>
                </div>

            </div>
        </section>
    )
}