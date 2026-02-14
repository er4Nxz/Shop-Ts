🇬🇧 English
🎯 Overview

Shop Ts is a front-end e-commerce project developed by Erfan Ahmadi.
The project simulates a small online store interface with product listing, cart functionality, and a structured component-based architecture.

It focuses on practicing real-world UI patterns and state management in a modern React environment.

🧩 Features

Product listing page

Add to cart functionality

Dynamic cart state updates

Component-based structure

Responsive layout

Clean UI design

⚙️ Installation & Setup
# Clone the repository
git clone https://github.com/er4Nxz/Shop-Ts.git
cd Shop-Ts

# Install dependencies
npm install

# Run development server
npm run dev

🚀 Example Snippets
Cart State Management
const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart((prev) => [...prev, product]);
};

Removing Item From Cart
const removeFromCart = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id));
};

🛠️ Technologies Used

React (Components & Hooks)

JavaScript (ES6)

CSS

React Router DOM

Local state management

📁 Project Structure
Shop-Ts/
├── src/
│   ├── Components/
│   │   ├── Product/
│   │   ├── Cart/
│   │   └── Layout/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
└── package.json

💡 Lessons Learned

Managing cart state with React hooks

Structuring reusable UI components

Building simple e-commerce logic

Improving layout responsiveness

👤 Developer

Erfan Ahmadi

🇮🇷 فارسی
🎯 معرفی پروژه

Shop Ts یک پروژه فروشگاه آنلاین ساده است که توسط عرفان احمدی توسعه داده شده.
این پروژه برای تمرین ساختار کامپوننت‌محور، مدیریت state و پیاده‌سازی منطق سبد خرید در React طراحی شده است.

🧩 ویژگی‌ها

نمایش لیست محصولات

افزودن به سبد خرید

بروزرسانی داینامیک سبد خرید

ساختار کامپوننتی

طراحی ریسپانسیو

⚙️ نصب و اجرا
git clone https://github.com/er4Nxz/Shop-Ts.git
cd Shop-Ts

npm install
npm run dev

🛠️ تکنولوژی‌ها

React (کامپوننت‌ها و Hooks)

JavaScript ES6

CSS

React Router DOM

💡 تجربیات

مدیریت وضعیت سبد خرید

طراحی کامپوننت‌های قابل استفاده مجدد

پیاده‌سازی منطق ساده فروشگاهی
