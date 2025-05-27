# KABEER-STORE-
Kabeer Store
A simple e-commerce website for Kabeer Store, offering groceries in Jeddah with bilingual support (Arabic/English), a shopping cart with Firebase persistence, a map of store locations, and contact options.
Live website: https://abdulmsoomro1.github.io/kabeer-store
Features

Bilingual Interface: Switch between Arabic and English with RTL/LTR support.
Shopping Cart: Add/remove items, with data saved to Firebase.
Store Locations: Interactive map centered at Jeddah (21.4966, 39.1831) using Leaflet.
Contact Options: WhatsApp (+966533717837) and Email (kabeerstore02@gmail.com) buttons.
Visual Feedback: Buttons change color on click, and a modal confirms "Add to Cart" actions.
Products: Five grocery items with prices in SAR.

Setup Instructions
Prerequisites

Node.js (LTS version recommended)
A Firebase account for cart persistence
A GitHub account for hosting

Steps

Clone or Download:

Clone the repository:git clone https://github.com/abdulmsoomro1/kabeer-store.git
cd kabeer-store


Or download the ZIP file from the repository and extract it.


Install Dependencies:

Run:npm install




Set Up Firebase:

Go to console.firebase.google.com and create a project named kabeer-store.
Enable Firestore.
Copy your Firebase config (apiKey, authDomain, etc.) into src/firebase.js, replacing the placeholder values.
Set Firestore security rules (for testing):rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /carts/{userId} {
      allow read, write: if true;
    }
  }
}




Add Store Icon:

Download a 32x32 PNG store icon from Flaticon and place it in public/images/ as store-icon.png.
If unavailable, modify Map.js to use the default marker (see code comment).


Test Locally:

Run:npm start


Open http://localhost:3000 to verify the app.


Deploy to GitHub Pages:

Build and deploy:npm run build
npm run deploy


Go to repository Settings > Pages, select the gh-pages branch, and save.
The site will be live at https://abdulmsoomro1.github.io/kabeer-store.



What I Learned

React and Component-Based Development: Building reusable components like ProductCard and ContactButtons taught me how to manage state and props effectively in React.
Internationalization (i18n): Using react-i18next to implement a bilingual interface (Arabic/English) with RTL/LTR support helped me understand localization challenges.
Firebase Integration: I learned how to use Firestore to persist cart data, including setting up security rules and handling async operations with setDoc and getDoc.
Leaflet for Maps: Integrating Leaflet to display an interactive map with custom markers enhanced my skills in working with third-party libraries.
GitHub Pages Deployment: Deploying a React app to GitHub Pages taught me about static site hosting, the importance of the homepage field in package.json, and using the gh-pages package.
CSS and UX: Styling buttons with visual feedback (color changes on click) and creating a modal for user confirmation improved my understanding of user experience design.
Troubleshooting: Handling issues like missing assets (store-icon.png) and Firebase errors taught me how to debug and ensure a smooth deployment.

Notes

The cart uses a static user123 ID for Firebase. For a production app, add Firebase Authentication.
Ensure store-icon.png is in public/images/ for the map to display correctly.
Contact buttons use WhatsApp (+966533717837) and Email (kabeerstore02@gmail.com).

