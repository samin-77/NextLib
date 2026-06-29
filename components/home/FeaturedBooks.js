'use client';
import { useState, useEffect } from 'react';
import BookCard from '../../components/books/BookCard';
import Link from 'next/link';

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books', { signal: controller.signal });
        const data = await response.json();
        if (Array.isArray(data)) {
          setBooks(data.slice(0, 4));
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching books:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="skeleton h-96"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-base-200/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} featured />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/all-books" className="btn btn-outline btn-primary">
            View All Books
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
