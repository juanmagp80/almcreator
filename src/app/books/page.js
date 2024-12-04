// src/app/books/page.js
"use client";

import { motion } from "framer-motion";
import BookCard from '../components/BookCard';
import Navbar from '../components/Navbar';

const books = [
    {
        id: 1,
        title: "La Maravilla de la Navidad: Una Historia Mágicamente Divertida para Niños",
        author: "ALM CREATOR",
        cover: "/navidad.jpg",
        description: "Andaira recibe una carta misteriosa que cambiará su Navidad para siempre..."
    },
    {
        id: 2,
        title: "Truco o Trato: Historia terrorificamente divertida de Halloween",
        author: "ALM CREATOR",
        cover: "/halloween.jpg",
        description: "Andaira y sus amigos están listos para disfrutar de la noche más aterradora del año..."
    },
    {
        id: 3,
        title: "Diario de una Youtuber: Divertidos consejos para ser una youtuber",
        author: "ALM CREATOR",
        cover: "/youtuber.jpg",
        description: "Diario de una Youtuber es un libro divertido y entretenido..."
    },
    {
        id: 4,
        title: "Aventuras de Vacaciones: Emocionantes vacaciones de verano repletas de aventuras.",
        author: "ALM CREATOR",
        cover: "/vacaciones.jpg",
        description: "Este libro forma parte de la serie ANDAIRABLOX..."
    }
];

const Books = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl font-titles text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                            Mis Libros
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-3 gap-12 auto-rows-min">
                        {/* Primeros 3 libros arriba */}
                        {books.slice(0, 3).map((book, index) => (
                            <motion.div
                                key={book.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 shadow-xl 
                                     border border-white/20 transition-all duration-300
                                     hover:shadow-2xl hover:shadow-purple-500/20"
                            >
                                <BookCard {...book} />
                            </motion.div>
                        ))}

                        {/* Último libro abajo a la izquierda */}
                        {books.slice(3, 4).map((book) => (
                            <motion.div
                                key={book.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ scale: 1.03 }}
                                className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 shadow-xl 
                                     border border-white/20 transition-all duration-300
                                     hover:shadow-2xl hover:shadow-purple-500/20
                                     col-span-1"
                            >
                                <BookCard {...book} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Books;