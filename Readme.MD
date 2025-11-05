
# HOSTIFY - A Lounge Management WebApp

Hostify is a smart lounge management webApp that helps lounge owners efficiently handle *bookings*, *orders*, and *feedback* all in one environment.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [How to Run](#how-to-run)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [How It Works](#how-it-works)
- [Contributions (GithuB)](#contributions-github)
- [Future Improvements](#future-improvements)
- [Note for Instructor](#note-for-instructor)
- [Hostify Backend Team](#hostify-backend-team)

## Features

- Secure staff/admin authentication with JWT  
- Lounge space booking system  
- Food and drink order management  
- Customer feedback collection  
- Admin/staff reporting system  
- Input validation and centralized error handling  
- Database storage with Mongoose models  
- API testing with Postman  
- Deployment-ready backend on Render

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing
- **validation**: , express-validator for input validation
- **Testing**: Postman
- **Deployment**: Render
- **Environment Management**: dotenv

## Setup Instructions

1. Make sure you have **Node.js** installed 
 - [download from nodejs.org](https://nodejs.org/)
2. Install MongoDB if you haven't done that already, create an account and cluster
 - 
3. Clone this repository 
 - git clone https://github.com/amooraheemat/Hostify_App.git
   cd Hostify_App
4. Install the required packages by running `npm install`

## How to Run

1. Create a `.env` file in the root directory with these variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

2. Start the MongoDB server

3. Run the application:
   ```
   node app.js
   ```

4. Open your browser and go to `http://localhost:5000/api`

## Project Structure

```
Hostify_App/
│
├── src/
│   ├── Config/
│   │   └── db.js                       # Database connection setup (MongoDB)
│   │
│   ├── Controllers/
│   │   ├── auth.controller.js          # Handles login, registration, admin creation
│   │   ├── booking.controller.js       # Booking-related logic (create, update, cancel)
│   │   ├── feedback.controller.js      # Manages customer feedback
│   │   ├── order.controller.js         # Handles customer orders
│   │   ├── report.controller.js        # Staff daily reports logic
│   │   └── user.controller.js          # Manages user-related logic
│   │
│   ├── Middleware/
│   │   ├── auth.middleware.js          # JWT verification and admin protection
│   │   ├── booking.middleware.js       # Booking-specific middleware
│   │   ├── error.middleware.js         # Centralized error handling
│   │   └── validator.middleware.js     # Input validation (express-validator)
│   │
│   ├── Models/
│   │   ├── auth.model.js               # Authentication schema
│   │   ├── booking.model.js            # Booking schema
│   │   ├── feedback.model.js           # Feedback schema
│   │   ├── order.model.js              # Order schema
│   │   ├── report.model.js             # Staff daily report schema
│   │   └── user.model.js               # User/Admin schema
│   │
│   ├── Routes/
│   │   ├── auth.routes.js              # /api/auth
│   │   ├── booking.routes.js           # /api/bookings
│   │   ├── feedback.routes.js          # /api/feedback
│   │   ├── order.routes.js             # /api/orders
│   │   ├── report.routes.js            # /api/reports
│   │   └── user.routes.js              # /api/users
│   │
│   ├── Services/
│   │   └── email.services.js           # Nodemailer email configurations (confirmation, alerts)
│   │
│   ├── Utils/
│   │   ├── generateToken.js            # JWT generator
│   │   └── logger.js                   # Optional logging utility
│   │
│   └── server.js                       # Server entry point (runs Express app)
│
├── .env                                # Environment variables
├── .gitignore                          # Ignored files for git
├── package.json                        # Project dependencies and scripts
├── postman_collection.json             # Postman API collection (optional)
└── README.md                           # Project documentation
```

## How It Works

1. Staff can sign up and log in securely using JWT authentication
2. Customers can book lounge spaces with preferred date, time, and number of people expected
3. Staff can view, confirm, update, or cancel bookings
4. Customers can place and track food or drink orders
5. Feedback can be submitted and reviewed to improve service quality
6. Admins can generate daily reports summarizing bookings, orders, and feedback

## Future Improvements

- Add user profiles
- Add caching (Redis) for improved performance
- Add admin analytics dashboard
- Implement notifications for bookings and orders
- Integrate payment gateway for online transactions
- Improve the user interface

## Contributions (GithuB)

1. clone the repository git clone https://github.com/amooraheemat/Hostify_App.git
2. Create and switch to a new branch (git checkout -b branch/yourbranchname)
3. Add all files to stage (git add .[git add file1.js = Stages specific files])
3. Commit your changes (git commit -m 'add comments')
4. Push to the main branch (git push origin head)
Open a Pull Request (review and merge to main branch)

Note: Always get current updates or changes on the repository before you commit/push to avoid conflict (git pull origin main)
See video for more details: https://www.youtube.com/watch?v=Lf3DYRvCPFo

## Note for Instructor

This project is a testament to our learning journey with Node.js, Express, etc. We've implemented everything we've learnt along the way along with basic research done. And a very big thank you to our tutor, Mr. Adelabu Oluwatobi. 

## Hostify Backend Team
Hostify, A Lounge Management System was developed by a team of six backend developers collaborating to deliver a production-ready web application.

1. Ifeoluwa Oworu 
2. Joshua Bello
3. James Nnaemeka Anthony 
4. Clerk Oghenekobaro
5. Amoo Raheemat 
6. Elimuyah Odinekachukwu
