'use client';
import { useState, useEffect } from 'react';
import { createAuthClient } from '../lib/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authClient = createAuthClient();
        const session = await authClient.getSession();
        setUser(session?.data?.user || null);
      } catch (error) {
        console.error('Auth check error:', error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { user, isLoading };
};
