# TRADEY – Detaljan Plan Implementacije

Ovaj dokument služi kao mapa puta za razvoj aplikacije. Zadaci su podeljeni u faze kako bi se osigurao postepen i organizovan razvoj.

## Faza 1: Temelji i Osnovna Funkcionalnost (MVP)

### A. Postavka Projekta (Završeno)

*   [x] Podešavanje projekta: Vite + React 19 + TypeScript
*   [x] Instalacija i konfiguracija: Tailwind CSS 4
*   [x] Instalacija i konfiguracija: Firebase SDK (`src/firebase/config.ts`)
*   [x] Instalacija i konfiguracija: React Router
*   [x] Kreiranje kompletne strukture direktorijuma (`pages`, `components`, `hooks`, itd.)
*   [x] Definisanje svih javnih i zaštićenih ruta sa placeholder stranicama
*   [x] Postavljanje `AuthWrapper`-a za zaštićene rute

### B. Autentifikacija Korisnika

*   [ ] Kreirati `useAuth` hook (`src/hooks/useAuth.ts`) koji koristi Firebase `onAuthStateChanged` za praćenje statusa ulogovanog korisnika.
*   [ ] Povezati `AuthWrapper` sa `useAuth` hook-om za stvarnu proveru autentifikacije.
*   [ ] Dizajnirati i implementirati `LoginForm.tsx` komponentu sa poljima za email/lozinku.
*   [ ] Implementirati funkciju za prijavu (`signInWithEmailAndPassword`) i upravljanje greškama.
*   [ ] Dizajnirati i implementirati `SignupForm.tsx` komponentu.
*   [ ] Implementirati funkciju za registraciju (`createUserWithEmailAndPassword`) i kreiranje korisničkog dokumenta u Firestore (`/users/{userId}`).
*   [ ] Integrisati forme u `LoginPage.tsx` i `SignupPage.tsx`.

### C. UI Kostur i Osnovne Komponente

*   [ ] Kreirati responsivnu `Header` komponentu (`src/components/layout/Header.tsx`).
    *   Prikazati "Login/Signup" linkove za goste.
    *   Prikazati "Profil", "Poruke", "Sačuvano" i "Logout" za ulogovane korisnike.
*   [ ] Kreirati `Footer` komponentu (`src/components/layout/Footer.tsx`).
*   [ ] Integrisati `Header` i `Footer` u `App.tsx` kako bi bili prisutni na svim stranicama.
*   [ ] Kreirati generičke, re-upotrebljive UI komponente (`src/components/ui`):
    *   `Button.tsx`
    *   `Input.tsx`
    *   `Spinner.tsx`

### D. Upravljanje Artiklima

*   [ ] Dizajnirati i implementirati formu `PostEditor.tsx` za dodavanje i izmenu artikala (naslov, opis, tagovi).
*   [ ] Implementirati `ImageUploader.tsx` komponentu (do 5 slika, preview, upload na Firebase Storage).
*   [ ] Implementirati funkciju za kreiranje/ažuriranje dokumenta u Firestore kolekciji `/posts`.
*   [ ] Dizajnirati i implementirati `ProductCard.tsx` komponentu za prikaz jednog artikla.
*   [ ] Prikazati listu korisnikovih artikala na `ProfilePage.tsx` koristeći `ProductCard`.
*   [ ] Implementirati funkciju za brisanje artikla (Firestore dokument + slike iz Storage-a).

## Faza 2: Društvene Funkcije i Interaktivnost

### A. Pregled Artikala i Korisnika

*   [ ] Kompletirati `ItemViewPage.tsx` (`/item/:id`) za prikaz svih detalja o jednom artiklu.
*   [ ] Kompletirati `UserProfilePage.tsx` (`/user/:id`) za prikaz javnog profila drugog korisnika i njegovih artikala.

### B. Lajkovanje i Praćenje

*   [ ] Dodati "Like" dugme na `ProductCard.tsx` i `ItemViewPage.tsx`.
*   [ ] Implementirati funkciju za dodavanje/uklanjanje ID-a artikla iz `likes` niza u korisničkom dokumentu.
*   [ ] Kreirati `LikedPage.tsx` (`/liked`) za prikaz liste lajkovanih artikala.
*   [ ] Dodati "Follow" dugme na `UserProfilePage.tsx`.
*   [ ] Implementirati funkciju za dodavanje/uklanjanje ID-a korisnika iz `following` niza.
*   [ ] Kreirati `FollowingPage.tsx` (`/following`) za prikaz feed-a artikala od praćenih korisnika.

### C. Chat u Realnom Vremenu

*   [ ] Dodati "Započni razmenu" dugme na `ItemViewPage.tsx`.
*   [ ] Implementirati logiku za kreiranje ili otvaranje postojećeg chata između dva korisnika (`/chats/{chatId}`).
*   [ ] Dizajnirati `ChatPage.tsx` (`/chat`) sa listom svih razgovora.
*   [ ] Implementirati `ChatBox.tsx` komponentu za prikaz poruka i polje za unos.
*   [ ] Koristiti Firestore `onSnapshot` za dobijanje poruka u realnom vremenu.

## Faza 3: Fino Podešavanje i V1

### A. Pretraga i Filtriranje

*   [ ] Implementirati `SearchBar` komponentu.
*   [ ] Omogućiti osnovnu pretragu po nazivu artikla.
*   [ ] (Opciono) Dodati filtriranje po tagovima.

### B. Poboljšanje UI/UX

*   [ ] Implementirati globalni sistem za notifikacije (`Toast` ili `Snackbar`) za povratne informacije.
*   [ ] Dodati indikatore učitavanja (`Spinner` ili `Skeleton`) na stranice i komponente.
*   [ ] Finalizirati validaciju formi sa jasnim porukama o greškama.
*   [ ] Dodati suptilne animacije i tranzicije za bolji korisnički doživljaj.

### C. Optimizacija i Deploy

*   [ ] Proveriti i unaprediti pristupačnost (keyboard navigation, screen readers).
*   [ ] Optimizovati učitavanje slika (kompresija, lazy loading).
*   [ ] Pripremiti i izvršiti deploy aplikacije (npr. Firebase Hosting, Vercel).
