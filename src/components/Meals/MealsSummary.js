import classes from './MealsSummary.module.css';

import React, { useState } from 'react';

const MealsSummary = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [productArray, setProductArray] = useState([]);

  const handleIdChange = (e) => setId(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { id, name, description, price };
    setProductArray([...productArray, newProduct]);
    // Reset form fields after submission
    setId('');
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <section className={classes.summary}>
    <div>
      <h2>Buy Candy</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={handleIdChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>Product Array</h2>
      <ul>
        {productArray.map((product, index) => (
          <li key={index}>
            ID: {product.id}, Name: {product.name}, Description: {product.description}, Price: {product.price}
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
};

export default MealsSummary;

