import Link from 'next/link';

const Banner = () => {
  return (
    <div className="hero min-h-[80vh] bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-primary mb-4 animate__animated animate__fadeInDown">
            Find Your Next Read
          </h1>
          <p className="py-6 text-lg text-base-content/80 animate__animated animate__fadeInUp">
            Discover thousands of books across multiple categories. 
            Borrow digitally and enjoy reading from anywhere, anytime.
          </p>
          <Link href="/all-books">
            <button className="btn btn-primary btn-lg animate__animated animate__fadeInUp animate__delay-1s">
              Browse Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
