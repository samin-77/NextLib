import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";

console.log('=== VERCEL DEBUG ===');
console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL);
console.log('GOOGLE_CLIENT_ID exists:', !!process.env.GOOGLE_CLIENT_ID);
console.log('GOOGLE_CLIENT_SECRET exists:', !!process.env.GOOGLE_CLIENT_SECRET);
console.log('BETTER_AUTH_SECRET exists:', !!process.env.BETTER_AUTH_SECRET);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('ALL ENV KEYS:', Object.keys(process.env).filter(k => k.includes('AUTH') || k.includes('GOOGLE')));
console.log('==================');

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      enabled: true,
    },
  },
  baseURL: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
});

export const authClient = auth;
