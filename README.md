📌 Technology Stack
Node.js: Handles server-side logic and API management.

Express.js: Provides a lightweight framework for building RESTful APIs.

MongoDB: Stores book data efficiently in a NoSQL format.

Mongoose: ODM (Object Data Modeling) library for MongoDB, simplifying database interactions.

dotenv: Loads environment variables from a .env file to secure sensitive data.

Cors: Manages Cross-Origin Resource Sharing (CORS) to allow communication between frontend and backend.

Nodemon: Restarts the server automatically during development when files are changed.

📁 Project Structure
bash
Copy
Edit
Bookstore-backend/
│── models/           # Database schemas and models (e.g., Book.js)
│── routes/           # API endpoints (e.g., bookRoutes.js)
│── controllers/      # Business logic for book operations
│── config/           # Configuration settings (e.g., database connection)
│── middleware/       # Custom middleware (e.g., error handling, authentication)
│── server.js         # Main entry point for backend
│── .env              # Environment variables
│── package.json      # Dependencies and scripts


⚡ Key Features (CRUD Operations)
Create a Book

Route: POST /api/books

Description: Adds a new book to the database.

Request Body: { title, author, genre, price }

Get All Books

Route: GET /api/books

Description: Retrieves a list of all books in the store.

Get a Single Book by ID

Route: GET /api/books/:id

Description: Fetches details of a specific book.

Update a Book

Route: PUT /api/books/:id

Description: Updates book details based on the given ID.

Delete a Book

Route: DELETE /api/books/:id

Description: Removes a book from the database.

🚀 Setup Instructions
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/Samriddhi3901/Bookstore-backend.git
cd Bookstore-backend
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory and add:

sh
Copy
Edit
PORT=5000
MONGO_URI="your_mongodb_connection_string"
4️⃣ Start the Server
sh
Copy
Edit
npm run dev
This starts the backend server, making it available for frontend communication.

🎯 Conclusion
Your Bookstore Backend efficiently manages book data with RESTful APIs, ensuring smooth CRUD operations. The MongoDB + Express.js combination makes it scalable, efficient, and extendable for future improvements, such as authentication, search, and filtering. 🚀
