import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[url('/img/image-18.jpg')] bg-cover bg-center"
        >
            <div className="absolute inset-0 bg-[#1F3B5B]/80 z-0"></div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-[#C9A646]/20 text-[#C9A646] rounded-full backdrop-blur-sm border border-[#C9A646]/30">
                        Expertos en Extranjería
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                        Líderes en extranjería e inmigración <br className="hidden md:block" /> en Sevilla y en toda España
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed">
                        20 años ayudando a personas y familias migrantes a regularizar su situación con soluciones legales eficaces, personalizadas y humanas.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A646] hover:bg-[#b08d2f] text-[#1F3B5B] font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <span>Quiero una asesoría</span>
                            <ArrowRight size={20} />
                        </a>

                        <a
                            href="tel:+34955194383"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#1F3B5B] text-white font-semibold rounded-lg transition-all"
                        >
                            <Phone size={20} />
                            <span>955 194 383</span>
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-gray-300 max-w-lg mx-auto leading-relaxed border-t border-gray-700 pt-4">
                        Te acompañamos en todo el proceso: estudiamos tu caso, presentamos la solicitud y hacemos el seguimiento hasta obtener respuesta.
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                <ArrowRight className="transform rotate-90" size={32} />
            </div>
        </section>
    );
}
