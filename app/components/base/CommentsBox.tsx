import { connect, useDispatch, useSelector } from 'react-redux';
import { updateAsyncComment, updateComment } from '~/state/slices/comments';
import { AppDispatch, RootState } from '~/state/store';

function CommentsBox() {
  const dispach = useDispatch<AppDispatch>();
  const comment = useSelector((state: RootState) => {
    console.log('state', state);
    return state.comments.comments[0];
  });

  console.log('comments', comment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispach(updateAsyncComment({ id: comment.id, text: comment.text }));
  };

  console.log('comment', comment);
  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea
        className='border-amber-500 border-2 rounded-lg w-300px h-100px p-2 resize'
        placeholder='Add a comment...'
        value={comment.text}
        onChange={(e) => {
          dispach(updateComment({ id: comment.id, text: e.target.value }));
        }}
      />
      <div>
        <button className='btn-primary' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentsBox;
