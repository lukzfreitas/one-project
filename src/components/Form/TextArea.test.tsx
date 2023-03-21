import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextArea from './TextArea';

describe('Component <TextArea />', () => {
  test('Should be label equals "Label textarea"', () => {
    render(<TextArea label="Label textarea" value="" />);
    const textarea = screen.getByTestId('label-textarea');
    expect(textarea).toHaveTextContent('Label textarea');
  });

  test('Should be default value equals "initial description"', () => {
    render(<TextArea label="" value="initial description" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveTextContent('initial description');
  });

  test('Should be type text "Typing in textarea..."', () => {
    render(<TextArea label="" value="" />);
    const textarea = screen.getByTestId('textarea');
    userEvent.type(textarea, 'Typing in textarea...');
    expect(textarea).toHaveValue('Typing in textarea...');
  });

  test('Should be type text with value inicial "initial description" and expect "initial description Typing in textarea..."', () => {
    render(<TextArea label="" value="initial description " />);
    const textarea = screen.getByTestId('textarea');
    userEvent.type(textarea, 'Typing in textarea...');
    expect(textarea).toHaveValue('initial description Typing in textarea...');
  });

  test('Should be expect 3 rows default in textarea', () => {
    render(<TextArea label="" value="initial description " />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveAttribute('rows', '3');
  });

  test('Should be expect 5 rows pass like a props in textarea', () => {
    render(<TextArea rows={5} label="" value="initial description " />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveAttribute('rows', '5');
  });
});
