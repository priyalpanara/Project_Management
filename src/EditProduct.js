// EditProduct.js
import React, { useState, useEffect } from 'react';

function EditProduct({ product, onSave }) {
  const [editedProduct, setEditedProduct] = useState(product);

  // Update the state when the product prop changes
  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleSave = () => {
    onSave(editedProduct);
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form>
        <label>Product Name:</label>
        <input
          type="text"
          value={editedProduct.productName}
          onChange={(e) => setEditedProduct({ ...editedProduct, productName: e.target.value })}
        />
        <label>Description:</label>
        <input
          type="text"
          value={editedProduct.description}
          onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
        />
        <label>Cost Price:</label>
        <input
          type="number"
          value={editedProduct.costPrice}
          onChange={(e) => setEditedProduct({ ...editedProduct, costPrice: parseFloat(e.target.value) })}
        />
        <label>Selling Price:</label>
        <input
          type="number"
          value={editedProduct.sellingPrice}
          onChange={(e) => setEditedProduct({ ...editedProduct, sellingPrice: parseFloat(e.target.value) })}
        />
        <label>Discount:</label>
        <input
          type="number"
          value={editedProduct.discount}
          onChange={(e) => setEditedProduct({ ...editedProduct, discount: parseFloat(e.target.value) })}
        />
        <label>Expiry Date:</label>
        <input
          type="date"
          value={editedProduct.expiryDate}
          onChange={(e) => setEditedProduct({ ...editedProduct, expiryDate: e.target.value })}
        />
      </form>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditProduct;
