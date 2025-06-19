# ♻️ Skip Booking Page — Redesign Project

A complete redesign of a **skip booking page** built with **React** and **Vite**. This project modernizes the user interface while maintaining all core functionality and delivering a smooth, responsive user experience on both mobile and desktop devices.

---

## ✅ Objectives

- 🔁 Redesign the UI with a fresh, modern look completely different from the original.
- 💡 Preserve all existing functionality and user flow.
- 💻 Implement a fully responsive layout for mobile, tablet, and desktop.
- 🧼 Write clean, modular, and reusable React components.
- 📦 Fetch skip data dynamically from an external API.

---

## 🧰 Tech Stack

- React (with Vite)
- JavaScript ES6+
- CSS (custom styling, mobile-first responsive layout)
- Lucide Icons for UI icons
- API integration using `fetch`


---

## 🔗 API Integration

Skip data is dynamically fetched from the live API endpoint:

https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft


The API used in this project doesn’t include image URLs for skip types. To handle this, I manually collected image links from the original website and stored them in a local localImages.json file.


#### 🔄 Note: The website updated image paths after the assignment was submitted. The current version reflects the latest image URLs.

---

## 🧩 Component Breakdown

- **Header** — Displays a multi-step progress bar with icons and highlights the current step.
- **SkipHolder** — Container component that fetches skip data, manages application state, and handles layout and modal logic.
- **Skip** — Individual skip card component showing key details and selection handling.
- **Modal** — Detailed popup shown when a skip is selected, with options to continue or go back.

---

## 🖼️ Features

- Responsive multi-column layout adapting to screen size (4, 3, or 2 skips per row).
- Modern **glassmorphism** style skip cards.
- Real-time data rendering using API.
- Clear and intuitive UI for selecting skips.
- Fully modular and reusable React components.

---

## 📱 Responsiveness

Designed mobile-first and tested on:

- ✅ Mobile phones
- ✅ Tablets
- ✅ Desktop browsers

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/AseelHamamreh/waste-skip-redesign.git
cd waste-skip-redesign
npm install
npm run dev

```

Then open your browser at:

http://localhost:5173/waste-skip-redesign/


## 🔗 Demo & Code

- **Live Demo:** [https://aseelhamamreh.github.io/waste-skip-redesign/](https://aseelhamamreh.github.io/waste-skip-redesign/)
- **GitHub Repository:** [https://github.com/AseelHamamreh/waste-skip-redesign](https://github.com/AseelHamamreh/waste-skip-redesign)


