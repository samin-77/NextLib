'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { authClient } from '@/lib/auth';
import toast from 'react-hot-toast';

const UpdateProfilePage = () => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    } else if (user) {
      setName(user.name || '');
      setImageUrl(user.image || '');
    }
  }, [user, authLoading, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await authClient.updateUser({
        name,
        image: imageUrl,
      });

      if (result.data) {
        toast.success('Profile updated successfully!');
        router.push('/profile');
      } else {
        toast.error(result.error?.message || 'Profile update failed');
      }
    } catch (error) {
      toast.error('An error occurred during profile update');
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading) {
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
    <div className="min-h-screen flex items-center justify-center bg-base-200/50">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">
            Update Profile
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Image URL</span>
              </label>
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <label className="label">
                <span className="label-text-alt">
                  Leave empty to keep current image
                </span>
              </label>
            </div>
            
            {imageUrl && (
              <div className="form-control">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img
                      src={imageUrl}
                      alt="Profile preview"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
            
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  'Update Information'
                )}
              </button>
            </div>
          </form>
          
          <div className="card-actions justify-center mt-4">
            <button
              onClick={() => router.push('/profile')}
              className="btn btn-outline btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
