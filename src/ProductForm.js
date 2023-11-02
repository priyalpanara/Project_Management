import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState(''); 

  const [description, setDescription] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const [errors, setErrors] = useState({
    productName: '',
    description: '',
    costPrice: '',
    sellingPrice: '',
    discount: '',
    expiryDate: '',
  });

  const validateNumericInput = (value) => {
    return /^\d+(\.\d{1,2})?$/.test(value);
  };

  const handleAddProduct = () => {
    let isValid = true;

    const newErrors = { ...errors };

    if (!productName) {
      newErrors.productName = 'Product Name is required';
      isValid = false;
    } else {
      newErrors.productName = ''; 
    }
    if (!category) {
      newErrors.category = 'Category is required';
      isValid = false;
    } else {
      newErrors.category = ''; 
    }

    if (!description) {
      newErrors.description = 'Description is required';
      isValid = false;
    } else {
      newErrors.description = ''; 
    }

    if (!costPrice) {
      newErrors.costPrice = 'Cost Price is required';
      isValid = false;
    } else {
      newErrors.costPrice = ''; 
    }

    if (!sellingPrice) {
      newErrors.sellingPrice = 'Selling Price is required';
      isValid = false;
    } else {
      newErrors.sellingPrice = ''; 
    }

    if (!discount) {
      newErrors.discount = 'Discount is required';
      isValid = false;
    } else {
      newErrors.discount = ''; 
    }

    if (!expiryDate) {
      newErrors.expiryDate = 'Expiry Date is required';
      isValid = false;
    } else {
      newErrors.expiryDate = ''; 
    }

    if (!validateNumericInput(costPrice)) {
      newErrors.costPrice = 'Cost Price must be a valid number';
      isValid = false;
    }

    if (!validateNumericInput(sellingPrice)) {
      newErrors.sellingPrice = 'Selling Price must be a valid number';
      isValid = false;
    }

    if (!validateNumericInput(discount)) {
      newErrors.discount = 'Discount must be a valid number';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      const product = {
        productName,
        category,
        description,
        costPrice,
        sellingPrice,
        discount,
        expiryDate,
      };
      onAddProduct(product);

      setProductName('');
      setCategory('');
      setDescription('');
      setCostPrice('');
      setSellingPrice('');
      setDiscount('');
      setExpiryDate('');
      setErrors({
        productName: '',
        description: '',
        costPrice: '',
        sellingPrice: '',
        discount: '',
        expiryDate: '',
      });
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <span style={{ color: 'red' }}>{errors.productName}</span>
        </div>
        <div>
  <label>Category:</label>
  <input
    type="text"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  />
  <span style={{ color: 'red' }}>{errors.category}</span>
</div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span style={{ color: 'red' }}>{errors.description}</span>
        </div>
        <div>
          <label>Cost Price:</label>
          <input
            type="text"
            value={costPrice}
            onChange={(e) => setCostPrice(e.target.value)}
          />
          <span style={{ color: 'red' }}>{errors.costPrice}</span>
        </div>
        <div>
          <label>Selling Price:</label>
          <input
            type="text"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
          <span style={{ color: 'red' }}>{errors.sellingPrice}</span>
        </div>
        <div>
          <label>Discount:</label>
          <input
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <span style={{ color: 'red' }}>{errors.discount}</span>
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <span style={{ color: 'red' }}>{errors.expiryDate}</span>
        </div>
      </form>
      <button onClick={handleAddProduct}>Add</button>
    </div>
  );
}

export default ProductForm;
