'use client';
import { useState, useEffect } from 'react';
import { authClient } from '../lib/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const checkAuth = async () => {
      try {
        const session = await authClient.getSession();
        if (!controller.signal.aborted) {
          setUser(session?.data?.user || null);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Auth check error:', error);
          setUser(null);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    checkAuth();
    return () => controller.abort();
  }, []);

  return { user, isLoading };
};
