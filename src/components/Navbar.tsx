import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/purchase-requisitions">Purchase Requisitions</Link>
        </li>
        <li>
          <Link to="/purchase-orders">Purchase Orders</Link>
        </li>
        <li>
          <Link to="/suppliers">Suppliers</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
