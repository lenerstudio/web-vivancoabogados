import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Quiénes Somos', href: '#about' },
        { name: 'Servicios', href: '#services' },
        { name: 'Por qué elegirnos', href: '#benefits' },
        { name: 'Contacto', href: '#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            const headerOffset = 85;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-lg bg-gradient-to-r from-[#1b304b]/95 via-[#1F3B5B]/95 to-[#1F3B5B]/95 backdrop-blur-md' : 'py-4 bg-gradient-to-r from-[#1b304b] via-[#1F3B5B] to-[#1F3B5B]'
                }`}
        >
            <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center">
                    <img
                        src="/img/logo.jpg"
                        alt="Vianco y Asociados"
                        className="h-14 w-auto object-contain rounded"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-gray-200 hover:text-[#C9A646] font-medium transition-colors text-sm uppercase tracking-wider"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:+34955194383"
                        className="flex items-center gap-2 px-4 py-2 border border-[#C9A646] text-[#C9A646] hover:bg-[#C9A646] hover:text-[#1F3B5B] rounded transition-all font-semibold text-sm"
                    >
                        <Phone size={16} />
                        <span>955 194 383</span>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-[#1D3653] overflow-hidden border-t border-gray-700"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg text-white font-medium hover:text-[#C9A646]"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="tel:+34955194383"
                                className="inline-flex items-center gap-2 text-[#C9A646] font-semibold mt-4"
                            >
                                <Phone size={18} /> Llámanos ahora
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
