import {
    Building2, Globe2, HeartHandshake, Briefcase, UserCheck, Users,
    MapPin, RefreshCw, FileText, BadgeCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Arraigo Social, Laboral y por Formación",
        icon: Building2,
        desc: "Gestionamos tus permisos de residencia por arraigo con eficacia."
    },
    {
        title: "Solicitud de Nacionalidad Española",
        icon: Globe2,
        desc: "Te guiamos en cada paso para obtener tu ciudadanía española."
    },
    {
        title: "Inscripción de Parejas de Hecho",
        icon: HeartHandshake,
        desc: "Formaliza tu relación legalmente con nuestro apoyo experto."
    },
    {
        title: "Reagrupación Familiar",
        icon: Users,
        desc: "Trae a tus seres queridos a España cumpliendo todos los requisitos."
    },
    {
        title: "Asesoría a Empleadores",
        icon: Briefcase,
        desc: "Ayudamos a empresas a contratar talento extranjero legalmente."
    },
    {
        title: "Arraigo Familiar",
        icon: UserCheck,
        desc: "Para familiares de ciudadanos españoles o comunitarios."
    },
    {
        title: "Tarjeta Comunitaria",
        icon: MapPin,
        desc: "Obtén la residencia si eres familiar de ciudadano de la UE."
    },
    {
        title: "Renovaciones de Residencia y Trabajo",
        icon: RefreshCw,
        desc: "Evita la caducidad de tus documentos con nuestra gestión proactiva."
    },
    {
        title: "Recursos de Denegaciones",
        icon: FileText,
        desc: "Recurrimos decisiones administrativas injustas para defenderte.",
        highlight: true
    },
    {
        title: "Tramitación Completa",
        icon: BadgeCheck,
        desc: "Nos encargamos de todo, desde el inicio hasta la resolución.",
        highlight: true
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden scroll-mt-28">
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                        ¿Qué trámites de extranjería gestionamos por ti?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Gestionamos tu trámite de extranjería de principio a fin, para que ganes tranquilidad, evites errores y tengas más opciones de éxito en tu proceso migratorio.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`p-6 rounded-xl border transition-all duration-300 group hover:shadow-xl hover:-translate-y-2
                ${service.highlight
                                    ? 'bg-primary text-white border-primary col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 flex flex-col items-center justify-center text-center'
                                    : 'bg-white border-slate-100 hover:border-accent/50 flex flex-col items-center text-center'
                                }`}
                        >
                            <div className={`p-4 rounded-full mb-4 inline-block transition-transform duration-500 group-hover:rotate-12
                ${service.highlight ? 'bg-white/10 text-accent' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'}`}
                            >
                                <service.icon size={32} strokeWidth={1.5} />
                            </div>

                            <h3 className={`text-xl font-bold mb-3 ${service.highlight ? 'text-white' : 'text-primary'}`}>
                                {service.title}
                            </h3>

                            <p className={`text-sm leading-relaxed ${service.highlight ? 'text-slate-200' : 'text-slate-500'}`}>
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 -z-0 pointer-events-none"></div>
        </section>
    );
}
