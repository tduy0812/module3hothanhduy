// src/pages/EditProduct.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './css/EditProduct.css';

const EditProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setTitle(data.title);
                setPrice(data.price);
                setDescription(data.description);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, price, description })
        })
            .then(response => response.json())
            .then(() => navigate('/'));
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="edit-product-container">
            <h1>Sửa Sản Phẩm</h1>
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
                <button type="submit">Sửa</button>
                <button className="back-button">
                    <Link to="/" className="link-button">Trở lại</Link>
                </button>
            </form>
        </div>
    );
};

export default EditProduct;
