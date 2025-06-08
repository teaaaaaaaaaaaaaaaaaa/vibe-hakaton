You are an expert in React 19, Vite, Tailwind CSS 4, Firebase, and accessible, mobile-first web development.

Project Overview

- This project is a progressive web app called "Tradey", a second-hand clothing trading platform.
- Users can post items (with pictures and descriptions), chat to arrange trades, and follow each other.
- The app does not support money — users trade items directly.
- The app includes a landing page, profile/dashboard, featured items, item viewer, chat, and following page.
- The stack includes React 19, Vite, Tailwind CSS 4, Firebase, and React Router.

Tailwind CSS 4 Integration (with Vite)

- Use the first-party Vite plugin for Tailwind:
  ```ts
  // vite.config.ts
  import { defineConfig } from "vite";
  import tailwindcss from "@tailwindcss/vite";
  export default defineConfig({
    plugins: [tailwindcss()],
  });
  ```
- Use utility-first classes for all styling.
- Avoid writing custom CSS files or PostCSS configuration.
- Follow mobile-first responsive patterns using Tailwind breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`).
- Use Tailwind transitions and animations for interactivity.

Routing and Access Logic

- Use React Router.
- Public routes:
  - `/` → Landing page (animations, overview, CTA buttons, featured products)
  - `/login` and `/signup`
  - `/item/:id` → View product in full screen, with contact button
- Protected routes (require authentication):
  - `/profile` → Shows user items, link to post new items, and link to chat
  - `/chat` → One-on-one chat interface (per product or user)
  - `/liked` → Saved/liked products
  - `/following` → Feed of followed users’ posts
  - `/user/:id` → Public profile of another user

Authentication

- Use Firebase Authentication (email/password, Google OAuth optional).
- Protect authenticated routes using a wrapper (`<PrivateRoute>`) and Firebase `onAuthStateChanged`.
- Store user profile metadata (e.g., username, profile picture) in Firestore under `/users`.

Posting Items

- Allow authenticated users to:
  - Upload up to 5 images via Firebase Storage
  - Add title, description, clothing type, and optional tags
- Items stored in Firestore under `/posts`
- Include createdBy (user id), createdAt (timestamp), and availability status

Featured Products & Search

- Load featured items on the landing page (`/`)
- Use a search bar to filter by tags, item name, or type (planned feature)
- Implement infinite scroll or pagination

Chat

- Use Firestore for real-time messaging.
- Chats stored under `/chats/{chatId}/messages`, with metadata at `/chats/{chatId}`
- Users can initiate chat from an item page or from profile page
- Real-time updates with `onSnapshot`

Liking Items

- Allow users to "like" items (save them).
- Liked items listed in `/liked`
- Store under `/users/{userId}/likes`

Following

- Each user has a list of followed user IDs stored in `/users/{userId}/following`
- Users can follow/unfollow others from profile pages
- `/following` page displays posts from followed users only

Profile Page

- Show user’s posts, edit/delete options
- Links to post new item, liked items, and messages
- Responsive card layout for posts

Mobile Responsiveness

- Use Tailwind's responsive utilities (`sm:`, `md:`, `lg:` etc.)
- Test thumb-access zones for key actions (like, message, chat buttons)
- Use `min-w-0` and `overflow-auto` carefully to prevent layout shifts on mobile
- Ensure interactive elements are minimum 44x44 pixels
- Use lazy loading for images and defer animations for low-power devices

UX and Interactions

- Landing page should be visually rich with animation (use Framer Motion or CSS)
- When user logs in, landing page stays but new navigation options appear (e.g., profile)
- All transitions should be smooth and accessible (respect prefers-reduced-motion)
- Use Tailwind `focus:` and `aria-*` attributes to make all controls accessible
- Always show a global toast or snackbar for async feedback (e.g., upload success)

Folder Structure

- `src/components/` → Shared UI components (e.g., `ProductCard`, `ChatBox`, `Navbar`)
- `src/pages/` → Route-level components (e.g., `ProfilePage.tsx`, `Landing.tsx`)
- `src/hooks/` → Custom hooks (`useAuth`, `useChats`)
- `src/firebase/` → Firebase client, auth, storage setup
- `src/utils/` → Helpers, types, constants

this is how it should look - but with some minor changes maybe:
tradey/
├── public/
│ └── index.html # Entry point HTML file
├── src/
│ ├── assets/ # Static images, icons, etc.
│ ├── components/ # Shared, reusable components
│ │ ├── auth/
│ │ │ └── LoginForm.tsx
│ │ ├── chat/
│ │ │ └── ChatBox.tsx
│ │ ├── layout/
│ │ │ ├── Header.tsx
│ │ │ ├── Footer.tsx
│ │ │ └── AuthWrapper.tsx
│ │ ├── post/
│ │ │ ├── PostCard.tsx
│ │ │ ├── PostEditor.tsx
│ │ │ └── ImageUploader.tsx
│ │ └── ui/
│ │ ├── Button.tsx
│ │ ├── Modal.tsx
│ │ ├── Spinner.tsx
│ │ └── Toast.tsx
│ ├── constants/
│ │ └── firebasePaths.ts
│ ├── firebase/ # Firebase SDK wrappers
│ │ ├── config.ts
│ │ ├── auth.ts
│ │ ├── firestore.ts
│ │ └── storage.ts
│ ├── hooks/
│ │ ├── useAuth.ts
│ │ ├── usePosts.ts
│ │ ├── useChat.ts
│ │ └── useFollow.ts
│ ├── pages/ # Page components (mapped to routes)
│ │ ├── Landing.tsx
│ │ ├── Login.tsx
│ │ ├── Signup.tsx
│ │ ├── Profile.tsx
│ │ ├── ItemView.tsx
│ │ ├── Chat.tsx
│ │ ├── Liked.tsx
│ │ ├── Following.tsx
│ │ └── UserProfile.tsx
│ ├── routes/
│ │ └── AppRoutes.tsx # React Router config
│ ├── store/ # Zustand (or other) global state
│ │ ├── authStore.ts
│ │ └── chatStore.ts
│ ├── types/
│ │ ├── User.ts
│ │ ├── Post.ts
│ │ └── Chat.ts
│ ├── utils/
│ │ ├── formatDate.ts
│ │ └── uploadFile.ts
│ ├── App.tsx
│ └── main.tsx
├── .env
├── tsconfig.json
├── vite.config.ts # Includes @tailwindcss/vite plugin
├── package.json
└── README.md

Firebase Usage

- Use modular SDK import style (tree-shakable)
- Use Firebase Auth, Firestore, Storage
- Enforce Firebase Security Rules for reads/writes
- Compress and optimize images before upload

General Conventions

- Use named exports for components
- Use `function` for components, not `const`
- Use Zod or Yup for form validation
- Use early returns for readability
- Write accessible JSX with semantic HTML
- Use descriptive variables: `hasLiked`, `isLoading`, `handleUpload`

Development Expectations

- Code must be DRY, readable, and fully complete — no placeholders.
- All components should be accessible and mobile-friendly.
- Write only finished components — no `// todo` or scaffolding.
- Always include proper imports and follow directory conventions.
- Ensure all flows work from unauthenticated to authenticated state seamlessly.

Use this setup to build a clean, performant, and user-centered web app for the clothing trade platform Tradey, with Firebase as the backend and a strong focus on interactivity, responsiveness, and social engagement features.
