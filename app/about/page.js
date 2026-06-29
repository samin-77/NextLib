import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-base-200/30">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">About nextlib</h1>
        <p className="text-lg text-base-content/80 mb-4">
          nextlib is a modern online book borrowing platform designed to digitize the traditional library experience.
        </p>
        <p className="text-base-content/70 mb-8">
          We empower readers worldwide by providing a seamless digital library experience.
          Browse our collection, borrow books digitally, and enjoy reading from anywhere, anytime.
        </p>
        <Link href="/all-books" className="btn btn-primary">Browse Books</Link>
      </div>
    </div>
  );
}
