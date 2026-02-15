import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-primary text-white relative">
            <div className="container mx-auto px-4 max-w-6xl w-full">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
                    Da el siguiente paso en tu proceso
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

                    {/* Contact Details Card */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold font-serif mb-6 text-accent">Contacto Directo</h3>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                Cuéntanos tu caso y recibe asesoramiento especializado. Analizaremos tu situación y nos encargaremos de toda la tramitación.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-center gap-4">
                                    <div className="bg-accent rounded-full p-3 text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-wide text-white/50 mb-1">Teléfonos</span>
                                        <a href="tel:+34955194383" className="block text-lg font-bold hover:text-accent transition-colors">955 194 383</a>
                                        <a href="tel:+34689732252" className="block text-lg font-bold hover:text-accent transition-colors">689 732 252</a>
                                    </div>
                                </li>

                                <li className="flex items-center gap-4">
                                    <div className="bg-accent rounded-full p-3 text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-wide text-white/50 mb-1">Email</span>
                                        <a href="mailto:info@vivancoyasociados.com" className="text-lg font-medium hover:text-accent transition-colors">info@vivancoyasociados.com</a>
                                    </div>
                                </li>

                                <li className="flex items-center gap-4">
                                    <div className="bg-accent rounded-full p-3 text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-wide text-white/50 mb-1">Dirección</span>
                                        <p className="text-lg font-medium">C/ Playa de Rota 13 – 41009 Sevilla</p>
                                    </div>
                                </li>

                                <li className="flex items-center gap-4">
                                    <div className="bg-accent rounded-full p-3 text-primary">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-wide text-white/50 mb-1">Horario</span>
                                        <p className="text-sm">L-V: 10:00-14:00 | 17:00-21:00</p>
                                        <p className="text-sm">Sábados: 10:00-14:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <a
                            href="https://wa.me/34689732252"
                            className="mt-12 block w-full bg-accent hover:bg-[#b08d2f] text-primary font-bold text-center py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all uppercase tracking-wide"
                        >
                            Agendar Asesoría Ahora
                        </a>
                    </div>

                    {/* Map */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.659346614456!2d-5.975498800000001!3d37.3980366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1110e5e0d3%3A0x8e8b6b6e6b6b6b6b!2sC.%20Playa%20de%20Rota%2C%2013%2C%2041009%20Sevilla!5e0!3m2!1ses!2ses!4v1684768476847!5m2!1ses!2ses"
                            width="100%"
                            height="100%"
                            style={{ padding: 0, margin: 0, border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}
