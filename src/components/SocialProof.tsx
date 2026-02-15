import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SocialProof() {
    const team = [
        { name: "Walter Vivanco Torres", role: "Presidente", img: "/img/image-6.jpg" },
        { name: "Idalia Domenech León", role: "Especialista en Extranjería", img: "/img/image-10.jpg" },
        { name: "Gerardo Parejo", role: "Experto en Ley de la Segunda Oportunidad", img: "/img/image-12.jpg" }
    ];

    const videos = [
        "/video/media-1771167424071.mp4",
        "/video/media-1771167434044.mp4",
        "/video/media-1771167437045.mp4",
        "/video/media-1771167439664.mp4",
        "/video/media-1771167443563.mp4",
        "/video/media-1771167446549.mp4"
    ];

    return (
        <section id="social-proof" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                        Nuestros Expertos
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Este equipo multidisciplinar nos permite abordar tu caso con una visión integral del derecho y ofrecerte soluciones sólidas y seguras.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 text-center">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-neutral/20 p-6 rounded-2xl hover:bg-neutral/40 transition-colors duration-300 shadow-sm hover:shadow-lg group"
                        >
                            <div className="relative w-48 h-48 mx-auto -mt-12 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold font-serif text-primary mb-2 line-clamp-1">{member.name}</h3>
                            <p className="text-slate-500 font-medium text-sm">{member.role}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 text-primary pointer-events-none">
                        <Star size={120} fill="currentColor" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Lo que dicen nuestros clientes
                        </h3>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 italic">
                            "Historias reales de personas que han confiado en nosotros para regularizar su situación en España."
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {videos.map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="aspect-video relative bg-black">
                                    <video
                                        controls
                                        preload="metadata"
                                        className="w-full h-full object-contain"
                                    >
                                        <source src={src} type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                </div>
                                <div className="p-4 bg-white">
                                    <div className="flex justify-center gap-1 text-accent mb-2">
                                        {[...Array(5)].map((_, starI) => (
                                            <Star key={starI} size={16} fill="currentColor" strokeWidth={0} />
                                        ))}
                                    </div>
                                    <p className="text-sm font-medium text-slate-500">Caso de Éxito #{i + 1}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}