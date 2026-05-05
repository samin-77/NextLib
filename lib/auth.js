import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";

console.log('=== VERCEL DEBUG ===');
console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL);
console.log('GOOGLE_CLIENT_ID exists:', !!process.env.GOOGLE_CLIENT_ID);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('==================');

export const auth = betterAuth({
  database: {
    provider: "sqlite",
    url: "./auth.db",
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      enabled: true,
    },
  },
  baseURL: process.env.NEXTAUTH_URL,
});

export const authClient = auth;
