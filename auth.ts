import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
});

/* NOTES */

// Use this file to set up credentials.

// This is essentially the entry point for next auth and where next auth gets configured.

// Whatever functions get exposed here is what we can use inside of our code.

// Whatever providers that we want to set up (Credentials provider, GitHub provider, any Oauth providers, Google, etc.), place them in the providers array.
