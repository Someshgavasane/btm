import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Modal from "react-modal";

const Dashboard = () => {
  const [components, setComponents] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editItemObj, setEditItemObj] = useState({});
  const [newItemObj, setNewItemObj] = useState({
    bookTitle: "",
    author: "",
    type: "",
    genre: "",
    publication: "",
    pages: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const handleDeleteComponent = (item) => {
    const updatedComponents = components.filter((comp) => comp.id !== item.id);
    setComponents(updatedComponents);
  };

  const handleEditComponent = (item) => {
    setEditItemObj(item);
    setEditModal(true);
  };

  const handleInputChange = (e, field, setObj) => {
    setObj((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleUpdateComponent = () => {
    const updatedComponents = components.map((item) =>
      item.id === editItemObj.id ? editItemObj : item
    );
    setComponents(updatedComponents);
    setEditModal(false);
  };

  const handleAddComponent = () => {
    const newComponent = {
      ...newItemObj,
      id: components.length ? components[components.length - 1].id + 1 : 0,
    };
    setComponents((prev) => [...prev, newComponent]);
    setAddModal(false);
  };

  const handleAdd = () => {
    setNewItemObj({
      bookTitle: "",
      author: "",
      type: "",
      genre: "",
      publication: "",
      pages: "",
      price: "",
    });
    setAddModal(true);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-heading">Book Management Tool</h1>
        <div className="user-actions">
          <span className="hello-user">
            Hello, {sessionStorage?.getItem("username")?.toUpperCase()}
          </span>
          <button className="add-btn" onClick={() => handleAdd()}>
            Add Book
          </button>
          <span className="logout-btn" onClick={handleLogout}>
            <IoMdLogOut /> Logout
          </span>
        </div>
      </header>

      <div className="cards-container">
        {components.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-title">{item.bookTitle}</div>
            <div className="card-details">
              <div className="card-detail">
                <span className="detail-label">Author:</span> {item.author}
              </div>
              <div className="card-detail">
                <span className="detail-label">Type:</span> {item.type}
              </div>
              <div className="card-detail">
                <span className="detail-label">Genre:</span> {item.genre}
              </div>
              <div className="card-detail">
                <span className="detail-label">Publication:</span>{" "}
                {item.publication}
              </div>
              <div className="card-detail">
                <span className="detail-label">No of Pages:</span> {item.pages}
              </div>
              <div className="card-detail">
                <span className="detail-label">Price:</span> {item.price}
              </div>
            </div>
            <div className="card-actions">
              <span className="edit-btn" onClick={() => handleEditComponent(item)}>
                <FaEdit />
              </span>
              <span className="delete-btn" onClick={() => handleDeleteComponent(item)}>
                <MdDelete />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={editModal}
        onRequestClose={() => setEditModal(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-btn" onClick={() => setEditModal(false)}>
          X
        </button>
        <div className="modal-content">
          <h2>Edit Book Details</h2>
          <div className="modal-fields">
            <div className="input-group">
              <label>Title:</label>
              <input
                type="text"
                value={editItemObj.bookTitle}
                onChange={(e) =>
                  handleInputChange(e, "bookTitle", setEditItemObj)
                }
              />
            </div>
            <div className="input-group">
              <label>Author:</label>
              <input
                type="text"
                value={editItemObj.author}
                onChange={(e) => handleInputChange(e, "author", setEditItemObj)}
              />
            </div>
            <div className="input-group">
              <label>Type:</label>
              <input
                type="text"
                value={editItemObj.type}
                onChange={(e) => handleInputChange(e, "type", setEditItemObj)}
              />
            </div>
            <div className="input-group">
              <label>Genre:</label>
              <input
                type="text"
                value={editItemObj.genre}
                onChange={(e) => handleInputChange(e, "genre", setEditItemObj)}
              />
            </div>
            <div className="input-group">
              <label>Publication:</label>
              <input
                type="text"
                value={editItemObj.publication}
                onChange={(e) =>
                  handleInputChange(e, "publication", setEditItemObj)
                }
              />
            </div>
            <div className="input-group">
              <label>No of Pages:</label>
              <input
                type="text"
                value={editItemObj.pages}
                onChange={(e) => handleInputChange(e, "pages", setEditItemObj)}
              />
            </div>
            <div className="input-group">
              <label>Price:</label>
              <input
                type="text"
                value={editItemObj.price}
                onChange={(e) => handleInputChange(e, "price", setEditItemObj)}
              />
            </div>
          </div>
          <div className="button-group">
            <button className="update-btn" onClick={handleUpdateComponent}>
              Update
            </button>
          </div>
        </div>
      </Modal>

      {/* Add Modal */}
      <Modal
        isOpen={addModal}
        onRequestClose={() => setAddModal(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-btn" onClick={() => setAddModal(false)}>
          X
        </button>
        <div className="modal-content">
          <h2>Add New Book</h2>
          <div className="modal-fields">
            <div className="input-group">
              <label>Title:</label>
              <input
                type="text"
                value={newItemObj.bookTitle}
                onChange={(e) =>
                  handleInputChange(e, "bookTitle", setNewItemObj)
                }
              />
            </div>
            <div className="input-group">
              <label>Author:</label>
              <input
                type="text"
                value={newItemObj.author}
                onChange={(e) => handleInputChange(e, "author", setNewItemObj)}
              />
            </div>
            <div className="input-group">
              <label>Type:</label>
              <input
                type="text"
                value={newItemObj.type}
                onChange={(e) => handleInputChange(e, "type", setNewItemObj)}
              />
            </div>
            <div className="input-group">
              <label>Genre:</label>
              <input
                type="text"
                value={newItemObj.genre}
                onChange={(e) => handleInputChange(e, "genre", setNewItemObj)}
              />
            </div>
            <div className="input-group">
              <label>Publication:</label>
              <input
                type="text"
                value={newItemObj.publication}
                onChange={(e) =>
                  handleInputChange(e, "publication", setNewItemObj)
                }
              />
            </div>
            <div className="input-group">
              <label>No of Pages:</label>
              <input
                type="text"
                value={newItemObj.pages}
                onChange={(e) => handleInputChange(e, "pages", setNewItemObj)}
              />
            </div>
            <div className="input-group">
              <label>Price:</label>
              <input
                type="text"
                value={newItemObj.price}
                onChange={(e) => handleInputChange(e, "price", setNewItemObj)}
              />
            </div>
          </div>
          <div className="button-group">
            <button className="add-btn" onClick={handleAddComponent}>
              Add Book
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
