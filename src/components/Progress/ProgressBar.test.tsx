import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('Component <ProgressBar />', () => {
  test('Should be apear text "50%"', () => {
    render(<ProgressBar valueMax={100} valueMin={0} valueNow={50} />);
    const progressBar = screen.getByTestId('progressBar');
    expect(progressBar).toHaveTextContent('50%');
  });

  test('Should be value min equals zero', () => {
    render(<ProgressBar valueMax={100} valueMin={0} valueNow={50} />);
    const progressBar = screen.getByTestId('progressBar');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
  });

  test('Should be value max equals 100', () => {
    render(<ProgressBar valueMax={100} valueMin={0} valueNow={50} />);
    const progressBar = screen.getByTestId('progressBar');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
  });

  test('Should be value now equals 50', () => {
    render(<ProgressBar valueMax={100} valueMin={0} valueNow={50} />);
    const progressBar = screen.getByTestId('progressBar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
  });
});
