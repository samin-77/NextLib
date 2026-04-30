# NextLib - Online Book Borrowing Platform

A modern, responsive web application designed to digitize the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow titles digitally.

## 🚀 Live URL
[Your Live URL Here] (Deploy on Vercel/Render)

## ✨ Key Features

- **📚 Vast Book Collection**: Browse through 12+ books across Story, Tech, and Science categories
- **🔐 Secure Authentication**: BetterAuth with Google Social Login and Email/Password authentication
- **🔍 Advanced Search**: Search books by title with real-time filtering
- **📂 Category Filtering**: Functional sidebar to filter books by Story, Tech, or Science
- **📖 Book Details**: Detailed book information with borrowing functionality
- **👤 User Profiles**: Private routes for user profile management and updates
- **📱 Fully Responsive**: Mobile, tablet, and desktop optimized design
- **🎨 Modern UI**: Beautiful design using Tailwind CSS and DaisyUI
- **⚡ Smooth Animations**: Swiper.js for testimonials and Animate.css for smooth transitions

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + DaisyUI
- **Authentication**: BetterAuth
- **Database**: MongoDB (via Mongoose)
- **Animations**: Swiper.js + Animate.css
- **Notifications**: React Hot Toast
- **Deployment**: Vercel/Render ready

## 📦 NPM Packages Used

```json
{
  "dependencies": {
    "next": "14.2.5",
    "react": "^18",
    "react-dom": "^18",
    "better-auth": "^1.0.1",
    "mongoose": "^8.4.1",
    "react-hot-toast": "^2.4.1",
    "swiper": "^11.1.4",
    "animate.css": "^4.1.1"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1",
    "daisyui": "^4.12.10",
    "eslint": "^8",
    "eslint-config-next": "14.2.5"
  }
}
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/NextLib.git
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
   Fill in your environment variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/nextlib
   BETTER_AUTH_SECRET=your-secret-key-here
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
online-book-platform/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (private)/
│   │   ├── book/[id]/page.tsx
│   │   ├── profile/page.tsx
│   │   └── profile/update/page.tsx
│   ├── all-books/page.tsx
│   ├── api/auth/[...allbolt]/route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Banner.tsx
│   │   ├── Marquee.tsx
│   │   ├── FeaturedBooks.tsx
│   │   ├── WhyChooseUs.tsx
│   │   └── Testimonials.tsx
│   ├── books/
│   │   ├── BookCard.tsx
│   │   ├── Sidebar.tsx
│   │   └── SearchBar.tsx
│   └── ui/
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   └── data.json
├── models/
│   └── Book.ts
├── public/
└── tailwind.config.ts
```

## 🔐 Authentication Features

- **Email/Password Login**: Traditional authentication method
- **Google Social Login**: Quick and easy sign-in with Google
- **Protected Routes**: Private routes for book details and user profiles
- **Session Management**: Secure session handling with BetterAuth
- **Profile Updates**: Users can update their name and profile image

## 📚 Book Management

- **12 Sample Books**: Pre-populated with diverse content
- **Category System**: Story, Tech, and Science categories
- **Search Functionality**: Real-time search by book title
- **Availability Tracking**: Shows available copies for each book
- **Borrowing System**: Simulated book borrowing with confirmation

## 🎨 Design Features

- **Responsive Layout**: Mobile-first design approach
- **Modern UI**: Clean and intuitive interface
- **Smooth Animations**: Engaging user experience
- **Accessibility**: Semantic HTML and ARIA labels
- **Dark Mode Support**: DaisyUI theme system

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Render Deployment
1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your repository
4. Add environment variables
5. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For any inquiries or support, please contact:
- Email: your-email@example.com
- GitHub: your-username

---

**Empowering readers worldwide with digital library experience** 📚✨
