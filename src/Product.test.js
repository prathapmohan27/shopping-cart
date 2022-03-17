import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NavBar from './component/NavBar';
import Main from './component/Main';

describe('product component', () => {
  it('landing on  product page', () => {
    render(
      <BrowserRouter>
        <NavBar />
        <Main />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText('Product'));
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
  });
});
