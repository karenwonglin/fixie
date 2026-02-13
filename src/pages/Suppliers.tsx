import React from 'react';
import './Suppliers.css';

const Suppliers: React.FC = () => {
  // Temporary data
  const suppliers = [
    { id: 1, name: 'Supplier A', category: 'IT Hardware', contact: 'John Doe' },
    { id: 2, name: 'Supplier B', category: 'Office Supplies', contact: 'Jane Smith' },
    { id: 3, name: 'Supplier C', category: 'Marketing Services', contact: 'Peter Jones' },
    { id: 4, name: 'Supplier D', category: 'Logistics', contact: 'Mary Williams' },
    { id: 5, name: 'Supplier E', category: 'Manufacturing', contact: 'David Brown' },
    { id: 6, name: 'Supplier F', category: 'Consulting', contact: 'Susan Davis' },
    { id: 7, name: 'Supplier G', category: 'IT Software', contact: 'Robert Miller' },
    { id: 8, name: 'Supplier H', category: 'Office Furniture', contact: 'Patricia Wilson' },
    { id: 9, name: 'Supplier I', category: 'Legal Services', contact: 'Michael Moore' },
    { id: 10, name: 'Supplier J', category: 'Financial Services', contact: 'Linda Taylor' },
  ];

  return (
    <div className="suppliers-container">
      <h1 className="title">Suppliers</h1>

      <div className="actions">
        <button className="add-supplier-btn">+ Add Supplier</button>
      </div>

      <div className="suppliers-list">
        <table className="suppliers-table">
          <thead>
            <tr>
              <th>Supplier Name</th>
              <th>Category</th>
              <th>Contact Person</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.name}</td>
                <td>{supplier.category}</td>
                <td>{supplier.contact}</td>
                <td>
                  <button className="action-btn view-btn">View</button>
                  <button className="action-btn edit-btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suppliers;
