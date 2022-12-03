import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook/AddBook";
import ViewBooks from "./components/ViewBooks/ViewBooks";
import SingleBook from "./components/SingleBookView/SingleBook";
import { useState } from "react";
import EditBook from "./components/EditBook/EditBook";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  const [singleBookData, setSingleBookData] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/books"
            element={
              <ViewBooks
                setSingleBookData={setSingleBookData}
                singleBookData={singleBookData}
              />
            }
          />
          <Route path="/add" element={<AddBook />} />
          <Route
            path="/records"
            element={
              <SingleBook
                singleBookData={singleBookData}
                setSingleBookData={setSingleBookData}
              />
            }
          />
          <Route
            path="/edit"
            element={
              <EditBook
                singleBookData={singleBookData}
                setSingleBookData={setSingleBookData}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
