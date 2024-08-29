import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from "./ProductList ";
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />

      </Routes>
    </Router>
  );
}

export default App;
