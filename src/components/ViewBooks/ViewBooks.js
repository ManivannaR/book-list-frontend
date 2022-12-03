import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewBooks.css";

const ViewBooks = ({ setSingleBookData }) => {
  const navigate = useNavigate();
  const [bookList, setBookList] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch("https://booklist-10x-academy.onrender.com/add");
    const data = await res.json();
    setBookList(data.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleNavigate = () => {
    navigate("/add");
  };

  const handleClick = async (e) => {
    let title = e.target.innerText;
    const res = await fetch(
      `https://booklist-10x-academy.onrender.com/book/${title}`
    );
    const data = await res.json();
    setSingleBookData(data.data);
    navigate("/records");
  };

  return (
    <div>
      <button onClick={handleNavigate} className="add-book-button">
        Add New Book
      </button>
      <h1 className="book-list-heading">Books List</h1>
      <div className="book-list-container">
        {bookList.map((obj) => {
          return (
            <div className="single-book-container" key={obj.isbn}>
              <img src="/images/book.jpg" alt="nil" className="book-pic" />
              <div
                onClick={handleClick}
                className="book-details"
                id="book-title"
              >
                {obj.title}
              </div>
              <div className="book-details">{obj.author}</div>
              <div className="book-details">{obj.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewBooks;
