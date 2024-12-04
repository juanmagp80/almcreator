// src/app/page.jsx
"use client";

import { motion } from "framer-motion";
import Navbar from './components/Navbar';
import TypeWriter from './components/TypeWriter';

// Posiciones fijas predefinidas para los elementos flotantes
const floatingElements = [
  { left: "20%", top: "10%" },
  { left: "70%", top: "15%" },
  { left: "40%", top: "60%" },
  { left: "85%", top: "40%" },
  { left: "15%", top: "80%" }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 overflow-hidden">
        <div className="fixed inset-0 pointer-events-none">
          {floatingElements.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-br from-primary-400/20 to-purple-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={position}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20"
            >
              <h1 className="text-4xl font-titles tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <TypeWriter
                  text="ALM CREATOR"
                  delay={0.15} // más lento
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-primary-600 to-pink-600"
                />

              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 font-body text-xl text-gray-700 leading-relaxed space-y-4"
              >
                Alberto López es un escritor apasionado que, a pesar de su ajetreada vida, dedica su tiempo libre a dar vida a nuevas historias.
                <span className="block mt-4">
                  Nacido en Málaga, España, a sus 39 años ha encontrado en la escritura un medio para conectar con su hija Ariadna, dedicándole su exitosa serie de libros infantiles Andairablox.
                </span>
                <span className="block mt-4 font-medium text-primary-600 hover:text-primary-700 transition-colors duration-300">
                  ¡No te pierdas las nuevas aventuras que Alberto tiene preparadas!
                </span>
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-12 lg:mt-0 lg:col-span-6 relative"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 15,
                  rotateX: -5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="relative mx-auto w-full max-w-lg"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500" />
                <img
                  src="/alberto.jpg"
                  alt="Foto del escritor"
                  className="relative rounded-full shadow-2xl object-cover w-full h-full border-4 border-white transform transition-all duration-500"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}