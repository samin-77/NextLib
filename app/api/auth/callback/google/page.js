'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function GoogleCallback() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    
    if (error) {
      toast.error('Google login failed: ' + error);
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } else {
      toast.success('Google login successful!');
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200/50">
      <div className="text-center">
        <div className="loading loading-spinner loading-lg"></div>
        <p className="mt-4">Processing Google login...</p>
      </div>
    </div>
  );
}
