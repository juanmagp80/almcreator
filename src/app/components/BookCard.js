"use client";

export default function BookCard({ title, cover, author, description }) {
    return (
        <div className="group perspective w-full" style={{ perspective: '2000px' }}>
            <div className="relative transform-style-preserve-3d transition-all duration-500 ease-out hover:rotate-y-30 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[500px] flex flex-col backface-hidden">
                    {/* Contenedor de imagen */}
                    <div className="relative w-full h-[350px] overflow-hidden">
                        <img
                            src={cover}
                            alt={title}
                            className="w-full h-full object-contain transform transition-transform group-hover:scale-105"
                        />
                        {/* Overlay con botón de compra */}
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <button
                                className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full 
                                         font-semibold tracking-wide shadow-xl transform 
                                         translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                                         transition-all duration-500 ease-out delay-100
                                         backdrop-blur-sm border border-white/20"
                            >
                                Comprar Ahora
                            </button>
                        </div>
                    </div>

                    {/* Contenedor de texto */}
                    <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 transform transition-transform group-hover:translate-x-2">{title}</h3>
                            <p className="text-sm text-gray-500 mb-2 transform transition-transform group-hover:translate-x-1 delay-75">{author}</p>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 transform transition-transform group-hover:translate-x-1 delay-100">{description}</p>
                    </div>
                </div>

                {/* Efectos de profundidad */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent rounded-xl transform translate-z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent rounded-xl transform -translate-z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
    );
}