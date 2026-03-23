export default function Portfolio() {
    return (
        <section id="portfolio" className="bg-base-100 mx-auto text-center px-6 flex justify-center py-20">
            <div className="max-w-3xl w-full flex flex-col justify-between flex-1 gap-12">
                <div>
                    <h2 className="text-4xl font-bold">Mon portfolio</h2>
                    <p className="mt-4">En construction</p>
                    <p className="mt-4 mb-8 lg:mb-0">Vous pouvez pour le moment consulter les projets que j'ai réalisés durant ma formation sur mon GitHub</p>
                    <a href="https://github.com/guillaumebertil" target="_blank" className="btn btn-outline btn-wide mt-8 gap-2">
                        <i className="devicon-github-original text-2xl mr-2"></i>
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}