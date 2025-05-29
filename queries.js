// Task 2: Basic CRUD operations
//  1. Find all books:
db.books.find();

// 2. Find books by a specific author:
db.books.find({ author: "George Orwell" });

// 3. Find books published after 1950:
db.books.find({ published_year: { $lt: 1940 } });

// 4. Find books in a specific genre:
db.books.find({ genre: "Fiction" });

// 5. Find in-stock books:
db.books.find({ in_stock: true });

// 6. Delete a book by title:
db.books.deleteOne({ title: "Brave New World" });

//  7. Update the price of a book:
db.books.updateOne({ title: "The Hobbit" }, { $set: { price: 12.99 } });

// Task 3: Advanced Queries
// 1. Query to find books that are both in stock and published after 2010:
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 2. Use projection to return only the title, author, and price fields:
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// 3. Sort to display books by price (both ascending and descending)
db.books.find({}).sort({ price: 1 }); // Ascending
db.books.find({}).sort({ price: -1 }); // Descending

// 4. Use the limit and skip methods to implement pagination (5 books per page)
db.books.find({}).sort({ title: 1 }).skip(0).limit(5);

// Task 4: Aggregation Pipeline
// 1. Calculate the average price of books by genre:
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
    },
  },
]);

// 2. Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 },
    },
  },
  {
    $sort: { bookCount: -1 },
  },
  {
    $limit: 1,
  },
]);

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: {
        $subtract: [
          { $divide: ["$published_year", 10] },
          { $mod: [{ $divide: ["$published_year", 10] }, 1] },
        ],
      },
      count: { $sum: 1 },
    },
  },
  {
    $sort: { _id: 1 },
  },
]);

// Task 5: Indexing
// 1. Create an index on the title field for faster searches
db.books.createIndex({ title: 1 });

// 2. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

//3. Use the explain() method to demonstrate the performance improvement with your indexes
db.books.find({ title: "1984" }).explain("executionStats");
