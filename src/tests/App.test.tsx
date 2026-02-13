import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Corrected import path
import Dashboard from '../pages/Dashboard';
import PurchaseRequisitions from '../pages/PurchaseRequisitions';
import PurchaseOrders from '../pages/PurchaseOrders';
import Suppliers from '../pages/Suppliers';

describe('Navigation', () => {
  const renderApp = (initialRoute: string) => {
    render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/purchase-requisitions" element={<PurchaseRequisitions />} />
          <Route path="/purchase-orders" element={<PurchaseOrders />} />
          <Route path="/suppliers" element={<Suppliers />} />
        </Routes>
      </MemoryRouter>
    );
  };

  test('navigates to Dashboard', () => {
    renderApp('/');
    fireEvent.click(screen.getByText(/Dashboard/i));
    expect(screen.getByText(/Dashboard Page/i)).toBeInTheDocument();
  });

  test('navigates to Purchase Requisitions', () => {
    renderApp('/');
    fireEvent.click(screen.getByText(/Purchase Requisitions/i));
    expect(screen.getByText(/Purchase Requisitions Page/i)).toBeInTheDocument();
  });

  test('navigates to Purchase Orders', () => {
    renderApp('/');
    fireEvent.click(screen.getByText(/Purchase Orders/i));
    expect(screen.getByText(/Purchase Orders Page/i)).toBeInTheDocument();
  });

  test('navigates to Suppliers', () => {
    renderApp('/');
    fireEvent.click(screen.getByText(/Suppliers/i));
    expect(screen.getByText(/Suppliers Page/i)).toBeInTheDocument();
  });
});
