import { createAuthClient } from 'better-auth/client';

const baseURL = process.env.NEXT_PUBLIC_NEXTAUTH_URL || process.env.NEXTAUTH_URL || 'http://localhost:3000';

export const authClient = createAuthClient({ baseURL });

export const createAuthClientInstance = () => createAuthClient({ baseURL });
