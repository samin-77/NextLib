# nextlib - Online Book Borrowing Platform

**Live URL:** [https://nextlib-iota.vercel.app](https://nextlib-iota.vercel.app)

A seamless and modern web application designed to digitize the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow titles digitally. The platform prioritizes security and performance using BetterAuth, Next.js, and DaisyUI.

## Key Features

- **Book Catalog**: Browse 12 books across Story, Tech, and Science categories
- **Search & Filter**: Real-time search by title and category sidebar filtering
- **Authentication**: Email/Password registration and login, plus Google Social OAuth
- **Protected Routes**: Book details and profile pages are private to logged-in users
- **Borrow System**: One-click borrow with availability tracking and toast confirmations
- **Profile Management**: View user info and update name/photo
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Smooth Animations**: Entrance animations powered by Animate.css
- **Toast Notifications**: Beautiful feedback with react-hot-toast

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + DaisyUI
- **Authentication**: BetterAuth (email/password + Google OAuth)
- **Data Storage**: JSON data file (no external database required)
- **Animations**: Animate.css
- **Notifications**: react-hot-toast
- **Deployment**: Vercel

## NPM Packages Used

| Package | Purpose |
|---------|---------|
| next | React framework with App Router |
| react / react-dom | UI library |
| better-auth | Authentication (email/password + Google OAuth) |
| react-hot-toast | Toast notifications |
| animate.css | CSS animations |
| tailwindcss | Utility-first CSS framework |
| daisyui | Tailwind CSS component library |
| autoprefixer | CSS vendor prefixes |
| eslint / eslint-config-next | Code linting |

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/samin-77/NextLib.git
   cd NextLib
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in your credentials (see `.env.local.example` for all required vars).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**  
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── (auth)/
│   ├── login/page.js
│   └── register/page.js
├── (private)/
│   ├── book/[id]/page.js
│   ├── profile/page.js
│   └── profile/update/page.js
├── all-books/page.js
├── api/
│   ├── auth/
│   │   ├── [...allbolt]/route.js
│   │   └── google/route.js
│   └── books/
│       ├── route.js
│       └── [id]/route.js
├── about/page.js
├── contact/page.js
├── privacy/page.js
├── terms/page.js
├── error.js
├── loading.js
├── not-found.js
├── layout.js
├── page.js
└── globals.css
components/
├── layout/
│   ├── Navbar.js
│   └── Footer.js
├── home/
│   ├── Banner.js
│   ├── Marquee.js
│   ├── FeaturedBooks.js
│   ├── WhyChooseUs.js
│   └── Testimonials.js
└── books/
    ├── BookCard.js
    ├── Sidebar.js
    └── SearchBar.js
lib/
├── auth-server.js
├── auth.js
└── data.json
hooks/
└── useAuth.js
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `BETTER_AUTH_URL` | Server-side base URL (e.g. http://localhost:3000) |
| `NEXTAUTH_URL` | Alias for BetterAuth URL |
| `NEXT_PUBLIC_NEXTAUTH_URL` | Client-side base URL (must start with NEXT_PUBLIC_) |
| `BETTER_AUTH_SECRET` | Secret key for session encryption |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

## Pages Overview

- **Home**: Banner with CTA, marquee announcements, featured books, why-choose-us section, testimonials
- **All Books**: Full catalog with search bar and category sidebar
- **Book Details** (private): Book cover, description, availability, borrow button
- **Profile** (private): User info display and update form
- **Login / Register**: Email/password forms with Google OAuth option

## Deployment

The app is deployed on Vercel. To deploy your own fork:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add all environment variables in Vercel dashboard
4. Deploy
