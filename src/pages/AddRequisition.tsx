import React from 'react';
import './AddRequisition.css';

const AddRequisition: React.FC = () => {
  return (
    <div className="add-requisition-container">
      <h1 className="title">Add Purchase Requisition</h1>
      <form className="add-requisition-form">
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input type="text" id="department" />
        </div>
        <div className="form-group">
          <label htmlFor="items">Items</label>
          <textarea id="items" rows={5}></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddRequisition;
