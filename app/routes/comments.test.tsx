import { render, screen } from '@testing-library/react';

describe('Comments Page', () => {
  it('renders CommentsBox and CommentsList components', () => {
    // Mock the components
    jest.mock('~/components/base/CommentsBox', () => () => (
      <div>CommentsBox</div>
    ));
    jest.mock('~/components/base/CommentsList', () => () => (
      <div>CommentsList</div>
    ));

    // Import the Page component after mocking
    const Page = require('./comments').default;

    render(<Page />);

    expect(screen.getByText('CommentsBox')).toBeInTheDocument();
    expect(screen.getByText('CommentsList')).toBeInTheDocument();
  });
});
