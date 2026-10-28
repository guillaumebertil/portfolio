import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/Contact/ContactForm'
import ContactLinks from '../components/Contact/ContactLinks'

export default function Contact() {
    return (
        <section id="contact" className="bg-base-100">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
                <SectionTitle>Me contacter</SectionTitle>
                <p className="mb-8 text-xl text-heading sm:text-2xl">Une question ? Une opportunité ? Écrivez-moi.</p>

                <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
                    <ContactForm />
                    <ContactLinks />
                </div>
            </div>
        </section>
    )
}
