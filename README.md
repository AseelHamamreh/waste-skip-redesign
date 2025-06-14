♻️ Skip Booking Page — Redesign Project

This project is a complete redesign of a skip booking page, built with React and Vite. The goal was to modernize the user interface, maintain core functionality, and deliver a responsive, smooth user experience across both mobile and desktop devices.

✅ Objectives

    🔁 Redesign the UI to look completely different from the original.

    💡 Maintain all existing functionality and user flow.

    💻 Create a responsive layout for mobile and desktop.

    🧼 Use clean, modular, and reusable React code.

    📦 Fetch skip data dynamically from an external API.

🧰 Tech Stack

    React (with Vite)

    CSS (custom styling, mobile-first responsive layout)

    JavaScript ES6+

    Icons: Lucide Icons

    API Integration with fetch

📁 File Structure Overview

src/
├── App.jsx # Main entry with header + content
├── assets/
│ └── localImages.json # Local image mapping by skip ID
├── components/
│ ├── Header/ # Step progress navigation
│ ├── Modal/ # Reusable modal component
│ ├── Skip/ # Single skip item card
│ └── SkipHolder/ # Fetches skips, handles layout & modal
└── main.jsx # Vite main entry

🔗 API Integration

Skip data is fetched from this live API endpoint:

https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

For each skip, local image data is matched using localImages.json for better visuals.

🧩 Component Structure & Code Organization

        Header — Displays the multi-step progress bar with icons and highlights the current step.

        SkipHolder — Acts as the container for skip data fetching, state management, and layout.

        Skip — Represents individual skip cards, showing key details and handling selection.

        Modal — Provides a detailed popup when a skip is selected, allowing users to continue or go back.

🖼️ Features

    Responsive multi-column layout (4, 3, 2 skips per row)

    Modern glassmorphism-style skip cards

    Smooth modal transitions

    Dynamic rendering with real API data

    Clear, intuitive UI for skip selection

    Fully modular & reusable components

🧪 How to Run Locally

git clone https://github.com/AseelHamamreh/waste-skip-redesign.git
cd waste-skip-redesign
npm install
npm run dev

Open your browser at: http://localhost:5173/waste-skip-redesign/



📱 Responsiveness

Built with mobile-first design principles. Works across:

    ✅ Mobile phones

    ✅ Tablets

    ✅ Desktop browsers

    

Demo & Code

    Live Demo: https://aseelhamamreh.github.io/waste-skip-redesign/

    GitHub Repo: https://github.com/AseelHamamreh/waste-skip-redesign
