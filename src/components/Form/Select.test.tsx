import { fireEvent, render, screen } from '@testing-library/react';
import Select, { SelectOption } from './Select';

describe('Component <Select />', () => {
  test('Should be label equals "Label input"', () => {
    const options: SelectOption[] = [
      { value: 'test_1', label: 'Teste 1', selected: false },
      { value: 'test_2', label: 'Teste 2', selected: false },
      { value: 'test_3', label: 'Teste 3', selected: false },
    ];
    render(<Select options={options} label="Select options" key="input" />);
    const select = screen.getByTestId('select-section');
    expect(select).toHaveTextContent('Select options');
  });

  test('Should be show placeholde "Select option"', () => {
    const options: SelectOption[] = [
      { value: 'test_1', label: 'Teste 1', selected: false },
      { value: 'test_2', label: 'Teste 2', selected: false },
      { value: 'test_3', label: 'Teste 3', selected: false },
    ];
    render(
      <Select options={options} placeholder="Select option" key="input" />
    );
    const select = screen.getByPlaceholderText('Select option');
    expect(select).toBeTruthy();
  });

  test('Should be select option "test_1" and call onChange event once', () => {
    const mockedOnChange = jest.fn();
    const mockedOptions: SelectOption[] = [
      { value: 'test_1', label: 'Test 1', selected: false },
      { value: 'test_2', label: 'Test 2', selected: false },
      { value: 'test_3', label: 'Test 3', selected: false },
    ];
    render(
      <Select options={mockedOptions} onChange={mockedOnChange} key="input" />
    );
    expect(mockedOnChange).toHaveBeenCalledTimes(0);
    fireEvent.change(screen.getByTestId('select'), {
      target: { value: 'test_1' },
    });
    expect(mockedOnChange).toHaveBeenCalledTimes(1);
  });

  test('Should be select option "test_1 and test_2" and call onChange event twice', () => {
    const mockedOnChange = jest.fn();
    const mockedOptions: SelectOption[] = [
      { value: 'test_1', label: 'Test 1', selected: false },
      { value: 'test_2', label: 'Test 2', selected: false },
      { value: 'test_3', label: 'Test 3', selected: false },
    ];
    render(
      <Select options={mockedOptions} onChange={mockedOnChange} key="input" />
    );
    expect(mockedOnChange).toHaveBeenCalledTimes(0);
    fireEvent.change(screen.getByTestId('select'), {
      target: { value: 'test_1' },
    });
    fireEvent.change(screen.getByTestId('select'), {
      target: { value: 'test_2' },
    });
    expect(mockedOnChange).toHaveBeenCalledTimes(2);
  });

  test('Should be select option "test_1" and change event call object selected', () => {
    const mockedOnChange = jest.fn();
    const mockedOptions: SelectOption[] = [
      { value: 'test_1', label: 'Test 1', selected: false },
      { value: 'test_2', label: 'Test 2', selected: false },
      { value: 'test_3', label: 'Test 3', selected: false },
    ];
    render(
      <Select options={mockedOptions} onChange={mockedOnChange} key="input" />
    );
    fireEvent.change(screen.getByTestId('select'), {
      target: { value: 'test_1' },
    });
    expect(mockedOnChange).toHaveBeenCalledWith([
      { label: 'Test 1', value: 'test_1', selected: true },
    ]);
  });
});
