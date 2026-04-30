'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

const ProfilePage = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-base-200/30">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            My Profile
          </h1>
          
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="flex flex-col items-center">
                <div className="avatar mb-6">
                  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                    <Image
                      src={user.image || 'https://via.placeholder.com/128'}
                      alt={user.name}
                      width={128}
                      height={128}
                      className="rounded-full"
                    />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {user.name}
                </h2>
                
                <div className="w-full space-y-4">
                  <div className="divider"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="stat">
                      <div className="stat-title">Email</div>
                      <div className="stat-value text-lg">{user.email}</div>
                    </div>
                    
                    <div className="stat">
                      <div className="stat-title">User ID</div>
                      <div className="stat-value text-lg">{user.id?.slice(0, 8)}...</div>
                    </div>
                  </div>
                  
                  <div className="divider"></div>
                  
                  <div className="stat">
                    <div className="stat-title">Account Status</div>
                    <div className="stat-value text-success">Active</div>
                  </div>
                  
                  <div className="stat">
                    <div className="stat-title">Member Since</div>
                    <div className="stat-value text-lg">
                      {new Date().toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="card-actions justify-center w-full mt-6">
                  <Link href="/profile/update">
                    <button className="btn btn-primary btn-lg">
                      Update Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
