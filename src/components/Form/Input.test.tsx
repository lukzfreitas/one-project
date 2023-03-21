import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Component <Input />', () => { 
    test('Should be placeholder equals "Type text"', () => {
        render(<Input placeholder='Type text' key='input' />);
        const input = screen.getByPlaceholderText('Type text');
        expect(input).toBeInTheDocument();
    });

    test('Should be label equals "Label input"', () => {
        render(<Input label='Label input' key='input' />);
        const input = screen.getByTestId('input-section');
        expect(input).toHaveTextContent('Label input');
    });

    test('Should be show value "Test input"', () => {
        render(<Input value={'Test input'} key='input' />);
        const input = screen.getByTestId('input');        
        expect(input).toHaveValue('Test input');
    });

    test('Should be type value and show value "Test input"', () => {
        render(<Input key='input' />);
        const input = screen.getByTestId('input');
        userEvent.type(input, 'Test input');
        expect(input).toHaveValue('Test input');
    });
});