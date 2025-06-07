import { render, screen } from '@testing-library/react';
import Card from '~/components/base/old/card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom class names', () => {
    render(<Card className='custom-class'>Test Content</Card>);
    const cardElement = screen.getByText('Test Content').closest('div');
    expect(cardElement).toMatchSnapshot();
  });
});
