# Food E-commerce App

A modern and responsive food ordering platform designed to connect hungry users with their favorite meals from local restaurants and vendors. Our app provides a seamless, user-friendly experience for browsing, ordering, and tracking food deliveries in real-time.

---
## 🧾 Project Overview

This e-commerce platform connects artisans and craft enthusiasts with quality supplies. Developed as part of coursework at **Chitkara University, Department of Computer Science and Engineering**.

---

## 🚀 Features

- 🔍 **Browse Menu** – Explore a wide variety of food items from different categories.
- 🛒 **Add to Cart** – Add multiple dishes with quantity customization.
- 👤 **User Profiles** – Save favorite orders, manage addresses, and view order history.
- 🌐 **Admin & Vendor Dashboards** – Manage orders, inventory, and customers efficiently.

---

## 📱 Tech Stack

**Frontend:**
- React.js / HTML-CSS-JS (based on your stack)
- Tailwind CSS / Bootstrap
- Axios or Fetch API for HTTP requests

**Backend:**
- Node.js + Express.js
- RESTful APIs
- JSON Web Token (JWT) for authentication

**Database:**
- MySQL
- Sequelize ORM

**Other Tools:**
- Postman (API testing)
- Git & GitHub (version control)

---

## 🛠️ Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/your-username/food-ecommerce-app.git
cd food-ecommerce-app
```
### 📦 Install Backend Dependencies
```bash
npm install
```
### 🎨 Install Frontend Dependencies
```bash
cd views
npm install
```
### 🔐 Environment Variables
Create a `.env` file inside `backend/` directory:
```env
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=yourdbname
JWT_SECRET=your_jwt_secret
```
## 🚀 Running the Application

| Task             | Command                              |
|------------------|--------------------------------------|
| Start Backend    | `node server.js`          	          |
| Start Frontend   | `cd views && npm run dev`            |
| Open App         | Visit 👉 [http://localhost:5173](http://localhost:5173) |


## 🛣️ Future Roadmap

- 💳 Payment Gateway Integration (e.g. Razorpay, Stripe)
- 🌟 User Reviews & Ratings
- ❤️ Wishlist Functionality
