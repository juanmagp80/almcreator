// middleware.js
export function middleware(request) {
    // Prevenir redirecciones no deseadas
    if (request.nextUrl.pathname === '/es-ES/es-ES') {
        return Response.redirect(new URL('/', request.url))
    }
}

export const config = {
    matcher: '/:path*'
}