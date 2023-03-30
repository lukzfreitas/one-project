import { render, screen } from '@testing-library/react';
import NavBar from './Navbar';
import { v4 as uuidv4 } from 'uuid';

describe('Component <Navbar />', () => {
  test('Should be appear title "Title Navbar"', () => {
    render(<NavBar title="Title Navbar" items={[]} />);
    const navbar = screen.getByTestId('title-navbar');
    expect(navbar).toHaveTextContent('Title Navbar');
  });

  test('Should be appear label item selected "Item Selected"', () => {
    render(
      <NavBar
        title=""
        items={[
          { key: uuidv4(), label: 'Item Selected', active: true },
          { key: uuidv4(), label: 'Item not selected', active: false },
        ]}
      />
    );
    const navbar = screen.getByTestId('nav-item-active');
    expect(navbar).toHaveTextContent('Item Selected');
  });

  test('Should be appear label item not selected "Item not selected"', () => {
    render(
      <NavBar
        title=""
        items={[
          { key: uuidv4(), label: 'Item Selected', active: true },
          { key: uuidv4(), label: 'Item not selected', active: false },
        ]}
      />
    );
    const navbar = screen.getByTestId('nav-item');
    expect(navbar).toHaveTextContent('Item not selected');
  });
});
