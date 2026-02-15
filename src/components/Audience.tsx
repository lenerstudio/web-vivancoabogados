import { AlertTriangle, HelpCircle, FileSearch, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Audience() {
    const painPoints = [
        { icon: HelpCircle, text: "No sabes por dónde empezar con tu trámite o qué documentos necesitas." },
        { icon: AlertTriangle, text: "Has tenido una denegación o miedo a que rechacen tu solicitud." },
        { icon: FileSearch, text: "Necesitas a alguien que te explique el proceso de forma clara." },
        { icon: Home, text: "Quieres regularizar tu situación para vivir con tranquilidad." }
    ];

    return (
        <section className="py-20 bg-neutral/30">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                    ¿Para quién es este servicio?
                </h2>

                <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-12">
                    Esta landing está dirigida a personas extranjeras y familias migrantes que necesitan regularizar o mejorar su situación administrativa en España.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {painPoints.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-400 flex flex-col items-center hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
                                <point.icon size={24} />
                            </div>
                            <p className="text-sm font-medium text-slate-700">
                                {point.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
