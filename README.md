# Book Management API

## Overview
This project is a RESTful API for managing a bookstore's inventory. Built using **Node.js**, **Express.js**, and **MongoDB**, it allows users to perform CRUD operations on books, including searching, pagination, and more.

---

## Features
- **CRUD Operations**: Add, update, retrieve, and delete books.
- **Search**: Search books by title, author, or genre.
- **Pagination**: List books with pagination support.
- **Input Validation**: Ensures all input data is properly validated.
- **Error Handling**: Handles errors gracefully with appropriate HTTP status codes.

---

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

---

## Prerequisites
- **Node.js**: v14 or higher.
- **MongoDB**: Local or cloud-based (e.g., MongoDB Atlas).
- **Postman/Thunder Client**: For testing API endpoints.

---

## Set Up & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Nihal_Koushik/Book_Management_API.git
cd Book_Management_API

```

### 2. Install Dependencies
```bash
npm install
npm install express mongoose dotenv body-parser morgan cors helmet(required)
npm install --save-dev eslint(required)
npm install multer redis rate-limiter-flexible

```

### 3. Create a `.env` File
Create a `.env` file in the project root and add the following:
```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<databaseName>?retryWrites=true&w=majority
```
Replace `<username>`, `<password>`, and `<databaseName>` with your MongoDB credentials.

### 4. Start the Server
```bash
npm start
```
The server will run at `http://localhost:3000`.

---

## API Endpoints

### Book Operations

#### 1. **List All Books** (with Pagination)
- **GET** `/api/books`
- **Query Parameters**:
  - `page` (optional): Page number.
  - `limit` (optional): Number of items per page.

#### 2. **Get Book Details**
- **GET** `/api/books/:id`

#### 3. **Add a New Book**
- **POST** `/api/books`
- **Body**:
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "isbn": "123456789",
  "price": 19.99,
  "quantity": 50,
  "publishedDate": "2023-01-01",
  "genre": "Fiction",
  "description": "A great book."
}
```

#### 4. **Update Book Details**
- **PUT** `/api/books/:id`
- **Body**: Same as above.

#### 5. **Delete a Book**
- **DELETE** `/api/books/:id`

#### 6. **Search Books**
- **GET** `/api/books/search`
- **Query Parameters**:
  - `query` (required): Search term for title, author, or genre.

---


## Acknowledgments
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
