import Book from '../models/Book.js';
import User from '../models/User.js';

export const readBooksData = async () => {
  try {
    return await Book.findAll();
  } catch (error) {
    console.error("Error reading books:", error);
    return [];
  }
};

export const readUsersData = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.error("Error reading users:", error);
    return [];
  }
};

export const writeBooksData = async (book) => {
  try {
    if (Array.isArray(book)) {
      await Book.bulkCreate(book);
    } else {
      await Book.create(book);
    }
  } catch (error) {
    console.error("Error writing book data:", error);
  }
};

export const writeUsersData = async (user) => {
  try {
    if (Array.isArray(user)) {
      await User.bulkCreate(user);
    } else {
      await User.create(user);
    }
  } catch (error) {
    console.error("Error writing user data:", error);
  }
};

export const updateBook = async (id, data) => {
  try {
    await Book.update(data, {
      where: { id }
    });
  } catch (error) {
    console.error("Error updating book:", error);
  }
};

export const deleteBook = async (id) => {
  try {
    await Book.destroy({
      where: { id }
    });
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};