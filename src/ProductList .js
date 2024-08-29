import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xoá sản phẩm này?')) {
            fetch(`http://localhost:3000/products/${id}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(() => setProducts(products.filter(product => product.id !== id)));
        }
    };

    return (
        <div className='container'>
            <h1>Danh Sách Sản Phẩm</h1>
            <Link to="/add">
                <button className="add-button">Thêm mới</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Giá</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td><Link to={`/product/${product.id}`}>{product.title}</Link></td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="delete-button" onClick={() => handleDelete(product.id)}>Xoá</button>
                                <Link to={`/edit/${product.id}`}>
                                    <button className="edit-button">Sửa</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
