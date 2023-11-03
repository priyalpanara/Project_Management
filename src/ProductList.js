import React from 'react';
import { format } from 'date-fns';


function ProductList({ products, onEditProduct, onDeleteProduct, selectedProducts, setSelectedProducts }) {
  const handleDeleteAll = () => {
    onDeleteProduct(products);
    setSelectedProducts([]); 
  };

  const handleDeleteSelected = () => {
    onDeleteProduct(selectedProducts); 
    setSelectedProducts([]); 
  };

  const handleCheckboxChange = (product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== product));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={handleDeleteAll}>Delete All</button>
      <button onClick={handleDeleteSelected}>Delete Selected</button>
      <table className="product-table"> 
        <thead>
          <tr className="header-row"> 
            <th>Select</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Final Price</th>
            <th>Expiry Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product)}
                  onChange={() => handleCheckboxChange(product)}
                />
              </td>
              <td>{product.productName}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>₹{product.sellingPrice}</td>
              <td>{product.discount}%</td>
              <td>₹{product.sellingPrice - (product.sellingPrice * product.discount) / 100}</td>
              <td>{product.expiryDate}</td>

              
              <td>
                <button onClick={() => onEditProduct(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => onDeleteProduct(product)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
