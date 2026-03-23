import Skillcard from "../components/SkillCard"

export default function Skills() {
    return (
        <section id="competences" className="bg-base-200 mx-auto text-center px-6 flex justify-center py-20 min-w-full">
        
        <div className="max-w-3xl w-full flex flex-col justify-between flex-1 gap-12">
           <div>
                <h2 className="text-4xl font-bold">Mes compétences</h2>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-around gap-4">
                
                {/* Frontend */}
                <div className="bg-base-100 rounded-2xl p-2">
                    <h3 className="text-3xl font-semibold my-4">Frontend</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* HTML */}
                        <Skillcard icon="devicon-html5-plain colored" name="HTML" level="Intermédiaire" />
                        {/* CSS */}
                        <Skillcard icon="devicon-css3-plain colored" name="CSS" level="Intermédiaire" />
                        {/* JavaScript */}
                        <Skillcard icon="devicon-javascript-plain colored" name="JavaScript" level="Débutant" />
                    </div>
                </div>

                {/* Backend */}
                <div className="bg-base-100 rounded-2xl p-2">
                    <h3 className="text-3xl font-semibold my-4">Backend</h3>
                    <div className="flex justify-center gap-4">
                        {/* PHP */}
                        <Skillcard icon="devicon-php-plain colored" name="PHP" level="Débutant" />
                        {/* CSS */}
                        <Skillcard icon="devicon-nodejs-plain colored" name="Express" level="Débutant" />
                    </div>
                </div>

                {/* Frameworks */}
                <div className="bg-base-100 rounded-2xl p-2">
                    <h3 className="text-3xl font-semibold my-4">Frameworks</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* Bootstrap */}
                        <Skillcard icon="devicon-bootstrap-plain colored" name="Bootstrap" level="Intermédiaire" />
                        {/* Tailwind */}
                        <Skillcard icon="devicon-tailwindcss-plain colored" name="Tailwind" level="Débutant" />
                        {/* React */}
                        <Skillcard icon="devicon-react-original colored" name="React" level="Intermédiaire" />
                        {/* Laravel */}
                        <Skillcard icon="devicon-laravel-original colored" name="Laravel" level="Apprentissage" />
                        {/* Symfony */}
                        <Skillcard icon="devicon-symfony-original" name="Symfony" level="Apprentissage" />
                    </div>
                </div>

                {/* Base de données */}
                <div className="bg-base-100 rounded-2xl p-2">
                    <h3 className="text-3xl font-semibold my-4">Base de données</h3>
                    <div className="flex justify-center gap-4">
                        {/* PHP */}
                        <Skillcard icon="devicon-mysql-original colored" name="MySQL" level="Intermédiaire" />
                        {/* CSS */}
                        <Skillcard icon="devicon-mongodb-plain colored" name="MongoDB" level="Débutant" />
                    </div>
                </div>


                {/* Autre */}
                <div className="bg-base-100 rounded-2xl p-2">
                    <h3 className="text-3xl font-semibold my-4">Autre</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* Python */}
                        <Skillcard icon="devicon-python-plain colored" name="Python" level="Intermédiaire" />
                        {/* Github */}
                        <Skillcard icon="devicon-github-original" name="Github" level="Intermédiaire" />
                        {/* Github */}
                        <Skillcard icon="devicon-figma-plain colored" name="Figma" level="Débutant" />
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}