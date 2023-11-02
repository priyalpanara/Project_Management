import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import EditProduct from './EditProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]); 

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleEditProduct = (index) => {
    setEditIndex(index);
  };

  const handleSaveEdit = (editedProduct) => {
    const updatedProducts = [...products];
    updatedProducts[editIndex] = editedProduct;
    setProducts(updatedProducts);
    setEditIndex(null);
  };

 

  

  const handleDeleteProduct = (productsToDelete) => {
    if (Array.isArray(productsToDelete)) {
      // Delete multiple products
      const updatedProducts = products.filter((product) => !productsToDelete.includes(product));
      setProducts(updatedProducts);
    } else {
      // Delete a single product
      const updatedProducts = products.filter((product) => product !== productsToDelete);
      setProducts(updatedProducts);
    }
  };
  const handleDeleteAllProducts = () => {
    setProducts([]); // Delete all products
  };
  
  
  

  return (
    <div>
      <h1>Product Management App</h1>
      {editIndex !== null ? (
        <EditProduct product={products[editIndex]} onSave={handleSaveEdit} />
      ) : (
        <>
          <ProductForm onAddProduct={handleAddProduct} />
          <ProductList
            products={products}
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts} 
          />
        </>
      )}
    </div>
  );
}

export default App;
