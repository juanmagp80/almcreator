// src/app/books/page.js
"use client";

import { motion } from "framer-motion";
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const books = [
    {
        id: 1,
        title: "La Maravilla de la Navidad: Una Historia Mágicamente Divertida para Niños",
        author: "ALM CREATOR",
        cover: "/navidad.jpg",
        description: "Andaira recibe una carta misteriosa que cambiará su Navidad para siempre...",
        purchaseLink: "https://www.amazon.es/Maravilla-Navidad-M%C3%A1gicamente-Divertida-Andairablox-ebook/dp/B0DNQB9K8S/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2U1F42UB8E33B&dib=eyJ2IjoiMSJ9.BxJUg5A3VFsfVwAf4rt0eDtPLGw17JvtIqraxFLHWWUmshTWrlOSWyycqUsMXyXzzvMmwwx1OZeazMgVUQlWaN-yFRs5t92Oj_cwAM5GnJ9qDGT_dt0cfcN6tQ7v4HIGafxjwKSG2nmgwqu38eaSb347GFVrpDHCKseZpnlxz_SfgPpUS7fS-BsNE9PWN6Oqk349Uu_3EpwZGa8MVD_VmQ.TaGzj2Lymv2zrN-rhOgZhefvQYWy2roHWwEjIDCH5kU&dib_tag=se&keywords=alm+creator&nsdOptOutParam=true&qid=1733385452&sprefix=alm+creator%2Caps%2C110&sr=8-1"
    },
    {
        id: 2,
        title: "Truco o Trato: Historia terrorificamente divertida de Halloween",
        author: "ALM CREATOR",
        cover: "/halloween.jpg",
        description: "Andaira y sus amigos están listos para disfrutar de la noche más aterradora del año...",
        purchaseLink: "https://www.amazon.es/Truco-Trato-terrorificamente-divertida-Andairablox-ebook/dp/B0DJ269ZZW/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2U1F42UB8E33B&dib=eyJ2IjoiMSJ9.BxJUg5A3VFsfVwAf4rt0eDtPLGw17JvtIqraxFLHWWUmshTWrlOSWyycqUsMXyXzzvMmwwx1OZeazMgVUQlWaN-yFRs5t92Oj_cwAM5GnJ9qDGT_dt0cfcN6tQ7v4HIGafxjwKSG2nmgwqu38eaSb347GFVrpDHCKseZpnlxz_SfgPpUS7fS-BsNE9PWN6Oqk349Uu_3EpwZGa8MVD_VmQ.TaGzj2Lymv2zrN-rhOgZhefvQYWy2roHWwEjIDCH5kU&dib_tag=se&keywords=alm+creator&nsdOptOutParam=true&qid=1733385741&sprefix=alm+creator%2Caps%2C110&sr=8-2"
    },
    {
        id: 3,
        title: "Diario de una Youtuber: Divertidos consejos para ser una youtuber",
        author: "ALM CREATOR",
        cover: "/youtuber.jpg",
        description: "Diario de una Youtuber es un libro divertido y entretenido...",
        purchaseLink: "https://www.amazon.es/Diario-una-Youtuber-Andairablox-CREATOR/dp/B0D9RV5R3F/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2U1F42UB8E33B&dib=eyJ2IjoiMSJ9.BxJUg5A3VFsfVwAf4rt0eDtPLGw17JvtIqraxFLHWWUmshTWrlOSWyycqUsMXyXzzvMmwwx1OZeazMgVUQlWaN-yFRs5t92Oj_cwAM5GnJ9qDGT_dt0cfcN6tQ7v4HIGafxjwKSG2nmgwqu38eaSb347GFVrpDHCKseZpnlxz_SfgPpUS7fS-BsNE9PWN6Oqk349Uu_3EpwZGa8MVD_VmQ.TaGzj2Lymv2zrN-rhOgZhefvQYWy2roHWwEjIDCH5kU&dib_tag=se&keywords=alm+creator&nsdOptOutParam=true&qid=1733385741&sprefix=alm+creator%2Caps%2C110&sr=8-3"
    },
    {
        id: 4,
        title: "Aventuras de Vacaciones: Emocionantes vacaciones de verano repletas de aventuras.",
        author: "ALM CREATOR",
        cover: "/vacaciones.jpg",
        description: "Este libro forma parte de la serie ANDAIRABLOX...",
        purchaseLink: "https://www.amazon.es/Aventuras-Vacaciones-Emocionantes-vacaciones-Andairablox-ebook/dp/B0DJ7SQ6SV/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2U1F42UB8E33B&dib=eyJ2IjoiMSJ9.BxJUg5A3VFsfVwAf4rt0eDtPLGw17JvtIqraxFLHWWUmshTWrlOSWyycqUsMXyXzzvMmwwx1OZeazMgVUQlWaN-yFRs5t92Oj_cwAM5GnJ9qDGT_dt0cfcN6tQ7v4HIGafxjwKSG2nmgwqu38eaSb347GFVrpDHCKseZpnlxz_SfgPpUS7fS-BsNE9PWN6Oqk349Uu_3EpwZGa8MVD_VmQ.TaGzj2Lymv2zrN-rhOgZhefvQYWy2roHWwEjIDCH5kU&dib_tag=se&keywords=alm+creator&nsdOptOutParam=true&qid=1733385741&sprefix=alm+creator%2Caps%2C110&sr=8-4"
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 auto-rows-min">
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
                                <BookCard
                                    key={index}
                                    title={book.title}
                                    cover={book.cover}
                                    author={book.author}
                                    description={book.description}
                                    purchaseLink={book.purchaseLink}
                                />
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
            <Footer />
        </>
    );
};

export default Books;