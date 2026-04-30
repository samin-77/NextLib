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
      enabled: true,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  database: memoryAdapter(),
  baseURL: process.env.NEXTAUTH_URL,
  trustedOrigins: process.env.NODE_ENV === 'production' 
    ? ['https://nextlib-iota.vercel.app'] 
    : ['http://localhost:3000'],
});

export const authClient = auth;
