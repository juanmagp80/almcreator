// src/components/Navbar.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/90 backdrop-blur-lg shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0"
                    >
                        <Link href="/" className="group relative">
                            <span className="text-2xl font-chewy bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                                ALM CREATOR
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-purple-600 transition-all group-hover:w-full"></span>
                        </Link>
                    </motion.div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex font-sans items-baseline space-x-8">
                            {[
                                { name: "Libros", href: "/books" },
                                { name: "Autor", href: "/autor" },
                                { name: "Contacto", href: "/contact" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative group"
                                >
                                    <motion.span
                                        className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${pathname === item.href
                                            ? "text-primary-600"
                                            : "text-gray-600 hover:text-primary-600"
                                            }`}
                                        whileHover={{ y: -2 }}
                                    >
                                        {item.name}
                                    </motion.span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform" />
                                    {pathname === item.href && (
                                        <motion.span
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}