import React from "react";
import { useNavigate } from "react-router-dom";
import "./SingleBook.css";

const SingleBook = ({ singleBookData }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleDelete = async () => {
    const id = singleBookData._id;
    const res = await fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    alert(data.message);
    navigate("/");
  };

  const handleEdit = () => {
    navigate("/edit");
  };

  return (
    <div className="single-book-view">
      <button onClick={handleNavigate} className="booklist-navigate-button">
        Show Book List
      </button>
      <h1 className="book-record-heading">Book's Record</h1>
      <table className="book-record-table">
        <tbody>
          <tr className="book-record-row">
            <td className="book-record-id">1</td>
            <td>Title</td>
            <td>{singleBookData.title}</td>
          </tr>
          <tr>
            <td className="book-record-id">2</td>
            <td>ISBN</td>
            <td>{singleBookData.isbn}</td>
          </tr>
          <tr>
            <td className="book-record-id">3</td>
            <td>Author</td>
            <td>{singleBookData.author}</td>
          </tr>
          <tr>
            <td className="book-record-id">4</td>
            <td>Description</td>
            <td>{singleBookData.description}</td>
          </tr>
          <tr>
            <td className="book-record-id">5</td>
            <td>Published Date</td>
            <td>{singleBookData.publishedDate}</td>
          </tr>
          <tr>
            <td className="book-record-id">6</td>
            <td>Publisher</td>
            <td>{singleBookData.publisher}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleEdit} className="edit-book-button">
        Edit Book
      </button>
      <button onClick={handleDelete} className="delete-book-button">
        Delete Book
      </button>
    </div>
  );
};

export default SingleBook;
