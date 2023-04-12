import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hello } from '../Hello';

test('Hello is rendered', () => {
    const testFunction = vitest.fn();
    const container = render(<Hello testProp={"hi"} testFn={testFunction} />);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
})
