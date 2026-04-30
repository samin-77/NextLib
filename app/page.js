'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import Banner from '../components/home/Banner';
import Marquee from '../components/home/Marquee';
import FeaturedBooks from '../components/home/FeaturedBooks';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      // Don't redirect, show landing message
    }
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen hero bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Welcome to nextlib
            </h1>
            <p className="text-xl text-base-content/80 mb-8">
              Your Digital Library Experience
            </p>
            <p className="text-lg text-base-content/70 mb-8">
              Browse thousands of books, borrow digitally, and enjoy reading from anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/login">
                <button className="btn btn-primary btn-lg">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="btn btn-outline btn-primary btn-lg">
                  Register
                </button>
              </Link>
            </div>
            
            <div className="text-center">
              <p className="text-base-content/60">
                Please login or register to access the library
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Banner />
      <Marquee />
      <FeaturedBooks />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
