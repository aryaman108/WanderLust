# WanderLust 🏕️

A full-stack web application for vacation rental listings, built with modern web technologies. Users can browse, create, and review amazing places to stay around the world.

## 🚀 Features

- **User Authentication**: Secure signup/login with Passport.js
- **Listing Management**: Create, edit, and delete rental listings
- **Review System**: Leave and manage reviews for listings
- **Search & Filter**: Find listings by location, price, and categories
- **Image Upload**: Cloud storage with Cloudinary integration
- **Responsive Design**: Mobile-friendly interface with Bootstrap
- **Flash Messages**: User feedback for actions and errors

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Frontend**: EJS templating, Bootstrap 5, Font Awesome
- **Authentication**: Passport.js with Local Strategy
- **File Upload**: Multer with Cloudinary
- **Session Management**: Express Session with MongoDB Store
- **Validation**: Joi schemas
- **Error Handling**: Custom error classes

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Cloudinary account (for image uploads)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wanderlust.git
   cd wanderlust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your configuration:
   ```env
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_session_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

4. **Database Setup**
   - Ensure your MongoDB Atlas cluster is running
   - Whitelist your IP address in Atlas Network Access
   - Create a database user with read/write permissions

5. **Start the application**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:8080
   ```

## 📖 Usage

- **Browse Listings**: Visit the home page to explore available rentals
- **Create Account**: Sign up to become a host or leave reviews
- **Add Listings**: Hosts can create new rental listings with images
- **Search**: Use the search bar to find specific destinations
- **Filter**: Apply filters for trending, rooms, cities, etc.

## 🏗️ Project Structure

```
wanderlust/
├── controller/          # Route handlers
├── models/             # Mongoose schemas
├── routes/             # Express routes
├── views/              # EJS templates
├── public/             # Static assets (CSS, JS, images)
├── utils/              # Utility functions
├── middleware.js       # Custom middleware
├── app.js              # Main application file
└── package.json        # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aryaman Parashar Behera** - [[Your GitHub](https://github.com/aryaman108)] 

## 🙏 Acknowledgments

- Inspired by Airbnb and similar vacation rental platforms
- Icons by Font Awesome
- UI framework by Bootstrap

