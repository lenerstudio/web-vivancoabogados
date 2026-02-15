import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
    const points = [
        "20 años de experiencia en extranjería e inmigración en Sevilla.",
        "Equipo especializado en diferentes áreas del derecho relacionadas con extranjería.",
        "Comunicación constante con consejerías y ministerios para mantenerte al día de ayudas y subvenciones.",
        "Servicios de extranjería para clientes en toda España."
    ];

    return (
        <section id="about" className="py-20 bg-neutral scroll-mt-28">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                        <span className="w-8 h-[2px] bg-accent"></span>
                        Quiénes Somos
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                        Aliados en tu nuevo comienzo
                    </h2>

                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        <strong className="text-primary font-semibold">Viancoyasociados S.L.</strong> es un despacho especializado exclusivamente en asesoramiento y gestión integral de trámites de extranjería e inmigración. Trabajamos cada día para defender los derechos de las personas migrantes con honestidad, conocimiento y un trato cercano.
                    </p>

                    <p className="text-lg text-slate-600 mb-8 leading-relaxed italic border-l-4 border-accent pl-4">
                        Sabemos lo que significa empezar de nuevo en otro país, por eso no solo tramitamos tu expediente: nos convertimos en aliados en tu proceso de vida.
                    </p>

                    <ul className="space-y-4">
                        {points.map((point, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <div className="min-w-6 mt-1 text-accent">
                                    <Check size={20} strokeWidth={3} />
                                </div>
                                <span className="text-slate-700 font-medium">{point}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right: Image Grid */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative grid grid-cols-2 gap-4"
                >
                    <div className="space-y-4 pt-12">
                        <img
                            src="/img/image-3.jpg"
                            alt="Equipo trabajando"
                            className="rounded-lg shadow-lg aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="bg-primary p-6 rounded-lg text-white shadow-xl">
                            <div className="text-4xl font-bold text-accent mb-1">+20</div>
                            <div className="text-sm uppercase tracking-wide opacity-80">Años de experiencia</div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-accent">
                            <Star className="text-accent mb-2" size={32} fill="currentColor" />
                            <div className="text-primary font-bold text-lg">Trato Humano</div>
                            <p className="text-slate-500 text-sm">Cercanía y empatía en cada paso.</p>
                        </div>
                        <img
                            src="/img/image-2.jpg"
                            alt="Consultoría Legal"
                            className="rounded-lg shadow-lg aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-accent/10 to-transparent blur-3xl opacity-50 pointer-events-none"></div>
                </motion.div>

            </div>
        </section>
    );
}
