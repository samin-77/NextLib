import { auth } from '@/lib/auth';

export const GET = async (request) => {
  return auth.handler.google(request);
};
