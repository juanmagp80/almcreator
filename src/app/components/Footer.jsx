// components/Footer.jsx
"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white">
            {/* Efecto de onda decorativo */}
            <div className="absolute top-0 left-0 w-full overflow-hidden h-10 -translate-y-1/2">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-full"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-current text-white"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-8 py-12">
                <div className="flex flex-col items-center">
                    {/* Logo o Nombre */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold mb-6 font-titles text-white" // Eliminar bg-clip-text y gradiente
                    >
                        ALM CREATOR
                    </motion.h2>

                    {/* Enlaces de redes sociales */}
                    <div className="flex space-x-6 mb-8">
                        <motion.a
                            href="https://instagram.com/almcreator"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-3xl hover:text-pink-400 transition-colors duration-300"
                        >
                            <FaInstagram />
                        </motion.a>
                        <motion.a
                            href="https://wa.me/+34XXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-3xl hover:text-green-400 transition-colors duration-300"
                        >
                            <FaWhatsapp />
                        </motion.a>
                    </div>

                    {/* Texto del copyright */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-gray-400"
                    >
                        © {new Date().getFullYear()} ALM CREATOR. Todos los derechos reservados.
                    </motion.p>
                </div>
            </div>

            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 pointer-events-none" />
        </footer>
    );
};

export default Footer;