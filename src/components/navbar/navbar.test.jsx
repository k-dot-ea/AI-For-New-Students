import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from './navbar';

describe('Navbar component', () => {
  test('renders logo, menu button, and refresh button', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText(/menu/i) || screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
    expect(screen.getByText(/refresh/i) || screen.getByRole('button', { name: /refresh/i })).toBeInTheDocument();
  });

  test('toggles menu panel on menu button click', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', { name: /menu/i }) || screen.getByText(/menu/i);
    fireEvent.click(menuButton);
    expect(screen.getByText(/menu panel/i) || screen.getByTestId('menu-panel')).toBeInTheDocument();
    fireEvent.click(menuButton);
    expect(screen.queryByText(/menu panel/i) || screen.queryByTestId('menu-panel')).not.toBeInTheDocument();
  });
});
