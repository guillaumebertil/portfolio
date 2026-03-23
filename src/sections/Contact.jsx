export default function Contact() {
    return (
        <section id="contact" className="bg-base-200 py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">Me contacter</h2>
                <p className="text-center text-lg mb-12">Une question ? Une opportunité ? Écrivez-moi.</p>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Formulaire */}
                    <form action="https://formspree.io/f/xeerbnqk" method="POST" className="flex flex-col gap-4">
                        <input type="text" name="name" placeholder="Votre nom" className="input input-bordered w-full" required />
                        <input type="email" name="email" placeholder="Votre email" className="input input-bordered w-full" required />
                        <textarea name="message" placeholder="Votre message" className="textarea textarea-bordered w-full h-40" required></textarea>
                        <button type="submit" className="btn btn-accent">Envoyer</button>
                    </form>

                    {/* Liens */}
                    <div className="flex flex-col justify-center items-center gap-6">
                        <a href="https://github.com/guillaumebertil" target="_blank" className="btn btn-outline btn-wide gap-2">
                            <i className="devicon-github-original text-2xl mr-2"></i>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/guillaume-bertil-77223a3b8/" target="_blank" className="btn btn-outline btn-wide gap-2">
                            <i className="devicon-linkedin-plain colored text-2xl mr-2"></i>
                            LinkedIn
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}