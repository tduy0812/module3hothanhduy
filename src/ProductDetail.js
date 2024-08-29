// src/pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './css/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <p>Chi Tiết Sản Phẩm</p>
      <div className="product-info">
        <span className="label">Tên sản phẩm:</span> {product.title}
      </div>
      <div className="product-info">
        <span className="label">Mô tả:</span> {product.description}
      </div>
      <div className="product-info">
        <span className="label">Giá:</span> {product.price}
      </div>

      <button className="back-button">
        <Link to="/" className="link-button">Trở lại</Link>
      </button>
    </div>
  );
};

export default ProductDetail;
