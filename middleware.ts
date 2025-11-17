import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const protectedRoutes = [
    "/dashboard",
    "/dashboard/settings",
    "/dashboard/profile",
  ];

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // Appears Problematic
  // Logic: If route is NOT protected AND user has NO session, redirect to login
  // Issue: This seems backwards - why redirect to login if the route isn't protected?
  // Unprotected routes should be accessible without authentication

  //   if (!isProtectedRoute && !session) {
  //     const redirectUrl = new URL("/login", request.url);
  //     return NextResponse.redirect(redirectUrl);
  //   }

  // Logic: If user has NO session AND route IS protected, redirect to /login
  //  This is the core protection mechanism - prevents unauthenticated access to protected routes
  //  Creates a new URL object for the redirect using the current request URL as the base

  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // filter middleware to only run on these specific paths instead of the default,
  //  which is all paths
  matcher: ["/dashboard/:path*", "/api/dashboard/:path*"],
};

/* Notes */

// This is middleware to keep the session alive.

// This will update the session expiry everytime it is called.
