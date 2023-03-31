import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hello } from '../Hello';

test('Hello is rendered', () => {
    render(<Hello />);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
})