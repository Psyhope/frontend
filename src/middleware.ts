import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const refreshToken = request.cookies.get("refresh_token")?.value;
    if (refreshToken) {
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard";
        return NextResponse.redirect(url)
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/login', '/register'],
}