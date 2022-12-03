import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    publishedDate: "",
    publisher: "",
  });

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://booklist-10x-academy.onrender.com/add", {
      method: "POST",
      body: JSON.stringify(bookData),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    alert(data.message);
    navigate("/books");
  };

  const handleNavigate = () => {
    navigate("/books");
  };

  return (
    <div className="add-book-container">
      <button className="booklist-navigate-button" onClick={handleNavigate}>
        Show Book List
      </button>
      <h1 className="add-book-heading">Add Book</h1>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title of the Book"
          className="add-book-input"
          onChange={handleChange}
          value={bookData.title}
          name="title"
          required
        />
        <input
          type="text"
          placeholder="ISBN"
          className="add-book-input"
          onChange={handleChange}
          value={bookData.isbn}
          name="isbn"
          required
        />
        <input
          type="text"
          placeholder="Author"
          className="add-book-input"
          onChange={handleChange}
          value={bookData.author}
          name="author"
          required
        />
        <input
          type="text"
          placeholder="Describe this book"
          className="add-book-input"
          onChange={handleChange}
          value={bookData.description}
          name="description"
          required
        />
        <input
          type="date"
          placeholder="Date of Publishing"
          className="add-book-input"
          onChange={handleChange}
          value={bookData.publishedDate}
          name="publishedDate"
          required
        />
        <input
          type="text"
          placeholder="Publisher"
          className="add-book-input"
          onChange={handleChange}
          value={bookData.publisher}
          name="publisher"
          required
        />
        <button type="submit" className="add-book-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
