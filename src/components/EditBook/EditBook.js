import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditBook.css";

const EditBook = ({ singleBookData, setSingleBookData }) => {
  const navigate = useNavigate();

  const [editedData, setEditedData] = useState(singleBookData);

  const handleChange = (e) => {
    setSingleBookData({ ...editedData, [e.target.name]: e.target.value });
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = editedData._id;
    await fetch(`https://booklist-10x-academy.onrender.com/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify(editedData),
      headers: {
        "content-type": "application/json",
      },
    });
    navigate("/records");
  };

  const handleNavigate = () => {
    navigate("/books");
  };
  return (
    <div className="edit-book-container">
      <button className="booklist-navigate-button" onClick={handleNavigate}>
        Show Book List
      </button>
      <h1 className="edit-book-heading">Edit Book</h1>
      <form className="edit-book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title of the Book"
          className="edit-book-input"
          onChange={handleChange}
          name="title"
          required
        />
        <input
          type="text"
          placeholder="ISBN"
          className="edit-book-input"
          onChange={handleChange}
          name="isbn"
          required
        />
        <input
          type="text"
          placeholder="Author"
          className="edit-book-input"
          onChange={handleChange}
          name="author"
          required
        />
        <input
          type="text"
          placeholder="Describe this book"
          className="edit-book-input"
          onChange={handleChange}
          name="description"
          required
        />
        <input
          type="date"
          placeholder="Date of Publishing"
          className="edit-book-input"
          onChange={handleChange}
          name="publishedDate"
          required
        />
        <input
          type="text"
          placeholder="Publisher"
          className="edit-book-input"
          onChange={handleChange}
          name="publisher"
          required
        />
        <button type="submit" className="edit-book-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditBook;
