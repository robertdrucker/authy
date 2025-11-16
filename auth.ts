import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log({ credentials });

        if (
          credentials.username === "admin" &&
          credentials.password === "admin"
        ) {
          return { id: "1", name: "Admin" };
        }
        return null;
      },
    }),
  ],
});

/* NOTES */

// Use this file to set up credentials.

// This is essentially the entry point for next auth and where next auth gets configured.

// Whatever functions get exposed here is what we can use inside of our code.

// Whatever providers that we want to set up (Credentials provider, GitHub provider, any Oauth providers, Google, etc.), place them in the providers array.
