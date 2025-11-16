import { handlers } from "@/auth"; // Referring to the auth.ts file we just created
export const { GET, POST } = handlers;

/* NOTES */

// This file adds a route handler inside of NextJS.

// Anytime you create a route.ts file it automatically becomes a route inside of NextJS.

// The api folder is just a convention. You can create a route.ts file wherever you like then be able to route to it.

// The box bracket [...nextauth] is essentially a catch-all router.  For example, api/auth/abc and api/auth/abc/123 are valid routes and get redirected to /route.
