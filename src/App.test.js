import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NavBar from './component/NavBar';
import Main from './component/Main';

describe('NaBar component', () => {
  it('renders correct appBar and home page', () => {
    render(
      <BrowserRouter>
        <NavBar />
        <Main />
      </BrowserRouter>
    );
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getByText('MyShop')).toBeInTheDocument();
  });

  it('using home page button landing on  product page', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    userEvent.click(screen.getByTestId('shopNow'));
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
  });

  it('landing on  about page', () => {
    render(
      <BrowserRouter>
        <NavBar />
        <Main />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText(/about/i));
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });
});
