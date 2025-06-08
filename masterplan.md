# TRADEY – Masterplan

## App Overview and Objectives

TRADEY je progresivna veb aplikacija za razmenu polovnih odevnih predmeta između korisnika. Cilj aplikacije je da podstakne održivu modu kroz direktnu razmenu odeće bez upotrebe novca. Korisnici mogu da objavljuju svoje komade, započinju razgovore, prate jedni druge i dogovaraju razmene.

TRADEY nije samo platforma, već digitalni pokret protiv hiperprodukcije i bacanja garderobe.

## Target Audience

* Mladi između 18–35 godina
* Urbani, modno osvešćeni, ekološki orijentisani
* Ljudi koji žele da izraze stil, a ne da slepo prate trendove
* Entuzijasti second-hand i thrifting kulture

## Core Features and Functionality

* Objavljivanje artikala (naslov, opis, do 5 slika, tagovi)
* Chat sistem za direktno komuniciranje radi razmene
* Praćenje i feed objava od praćenih korisnika
* Like/snimanje proizvoda
* Pretraga i tag-filterisanje
* Landing page sa animacijama i istaknutim proizvodima
* Responsive UI, mobile-first dizajn

## High-Level Technical Stack

* **Frontend:** React 19, Vite, Tailwind CSS 4, React Router
* **Backend:** Firebase (Authentication, Firestore, Storage)
* **Animations:** Framer Motion, Tailwind transitions
* **Validation:** Zod ili Yup

## Conceptual Data Model

* `/users/{userId}`

  * username, profilePicture, bio, createdAt, following\[], likes\[]
* `/posts/{postId}`

  * title, description, images\[], type, tags\[], createdBy, createdAt, available (bool)
* `/chats/{chatId}`

  * participants\[], lastMessage, updatedAt
  * `/messages/{messageId}`: senderId, text, createdAt

## User Interface Design Principles

* Utility-first pristup uz Tailwind CSS 4
* Mobile-first (prvo optimizacija za mobilne uređaje)
* Jak kontrast, pristupačnost (WCAG), i jasna vizuelna hijerarhija
* Interaktivnost kroz suptilne animacije i tranzicije
* Komponente dizajnirane za pristupačnost (`aria-*`, `focus-visible`, `min-w-0` itd.)

## Security Considerations

* Firebase rules za zaštitu čitanja/pisanja na kolekcije
* Autentikacija pre pristupa zaštićenim rutama
* Validacija formi pre Firestore zapisa
* Kompresija slika pre Firebase Storage upload-a

## Development Phases or Milestones

1. MVP: login/signup, postovanje artikala, chat, profil, landing
2. V1: like sistem, praćenje korisnika, feed, item page
3. V2: pretraga, filteri, poboljšanja UI/UX, obaveštenja
4. V3: dodatne animacije, kolekcije/tag grupe, uvođenje verifikacija

## Potential Challenges and Solutions

* **Image upload optimizacija:** koristiti kompresiju i lazy loading
* **Realtime chat skalabilnost:** pratiti broj aktivnih listenera i koristiti paginaciju
* **Firebase pravila:** pažljivo testirati pravila za čitanje/pisanje da bi se sprečio neautorizovan pristup
* **Navigacija kroz stanja:** koristiti `onAuthStateChanged` + wrapper rute

## Future Expansion Possibilities

* Notifikacije u realnom vremenu
* Web3 verifikacija posedovanja (NFT kao potvrda vlasništva?)
* Geo-lokacione funkcionalnosti (lokalna razmena)
* Grupe i tematske kolekcije
* Partnerstva sa lokalnim thrift/butik prodavnicama
