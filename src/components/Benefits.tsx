import { ShieldCheck, UserCheck, BookOpenCheck, MapPinned } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Benefits() {
    const benefits = [
        {
            title: "Experiencia Comprobada",
            desc: "Abogados con años de experiencia en diferentes áreas del derecho, con foco en extranjería e inmigración.",
            icon: ShieldCheck
        },
        {
            title: "Atención Personalizada",
            desc: "Analizamos tu situación concreta y diseñamos una estrategia adaptada a tu caso, con un trato cercano y humano.",
            icon: UserCheck
        },
        {
            title: "Actualización Constante",
            desc: "Estamos en contacto con consejerías y ministerios para informarte sobre cambios legales y ayudas.",
            icon: BookOpenCheck
        },
        {
            title: "Cobertura Nacional",
            desc: "Ofrecemos nuestros servicios en toda España, ayudándote sin importar dónde te encuentres.",
            icon: MapPinned
        }
    ];

    return (
        <section id="benefits" className="py-24 bg-primary text-white relative">
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wide uppercase bg-accent text-primary rounded-full">
                        Propuesta de Valor
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                        ¿Por qué elegir Viancoyasociados?
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group text-center md:text-left"
                        >
                            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                                <benefit.icon className="text-primary w-8 h-8" strokeWidth={2} />
                            </div>

                            <h3 className="text-xl font-bold mb-3 font-serif tracking-wide text-accent">
                                {benefit.title}
                            </h3>

                            <p className="text-slate-300 leading-relaxed text-sm">
                                {benefit.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        </section>
    );
}
