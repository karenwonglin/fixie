import React from 'react';
import './ViewRequisition.css';

const ViewRequisition: React.FC = () => {
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
    <div className="view-requisition-container">
      <h1 className="title">View Purchase Requisition</h1>
      <div className="requisition-details">
        <div className="detail-item">
          <span className="detail-label">Requisition ID:</span>
          <span className="detail-value">{requisition.id}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Department:</span>
          <span className="detail-value">{requisition.department}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Status:</span>
          <span className={`status ${requisition.status.toLowerCase().replace(' ', '-')}`}>
            {requisition.status}
          </span>
        </div>
        <div className="items-list">
          <h2 className="items-title">Items</h2>
          <table className="items-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {requisition.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewRequisition;
