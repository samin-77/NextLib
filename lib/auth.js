import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  database: {
    provider: "sqlite",
    url: ":memory:",
  },
  baseURL: process.env.NEXTAUTH_URL,
});

export const { 
  signIn, 
  signUp, 
  signOut, 
  getSession,
  updateUser 
} = auth;

export const authClient = auth.$client;
