import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-primary-dark pt-12 pb-6 border-t border-white/5 text-slate-400 text-sm">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="container mx-auto px-4 md:flex justify-between items-center text-center md:text-left"
            >
                <p className="mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Viancoyasociados S.L. Todos los derechos reservados.
                </p>
                <div className="flex justify-center md:justify-end gap-6 text-slate-500">
                    <a href="#" className="hover:text-accent transition-colors">Aviso Legal</a>
                    <a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a>
                    <a href="#" className="hover:text-accent transition-colors">Cookies</a>
                </div>
            </motion.div>
        </footer>
    );
}
