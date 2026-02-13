import React from 'react';
import './PurchaseOrders.css';

const PurchaseOrders: React.FC = () => {
  // Temporary data
  const orders = [
    { id: 'PO-001', supplier: 'Supplier A', status: 'Shipped', date: '2024-07-25' },
    { id: 'PO-002', supplier: 'Supplier B', status: 'Delivered', date: '2024-07-24' },
    { id: 'PO-003', supplier: 'Supplier C', status: 'Pending', date: '2024-07-23' },
    { id: 'PO-004', supplier: 'Supplier A', status: 'Shipped', date: '2024-07-22' },
    { id: 'PO-005', supplier: 'Supplier D', status: 'Delivered', date: '2024-07-21' },
    { id: 'PO-006', supplier: 'Supplier B', status: 'Pending', date: '2024-07-20' },
    { id: 'PO-007', supplier: 'Supplier E', status: 'Shipped', date: '2024-07-19' },
    { id: 'PO-008', supplier: 'Supplier C', status: 'Delivered', date: '2024-07-18' },
    { id: 'PO-009', supplier: 'Supplier A', status: 'Pending', date: '2024-07-17' },
    { id: 'PO-010', supplier: 'Supplier F', status: 'Shipped', date: '2024-07-16' },
  ];

  return (
    <div className="purchase-orders-container">
      <h1 className="title">Purchase Orders</h1>

      <div className="orders-list">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Supplier</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.supplier}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.date}</td>
                <td>
                  <button className="action-btn view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseOrders;
