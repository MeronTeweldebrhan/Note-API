# Notes API

A simple secure Notes REST API built with Node.js, Express, MongoDB, and JWT Authentication with third party OAuth.


## Features

- User Registration & Login
- Secure JWT-based Authentication
- Create, Read, Update, Delete Notes
- Authorization: Only owners can manage their notes
- Github OAuth with Passport.js
- CORS-enabled backend
 
## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcrypt for password hashing

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


