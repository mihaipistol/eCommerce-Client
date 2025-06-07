import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '~/state/store';
import CommentsBox from './CommentsBox';
import { updateAsyncComment } from '~/state/slices/comments';
import { aw } from 'node_modules/react-router/dist/development/route-data-B9_30zbP';

describe('CommentsBox', () => {
  it('renders the comments box with a title', () => {
    render(
      <Provider store={store}>
        <CommentsBox />
      </Provider>
    );
    const titleElement = screen.getByText('Add a comment');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the comments box with a textarea', () => {
    render(
      <Provider store={store}>
        <CommentsBox />
      </Provider>
    );
    const textareaElement = screen.getByPlaceholderText('Add a comment...');
    expect(textareaElement).toBeInTheDocument();
  });

  it('renders the comments box with a submit button', () => {
    render(
      <Provider store={store}>
        <CommentsBox />
      </Provider>
    );
    const buttonElement = screen.getByRole('button', { name: 'Submit' });
    expect(buttonElement).toBeInTheDocument();
  });

  it('updates the textarea value when typing', () => {
    render(
      <Provider store={store}>
        <CommentsBox />
      </Provider>
    );
    const textareaElement = screen.getByPlaceholderText('Add a comment...');
    const testComment = 'This is a test comment';

    fireEvent.change(textareaElement, { target: { value: testComment } });

    expect((textareaElement as HTMLTextAreaElement).value).toBe(testComment);
  });

  it('clears the textarea after submitting a comment', async () => {
    render(
      <Provider store={store}>
        <CommentsBox />
      </Provider>
    );
    const textareaElement = screen.getByPlaceholderText('Add a comment...');
    const buttonElement = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(textareaElement, { target: { value: 'Test comment' } });
    fireEvent.click(buttonElement);

    expect((textareaElement as HTMLTextAreaElement).value).toBe('');
  });

  it('calls the handleSubmit function on form submission', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    render(
      <Provider store={store}>
        <CommentsBox />
      </Provider>
    );
    const textareaElement = screen.getByPlaceholderText('Add a comment...');
    const testComment = 'Test comment';
    const buttonElement = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(textareaElement, { target: { value: testComment } });
    fireEvent.click(buttonElement);

    expect(dispatchSpy).toHaveBeenCalled();
    dispatchSpy.mockRestore();
  });
});
