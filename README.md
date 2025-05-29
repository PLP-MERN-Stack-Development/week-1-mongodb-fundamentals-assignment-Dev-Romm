# 📚 PLP Bookstore MongoDB Assignment

This project demonstrates MongoDB basics and advanced features using a sample bookstore dataset. You will be shown how to insert data, run queries, use aggregation pipelines, and implement indexing.

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) installed locally **OR** a free [MongoDB Atlas](https://www.mongodb.com/atlas/database) cluster
- [MongoDB Shell (mongosh)](https://www.mongodb.com/try/download/shell) or [MongoDB Compass](https://www.mongodb.com/try/download/compass)

## 🚀 How to Run the Scripts

1. **Clone the Repository**

   ```sh
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Install Dependencies (if needed)**

   If your `insert_books.js` uses the `mongodb` npm package, install it:

   ```sh
   npm install
   ```

3. **Configure MongoDB Connection**

   - For **local MongoDB**, ensure your MongoDB server is running.
   - For **MongoDB Atlas**, update the connection URI in `insert_books.js` with your Atlas connection string.

4. **Insert Book Data**

   Run the script to populate your database:

   ```sh
   node insert_books.js
   ```

   This will insert the sample books into the `plp_bookstore.books` collection.

5. **Run MongoDB Queries**

   - Open `queries.js` to see all the MongoDB queries for the assignment.
   - Copy and paste these queries into **mongosh** or **MongoDB Compass** to test and view results.

## 📄 Files Included

- `insert_books.js` — Script to insert sample book data into MongoDB.
- `queries.js` — Contains all required MongoDB queries.
- `README.md` — This file.
- `screenshot.png` — Screenshot of your MongoDB Compass or Atlas showing your collections and sample data.

## 📸 Example Screenshot

Below is an example of what your MongoDB Compass or Atlas screenshot should look like.

![MongoDB Compass Screenshot](screenshot.png)

---

**Tip:** If you have any issues, check your MongoDB connection string and ensure your database server is running.

Good luck!