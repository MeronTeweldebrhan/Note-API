# SBA Innovate Inc. – Secure Notes API 

A secure, full-featured Notes REST API built with Node.js, Express, MongoDB, and JWT authentication, including GitHub OAuth via Passport.js.


## Features

- User Registration & Login
- Secure JWT-based Authentication
- Create, Read, Update, Delete Notes
- Authorization: Only owners can manage their notes
- Github OAuth with Passport.js
- CORS-enabled backend frontend integration


## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- Passport.js with passport-github2
- CORS

## Project Structure
```
project/
│
├── config/
│   ├── connection.js         # MongoDB connection
│   └── passport.js           # Passport GitHub strategy
│
├── controllers/
│   ├── noteController.js     # CRUD logic for notes
│   └── userController.js     # Auth & OAuth logic
│
├── middleware/
│   └── authMiddleware.js     # JWT Auth & ownership checks
│
├── models/
│   ├── User.js               # User model 
│   └── Note.js               # Note/model
│
├── routes/
│   ├── noteRoute.js          # /api/notes
│   └── userRoute.js          # /api/users (auth + OAuth)
│
├── utils/
│   └── auth.js               # JWT signing helpers
│
├── .env                      # Environment variables
├── .gitignore
├── package.json
└── server.js       # Main entry point
```

## Endpoints

### Auth Routes

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login and receive JWT token

### Notes Routes (Protected)

> Require JWT token in `Authorization: Bearer <token>` header

- `GET /api/notes` – Get all notes of the logged-in user
- `POST /api/notes/newnote` – Create a new note
- `GET /api/notes/:id` – Get a specific note (byowner)
- `PUT /api/notes/:id` – Update a note (by owner)
- `DELETE /api/notes/:id` – Delete a note (by owner)

## Authorization Logic

Only the user who created a note can view, update, or delete it. This is enforced by checking if `note.user === req.user._id`.

## Getting Started

1. Clone the repo
2. Install dependencies: `npm install`
3. Create a `.env` file with:
`MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret`

4. Run the app: `npm run dev`


