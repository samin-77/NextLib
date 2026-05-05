import { auth } from '@/lib/auth';

console.log('=== SERVER-SIDE ENV DEBUG ===');
console.log('TOTAL ENV KEYS COUNT:', Object.keys(process.env).length);
console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL);
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
console.log('BETTER_AUTH_SECRET:', process.env.BETTER_AUTH_SECRET);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('VERCEL ENV:', process.env.VERCEL);
console.log('==============================');

export const GET = auth.handler;
export const POST = auth.handler;
