import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";

console.log('=== COMPLETE ENV DEBUG ===');
console.log('TOTAL ENV KEYS COUNT:', Object.keys(process.env).length);
console.log('FIRST 10 KEYS:', Object.keys(process.env).slice(0, 10));
console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL);
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
console.log('BETTER_AUTH_SECRET:', process.env.BETTER_AUTH_SECRET);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('VERCEL ENV:', process.env.VERCEL);
console.log('==========================');

export const auth = betterAuth({
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

export const authClient = auth.$client;
