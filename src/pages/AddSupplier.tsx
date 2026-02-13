import React from 'react';
import './AddSupplier.css';

const AddSupplier: React.FC = () => {
  return (
    <div className="add-supplier-container">
      <h1 className="title">Add Supplier</h1>
      <form className="add-supplier-form">
        <div className="form-group">
          <label htmlFor="name">Supplier Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Person</label>
          <input type="text" id="contact" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddSupplier;
