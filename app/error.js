'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-base-200/30">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-error mb-4">Something went wrong</h1>
        <p className="text-base-content/70 mb-8">
          {error?.message || 'An unexpected error occurred'}
        </p>
        <button onClick={reset} className="btn btn-primary">
          Try Again
        </button>
      </div>
    </div>
  );
}
