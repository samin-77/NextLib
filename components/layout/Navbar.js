'use client';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { authClient } from '../../lib/auth';

const Navbar = () => {
  const { user, isLoading } = useAuth();

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
          📚 nextlib
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-books" className="hover:text-primary">
              All Books
            </Link>
          </li>
          {user && (
            <li>
              <Link href="/profile" className="hover:text-primary">
                My Profile
              </Link>
            </li>
          )}
        </ul>
      </div>
      
      <div className="navbar-end">
        {isLoading ? (
          <div className="loading loading-spinner loading-sm"></div>
        ) : user ? (
          <div className="flex items-center gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User avatar"
                    src={user.image || 'https://via.placeholder.com/40'}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="text-center font-semibold">{user.name}</li>
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <Link href="/profile/update">Update Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login" className="btn btn-outline btn-primary">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary">
              Register
            </Link>
          </div>
        )}
      </div>
      
      {/* Mobile menu */}
      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-books">All Books</Link>
          </li>
          {user && (
            <li>
              <Link href="/profile">My Profile</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
