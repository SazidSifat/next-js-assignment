# Smart Tech E-Commerce Product App

A simple e-commerce product management application built with **Next.js 15 (App Router)**, **NextAuth.js** for authentication, and **MongoDB** as the database. Users can view products publicly and add new products after signing in.

---

## Features

### Public Features

- Landing page with Navbar, Hero section, Product Highlights, and Footer
- Publicly accessible product list page
- Product details page for individual products

### Authentication

- Login using **Google OAuth** or **Email & Password (Credentials)**
- Logout with proper redirect
- Protected routes for authenticated users only

### Protected Features

- Add new products (accessible only when logged in)
- Form validation and proper feedback
- Session-based route protection

### Optional Enhancements

- Loading spinners when fetching or submitting data
- Toast notifications for successful operations
- Dark/Light theme toggle

---

## Tech Stack

- **Frontend & Backend**: Next.js 15 (App Router)
- **Authentication**: NextAuth.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Optional**: React Hooks for state management

---

## Folder Structure

````text
src/
├─ app/
│  ├─ api/
│  │  ├─ auth/[...nextauth]/route.js    # NextAuth routes
│  │  └─ products/
│  │     ├─ route.js                     # GET & POST products
│  │     └─ [id]/route.js                # GET single product
│  ├─ dashboard/
│  │  └─ add-product/page.jsx            # Protected Add Product Page
│  ├─ products/
│  │  ├─ [id]/page.jsx                   # Product Details Page
│  │  └─ page.jsx                         # Product List Page
│  ├─ login/page.jsx                      # Login Page
│  └─ page.jsx                            # Landing Page
├─ components/
│  ├─ Navbar.jsx
│  ├─ Footer.jsx
│  ├─ Hero.jsx
│  ├─ ProductCard.jsx
│  └─ ProductHighlight.jsx
├─ lib/
│  └─ mongodb.js                          # MongoDB client connection
├─ styles/
│  └─ globals.css
.env.local
next.config.js

## Environment Variables

```Create a .env.local file in the root:
MONGODB_URI=<Your MongoDB connection string>
GOOGLE_CLIENT_ID=<Your Google OAuth Client ID>
GOOGLE_CLIENT_SECRET=<Your Google OAuth Client Secret>
NEXTAUTH_SECRET=<A strong secret for NextAuth>

````

```npm install
npm run dev


```
