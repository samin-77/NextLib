'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';
import BookCard from '../../components/books/BookCard';
import SearchBar from '../../components/books/SearchBar';
import Sidebar from '../../components/books/Sidebar';

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books', { signal: controller.signal });
        const data = await response.json();
        if (Array.isArray(data)) {
          setBooks(data);
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

  const filteredBooks = useMemo(() => {
    let filtered = books;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [books, selectedCategory, searchTerm]);

  const handleCategoryFilter = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200/30">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          All Books
        </h1>
        
        <div className="flex justify-center mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:sticky lg:top-4 lg:h-fit">
            <Sidebar
              onCategoryFilter={handleCategoryFilter}
              selectedCategory={selectedCategory}
            />
          </div>
          
          <div className="flex-1">
            {filteredBooks.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-base-content/60">
                  No books found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
