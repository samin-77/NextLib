import Link from 'next/link';
import Image from 'next/image';

const BookCard = ({ book, featured = false }) => {
  return (
    <div className={`card bg-base-100 shadow-xl book-card ${featured ? 'hover:scale-105' : ''}`}>
      <figure className="h-64 relative">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-primary">
          {book.title}
          <div className="badge badge-secondary">{book.category}</div>
        </h3>
        <p className="text-base-content/80 text-sm">by {book.author}</p>
        <div className="card-actions justify-between items-center">
          <div className="text-sm text-success font-semibold">
            {book.available_quantity} copies left
          </div>
          <Link href={`/book/${book.id}`}>
            <button className="btn btn-primary btn-sm">
              {featured ? 'View Details' : 'Details'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
