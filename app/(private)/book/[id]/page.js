'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const BookDetailsPage = ({ params }) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borrowing, setBorrowing] = useState(false);
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`/api/books/${params.id}`);
        const data = await response.json();
        
        if (response.ok) {
          setBook(data);
        } else {
          toast.error('Book not found');
          router.push('/all-books');
        }
      } catch (error) {
        toast.error('Error fetching book details');
        router.push('/all-books');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [params.id, router]);

  useEffect(() => {
    if (!authLoading && !user) {
      toast.error('Please login to view book details');
      router.push('/login');
    }
  }, [user, authLoading, router]);

  const handleBorrowBook = async () => {
    if (!user) {
      toast.error('Please login to borrow books');
      router.push('/login');
      return;
    }

    if (book.available_quantity <= 0) {
      toast.error('No copies available');
      return;
    }

    setBorrowing(true);
    try {
      // Simulate borrowing process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setBook(prev => ({
        ...prev,
        available_quantity: prev.available_quantity - 1
      }));
      
      toast.success('Book borrowed successfully!');
    } catch (error) {
      toast.error('Error borrowing book');
    } finally {
      setBorrowing(false);
    }
  };

  if (loading || authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (!book || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-base-200/30">
      <div className="container mx-auto px-4 py-8">
        <div className="card lg:card-side bg-base-100 shadow-2xl">
          <figure className="lg:w-1/2">
            <div className="relative h-96 lg:h-full w-full">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover rounded-l-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </figure>
          
          <div className="card-body lg:w-1/2">
            <h1 className="text-3xl font-bold text-primary mb-2">
              {book.title}
            </h1>
            
            <div className="badge badge-secondary badge-lg mb-4">
              {book.category}
            </div>
            
            <p className="text-lg text-base-content/80 mb-4">
              by <span className="font-semibold">{book.author}</span>
            </p>
            
            <div className="divider"></div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Description</h3>
              <p className="text-base-content/70 leading-relaxed">
                {book.description}
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <div className="stat">
                  <div className="stat-title">Available Copies</div>
                  <div className={`stat-value text-2xl ${
                    book.available_quantity > 0 ? 'text-success' : 'text-error'
                  }`}>
                    {book.available_quantity}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-actions justify-end">
              <button
                onClick={handleBorrowBook}
                className={`btn btn-primary btn-lg ${
                  borrowing ? 'loading' : ''
                } ${
                  book.available_quantity <= 0 ? 'btn-disabled' : ''
                }`}
                disabled={borrowing || book.available_quantity <= 0}
              >
                {borrowing ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Processing...
                  </>
                ) : book.available_quantity <= 0 ? (
                  'Not Available'
                ) : (
                  'Borrow This Book'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
