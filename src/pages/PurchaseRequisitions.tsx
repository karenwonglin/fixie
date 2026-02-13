import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PurchaseRequisitions.css';

const PurchaseRequisitions: React.FC = () => {
  const navigate = useNavigate();

  const handleAddRequisition = () => {
    navigate('/add-requisition');
  };

  const handleViewRequisition = (id: number) => {
    navigate(`/view-requisition/${id}`);
  };

  const handleEditRequisition = (id: number) => {
    navigate(`/edit-requisition/${id}`);
  };

  // Temporary data
  const requisitions = [
    { id: 1, department: 'Engineering', status: 'Pending Approval' },
    { id: 2, department: 'Marketing', status: 'Approved' },
    { id: 3, department: 'HR', status: 'Rejected' },
  ];

  return (
    <div className="purchase-requisitions-container">
      <h1 className="title">Purchase Requisitions</h1>

      <div className="actions">
        <button className="add-requisition-btn" onClick={handleAddRequisition}>
          + Add Requisition
        </button>
      </div>

      <div className="requisitions-list">
        <table className="requisitions-table">
          <thead>
            <tr>
              <th>Requisition ID</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.map((requisition) => (
              <tr key={requisition.id}>
                <td>{requisition.id}</td>
                <td>{requisition.department}</td>
                <td>
                  <span className={`status ${requisition.status.toLowerCase().replace(' ', '-')}`}>
                    {requisition.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn view-btn" onClick={() => handleViewRequisition(requisition.id)}>View</button>
                  <button className="action-btn edit-btn" onClick={() => handleEditRequisition(requisition.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseRequisitions;
