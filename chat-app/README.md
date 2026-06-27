
# talk-with-friend - Premium Dark Theme Chat App

talk-with-friend is a modern Full Stack Chatting Application with a sleek dark theme.
Uses Socket.io for real-time communication and stores user details in encrypted format in MongoDB.

## ✨ Features

- **Real-time Messaging** with Socket.io
- **User Authentication** with JWT tokens
- **One-to-One Chats** and **Group Chats**
- **Typing Indicators** and **User Notifications**
- **Search Users** functionality
- **Premium Dark Theme** UI with Chakra UI
- **Responsive Design** for all devices
- **User Profiles** and **Group Management**

## Tech Stack

**Frontend:** React JS, Chakra UI, Socket.io Client  
**Backend:** Node JS, Express JS, Socket.io  
**Database:** MongoDB Atlas  
**Authentication:** JWT (JSON Web Tokens)
  
## 🚀 Live Demo

[Deploy on Render](#deployment)

## 🏃 Run Locally

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account
- Cloudinary account (for image uploads)

### Clone & Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/talk-with-friend.git
cd talk-with-friend
```

### Backend Setup

```bash
# Install backend dependencies
npm install

# Create .env file in the project root
# Add these environment variables:
# PORT=5000
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# NODE_ENV=development

# Start backend server (with nodemon)
npm run server
```

### Frontend Setup

```bash
# Install frontend dependencies
cd frontend
npm install --legacy-peer-deps

# Start React development server
npm start
```

The app will open at **http://localhost:3000**  
Backend runs on **http://localhost:5000**

## 📦 Deployment on Render

### Step 1: Prepare Your Project

Push your code to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy Backend

1. Go to [render.com](https://render.com) and sign up
2. Create a **New Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Name:** `chat-app-backend`
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm run server`
5. Add Environment Variables:
   ```
   PORT=5000
   MONGO_URI=your_production_mongo_uri
   JWT_SECRET=your_production_jwt_secret
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-url.onrender.com
   ```
6. Deploy and copy the backend URL

### Step 3: Deploy Frontend

1. Update backend URL in [frontend/src/components/SingleChat.js](frontend/src/components/SingleChat.js):
   ```javascript
   const ENDPOINT = "https://your-backend-url.onrender.com";
   ```

2. Update proxy in [frontend/package.json](frontend/package.json):
   ```json
   "proxy": "https://your-backend-url.onrender.com"
   ```

3. Create a **New Static Site** on Render
4. Configure:
   - **Name:** `chat-app-frontend`
   - **Build Command:** `npm install --legacy-peer-deps && npm run build --prefix frontend`
   - **Publish Directory:** `frontend/build`
5. Deploy

### Step 4: Fix CORS (Optional)

Update [backend/server.js](backend/server.js):
```javascript
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  },
});
```


## 🛠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| Backend won't connect to MongoDB | Verify `MONGO_URI` in `.env` and check MongoDB Atlas firewall |
| Frontend can't reach backend | Check `ENDPOINT` URL in `SingleChat.js` and CORS settings |
| Cloudinary image upload fails | Verify credentials in `Signup.js` and upload preset name |
| Port 5000 already in use | Change `PORT` in `.env` or kill existing process |
| Build fails on Render | Check logs in Render dashboard; ensure `--legacy-peer-deps` is in build command |
| Typing indicators not working | Verify Socket.io connection and CORS origin in backend |

## 📸 Screenshots

See the `/screenshots` folder for UI previews.

## 🎨 Design

**Dark Theme:** Premium black and dark gray palette  
**Components:** Chakra UI with custom dark mode configuration  
**Responsive:** Works seamlessly on mobile, tablet, and desktop  

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/chat-app
JWT_SECRET=your_secret_key_here
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.com
```

### Frontend (Proxy in package.json)
```json
"proxy": "http://localhost:5000"
```

## 🔧 API Endpoints

### User Routes
- `POST /api/user` - Register user
- `POST /api/user/login` - Login user
- `GET /api/user?search=name` - Search users

### Chat Routes
- `GET /api/chat` - Get all chats
- `POST /api/chat` - Create/access chat
- `POST /api/chat/group` - Create group chat
- `PUT /api/chat/rename` - Rename group
- `PUT /api/chat/groupadd` - Add user to group
- `PUT /api/chat/groupremove` - Remove user from group

### Message Routes
- `GET /api/message/:chatId` - Get messages
- `POST /api/message` - Send message

## 👨‍💻 Made By

- **Original Creator:** [@Piyush-eon](https://github.com/piyush-eon)
- **Dark Theme Update:** [Your Name]

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

  
