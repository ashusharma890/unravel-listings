# Unravel Room Listing App

Responsive and optimized room listing built for the Unravel Frontend Challenge.

## 🚀 Live Demo

[**Click here**](https://your-live-deployment-link.com) to view the deployed app.

---

## 🔧 Tech Stack

* **React.js**
* **Tailwind CSS**
* **Custom Hooks** (`useInfiniteScroll`, `useInViewMedia`)
* **IntersectionObserver** for media visibility
* **Vite / CRA** (choose based on your setup)

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── RoomCard.jsx
│   ├── RoomList.jsx
│   ├── VideoPlayer.jsx
│   ├── ImageLoader.jsx
│   └── SkeletonCard.jsx
├── hooks/
│   ├── useInfiniteScroll.js
│   └── useInViewMedia.js
├── utils/
│   └── fetchRooms.js
├── data/
│   └── rooms.json
├── App.jsx
├── index.css
└── index.js
```

---

## ✅ Features

* 🔄 **Infinite Scroll** with lazy-loaded room data
* 🎥 **Video-first media rendering** (fallback to images if no video)
* 💤 **Lazy loading** of media with `IntersectionObserver`
* 📱 **Fully responsive** for desktop and mobile
* ⏳ **Skeleton loading** for smooth UX
* ⚠️ **Error handling** for failed fetches (to be enhanced as needed)
* ♻️ **Optimized renders** with memoized components and hooks

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/your-username/unravel-listings.git
cd unravel-listings
npm install
npm run dev # or npm start if using Create React App
```

---

## 📦 Deployment (Vercel Recommended)

1. Push to GitHub
2. Connect your repo to [Vercel](https://vercel.com/)
3. Select root directory and deploy 🎉

---

## 🧠 Optimization Strategies

* **Intersection Observer** prevents preloading off-screen media
* **Custom Hooks** separate scroll/media logic
* **Video paused off-screen** to reduce CPU/memory
* **Code-splitting ready** with modular structure

---

## 🛠️ To Improve

* Error fallback UI
* Pagination from real API
* Modal/media viewer enhancement

---

## 📬 Contact

Built by [Ashu Sharma](https://github.com/ashusharma890) for Unravel.

---

**Note**: This solution prioritizes functionality and performance, per challenge guidelines (UI polishing kept minimal).
