import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PurchaseRequisitions from './pages/PurchaseRequisitions';
import PurchaseOrders from './pages/PurchaseOrders';
import Suppliers from './pages/Suppliers';
import Login from './pages/Login';
import AddRequisition from './pages/AddRequisition'; 
import ViewRequisition from './pages/ViewRequisition';
import EditRequisition from './pages/EditRequisition';
import AddSupplier from './pages/AddSupplier';
import './App.css';

const AppContent: React.FC = () => {
  const location = useLocation();
  const noSidebarRoutes = ['/login'];

  return (
    <div className="app-container">
      {!noSidebarRoutes.includes(location.pathname) && <Navbar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/purchase-requisitions" element={<PurchaseRequisitions />} />
          <Route path="/purchase-orders" element={<PurchaseOrders />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-requisition" element={<AddRequisition />} />
          <Route path="/view-requisition/:id" element={<ViewRequisition />} />
          <Route path="/edit-requisition/:id" element={<EditRequisition />} />
          <Route path="/add-supplier" element={<AddSupplier />} />
        </Routes>
      </main>
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default AppWrapper;