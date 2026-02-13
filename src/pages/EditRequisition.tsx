import React from 'react';
import './EditRequisition.css';

const EditRequisition: React.FC = () => {
  // In a real application, you would fetch the requisition data based on the ID
  const requisition = {
    id: 1,
    department: 'Engineering',
    status: 'Pending Approval',
    items: [
      { id: 1, name: 'Laptop', quantity: 2 },
      { id: 2, name: 'Monitor', quantity: 2 },
    ],
  };

  return (
    <div className="edit-requisition-container">
      <h1 className="title">Edit Purchase Requisition</h1>
      <form className="edit-requisition-form">
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input type="text" id="department" defaultValue={requisition.department} />
        </div>
        <div className="form-group">
          <label htmlFor="items">Items</label>
          <textarea id="items" rows={5} defaultValue={requisition.items.map(i => `${i.name} (x${i.quantity})`).join('\n')} />
        </div>
        <button type="submit" className="submit-btn">Update</button>
      </form>
    </div>
  );
};

export default EditRequisition;
