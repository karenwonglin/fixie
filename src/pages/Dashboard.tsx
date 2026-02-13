import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  // Temporary data
  const summaryStats = [
    { title: 'Total Spend', value: '$2,456,789' },
    { title: 'Purchase Requisitions', value: '124' },
    { title: 'Purchase Orders', value: '102' },
    { title: 'Suppliers', value: '25' },
  ];

  const recentRequisitions = [
    { id: 'PR-001', department: 'IT', status: 'Pending Approval', date: '2024-07-30' },
    { id: 'PR-002', department: 'Marketing', status: 'Approved', date: '2024-07-29' },
    { id: 'PR-003', department: 'Operations', status: 'Rejected', date: '2024-07-28' },
    { id: 'PR-004', department: 'IT', status: 'Approved', date: '2024-07-27' },
    { id: 'PR-005', department: 'HR', status: 'Pending Approval', date: '2024-07-26' },
    { id: 'PR-006', department: 'Finance', status: 'Approved', date: '2024-07-25' },
    { id: 'PR-007', department: 'IT', status: 'Pending Approval', date: '2024-07-24' },
    { id: 'PR-008', department: 'Operations', status: 'Approved', date: '2024-07-23' },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Procurement Dashboard</h1>

      <div className="summary-stats">
        {summaryStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3 className="stat-title">{stat.title}</h3>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="recent-requisitions">
        <h2 className="requisitions-title">Recent Purchase Requisitions</h2>
        <table className="requisitions-table">
          <thead>
            <tr>
              <th>Requisition ID</th>
              <th>Department</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentRequisitions.map((requisition) => (
              <tr key={requisition.id}>
                <td>{requisition.id}</td>
                <td>{requisition.department}</td>
                <td>
                  <span className={`status ${requisition.status.toLowerCase().replace(' ', '-')}`}>
                    {requisition.status}
                  </span>
                </td>
                <td>{requisition.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
