import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navigation test', () => {
  test('Title renders correctly', () => {
    render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>,
    );

    screen.getByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent('Math Magicians');
  });
});