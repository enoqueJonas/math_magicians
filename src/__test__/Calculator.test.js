import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from "../components/Calculator";

describe('Calculator component test', () => {
    test('Title renders correctly', () => {
        render(<Calculator />);

        screen.getByText(`Let's do Some Math!`);

        expect(screen.getByText(`Let's do Some Math!`)).toBeInTheDocument();

    })
    test('Calculator renders items correctly', () => {
        render(<Calculator />);

        screen.getByText('1');

        expect(screen.getByText('1')).toBeInTheDocument();

    })
})