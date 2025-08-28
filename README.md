# Full Stack ChatGPT Clone (MERN + Google Gemini + ImageKit)

This is a **full-stack AI-powered chatbot application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. The app allows users to **sign up, log in, and generate text content or images** using AI models. It also includes an **online payment system to purchase credits**, ensuring a smooth user experience. The application is designed to be deployed online for real-world use.

---

## ✨ Features

- 🔑 **User Authentication** (Sign up, Log in, JWT-based session handling)  
- 💬 **AI Text Generation** using **Google Gemini API** with the OpenAI React SDK  
- 🖼️ **AI Image Generation** powered by **ImageKit**  
- 💳 **Credit System with Payment Gateway** – Users can purchase credits online to access AI features  
- 📦 **MERN Stack** (MongoDB, Express.js, React.js, Node.js)  
- 🌐 **Fully Responsive UI** with a clean, modern design  
- 🚀 **Deployed App** for real-time access  

---

## 🛠️ Tech Stack

- **Frontend**: React.js, TailwindCSS, Context API  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose ORM)  
- **AI Models**: Google Gemini (via OpenAI React package)  
- **Image Generation**: ImageKit  
- **Payments**: Stripe / Razorpay (depending on region)  
- **Deployment**: Vercel (Frontend), Render / Railway / Heroku (Backend), MongoDB Atlas (Database)  

---

## 📂 Project Structure

```
root/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # App pages (Login, Dashboard, etc.)
│   │   ├── context/         # React context for state management
│   │   └── utils/           # Helper functions and utilities
│   └── package.json         # Frontend dependencies
│
├── server/                  # Express backend
│   ├── routes/              # API routes
│   ├── models/              # MongoDB models (User, Chat, etc.)
│   ├── controllers/         # Business logic for routes
│   ├── middleware/          # Authentication & error handling
│   └── server.js            # Express app entry point
│
├── .env                     # Environment variables
├── package.json             # Root config (scripts, dependencies)
└── README.md                # Project documentation
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/chatgpt-mern-clone.git
cd chatgpt-mern-clone
```

### 2. Install dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd ../client
npm install
```

### 3. Set up environment variables

Create a `.env` file in the **server/** directory and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url
STRIPE_SECRET_KEY=your_stripe_or_razorpay_key
PORT=5000
```

### 4. Run the development servers

**Backend:**
```bash
cd server
npm run dev
```

**Frontend:**
```bash
cd ../client
npm start
```

The application will be available at:
- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`

---

## 🚀 Deployment

- **Frontend (React)** → Deploy to **Vercel**
- **Backend (Express API)** → Deploy to **Render** / **Railway** / **Heroku**
- **Database** → **MongoDB Atlas**

---

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (Protected)

### AI Features
- `POST /api/ai/text` - Generate AI text using Gemini
- `POST /api/ai/image` - Generate AI images using ImageKit

### Payment
- `POST /api/payment/create` - Create payment session
- `GET /api/payment/verify` - Verify payment status

---

## 💡 Future Enhancements

- 🔍 Add chat history & saved prompts
- 👥 Add social login (Google/GitHub)
- 📱 Mobile-first PWA support
- ⚡ Real-time chat using WebSockets
- 🎨 Advanced image editing features
- 📊 Usage analytics dashboard

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add features, improve UI, or fix bugs:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is open-source under the **MIT License**.

---

## 👨‍💻 Author

**Developed by Rahil Chavda**  
📧 Contact: rahilchavda@icloud.com  
🔗 GitHub: [@RahilChavda](https://github.com/Rahil-Chavda)  

---

## 🙏 Acknowledgments

- [Google Gemini API](https://ai.google.dev/) for AI text generation
- [ImageKit](https://imagekit.io/) for image processing and storage
- [MongoDB Atlas](https://www.mongodb.com/atlas) for database hosting
- [Stripe](https://stripe.com/) for payment processing

---

⭐ **Don't forget to star this repository if you found it helpful!**
