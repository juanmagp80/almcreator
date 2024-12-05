// src/app/components/Contacto.jsx
"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contacto = () => {
    return (
        <>         <Navbar />
            <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20"
                        >
                            <h2 className="text-4xl font-titles tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                                Contáctame
                            </h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-6 font-body text-xl text-gray-700 leading-relaxed space-y-4"
                            >
                                Si tienes alguna pregunta o comentario, no dudes en enviarme un mensaje.
                            </motion.p>
                            <form className="mt-8 space-y-6">
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div>
                                        <label htmlFor="name" className="sr-only">Nombre</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Nombre"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">Correo Electrónico</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Correo Electrónico"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="sr-only">Mensaje</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Mensaje"
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};


export default Contacto;