# 🎓 Udemy Clone – Full-Stack E-Learning Platform

A full-featured Udemy-like e-learning platform built with **React, TypeScript, Node.js, Express, MongoDB, and SCSS**.  
This project replicates core functionalities of Udemy, including **role-based features, course management, secure payments, and automated notifications**.  

---

## 🚀 Features

- 👩‍🏫 **Role-Based Access**
  - Instructors: Create, manage, and upload video courses.
  - Students: Browse, purchase, and enroll in courses.

- 📚 **Course Management**
  - Add, edit, and delete courses.
  - Upload video content for lessons.

- 🛒 **Add to Cart & Enrollment**
  - Smooth add-to-cart flow before checkout.
  - Enroll instantly after payment.

- 💳 **Payment Integration**
  - Secure transactions using **Stripe**.

- 📧 **Email Notifications**
  - Automatic confirmation emails with **SendGrid** after enrollment.

- ⭐ **Ratings & Reviews**
  - Students can rate and review courses.

- 📱 **Responsive UI**
  - Fully optimized for mobile, tablet, and desktop.

- 🔐 **Authentication & Security**
  - JWT-based authentication.
  - Protected routes for instructors and students.

---

## 🛠️ Tech Stack

### Frontend
- **React** + **TypeScript**
- **SCSS** for styling (responsive design)

### Backend
- **Node.js** + **Express**
- **MongoDB** (NoSQL database)
- **JWT** for authentication
- **Stripe** for payment integration
- **SendGrid** for email notifications

---

## 📸 Screenshots (Optional)

 ScreenShot of my Udemy Clone plese visit it :  https://github.com/Madesh-cse/Udemy-Clone/issues/1

---


## 🎮 Usage
1. Register as a student or instructor.
2. If instructor → create a new course and upload videos.
3. If student → browse courses, add to cart, purchase using Stripe.
4. Receive an email confirmation via SendGrid.
5. Start learning! 🎓


## 📊 Future Improvements
- Instructor analytics dashboard
- Live streaming classes
- Recommendation system for students
- Wishlist & favorites feature

## 🙋 FAQ

**Q: Can I use this project for production?**  
A: This is a learning project, not intended for production use.

**Q: Can I contribute new features?**  
A: Yes! Contributions are welcome — please check the [Contributing](#-contributing) section.



## ⚙️ Installation & Setup

Clone the repository:

```bash

Backend Setup

cd server
npm install
npm start

Frontend Setup

cd client
npm install
npm run dev

🔑 Environment Variables

# Server
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET=your_stripe_key
SENDGRID_API_KEY=your_sendgrid_key

# Client
REACT_APP_API_URL=http://localhost:5000


git clone https://github.com/yourusername/udemy-clone.git
cd udemy-clone
