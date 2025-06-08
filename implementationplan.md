# TRADEY – Implementation Plan

## Step-by-Step Build Plan

### Phase 1 – MVP

* [ ] Set up Vite + React 19 + Tailwind CSS 4 + Firebase
* [ ] Configure routing with React Router
* [ ] Firebase auth (signup/login + Google OAuth optional)
* [ ] Create reusable UI components (`Navbar`, `ProductCard`, `ChatBox`)
* [ ] Build public routes: `/`, `/login`, `/signup`, `/item/:id`
* [ ] Build protected routes: `/profile`, `/chat`, `/liked`, `/following`, `/user/:id`
* [ ] Implement item posting with image upload (limit 5)
* [ ] Real-time chat system with Firestore
* [ ] Liking and saving items
* [ ] Follow/unfollow functionality

### Phase 2 – V1

* [ ] Add search and tag filtering
* [ ] Build following feed (posts from followed users)
* [ ] Infinite scroll or pagination on feeds
* [ ] Responsive polish and mobile UX improvements
* [ ] Toast/snackbar system for async feedback
* [ ] Form validation with Zod/Yup

### Phase 3 – V2 and Beyond

* [ ] Notification system (new chat, new like, new post by followed user)
* [ ] Enhance accessibility support (`aria-*`, focus management)
* [ ] Dynamic SEO and Open Graph metadata
* [ ] UI/UX microinteractions (hover, tap, loading states)
* [ ] Feature flags for experimental rollout

## Suggested Timeline

* Week 1–2: Setup, routing, auth, UI system
* Week 3–4: Posting flow, chat, profile pages
* Week 5: Likes, follow, item page, feed basics
* Week 6–7: Responsive fixes, polishing, deploy

## Team Setup Recommendations

* **Frontend Dev(s):** 1–2 React devs with Tailwind experience
* **Firebase Engineer:** 1 dev with experience in auth, Firestore rules, Storage
* **UX/UI Designer:** (optional) to align branding and mobile patterns
* **QA/Testing:** Manual testing + automated UI test later on

## Optional Tasks & Integrations

* Google Analytics or Plausible for user metrics
* Deployment via Firebase Hosting or Vercel
* Framer Motion for page transitions
* Responsive image support with `srcset` or Cloudinary proxy
* Admin dashboard (eventual)
