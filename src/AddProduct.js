import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/AddProduct.css';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, price, description })
        })
            .then(response => response.json())
            .then(() => navigate('/')); // Điều hướng về trang danh sách sản phẩm
    };

    return (
        <div className="add-product-container">
            <h1>Thêm Sản Phẩm Mới</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Tên sản phẩm:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Giá:</label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Mô tả:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Thêm</button>
                <button className="back-button">
                    <Link to="/" className="link-button">Trở lại</Link>
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
