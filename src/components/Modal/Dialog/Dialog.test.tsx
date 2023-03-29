import { render, screen } from '@testing-library/react';
import DialogBody from './DialogBody';
import DialogTitle from './DialogTitle';

describe('Component <Dialog />', () => {
  test('Should be appear title "Title Dialog"', () => {
    render(<DialogTitle children={<p>Title Dialog</p>}></DialogTitle>);
    expect(screen.getByTestId('title-dialog')).toHaveTextContent(
      'Title Dialog'
    );
  });

  test('Should be appear title "Dialog"', () => {
    render(<DialogBody children={<div>Hello world</div>} />);
    const dialog = screen.getByTestId('dialog-body');
    expect(dialog).toHaveTextContent('Hello world');
  });
});
