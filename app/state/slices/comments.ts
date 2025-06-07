import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentState {
  id: number;
  text: string;
  date: string; // ISO string format for date
}

interface CommentsState {
  comments: CommentState[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  comments: [
    {
      id: 1,
      text: 'This is the first comment',
      date: new Date('2023-10-01T12:00:00Z').toISOString(),
    },
    {
      id: 2,
      text: 'This is the second comment',
      date: new Date('2023-10-02T14:30:00Z').toISOString(),
    },
    {
      id: 3,
      text: 'This is the third comment',
      date: new Date('2023-10-03T16:45:00Z').toISOString(),
    },
  ],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<{ text: string }>) => {
      const newComment: CommentState = {
        id: state.comments.length + 1,
        text: action.payload.text,
        date: new Date().toISOString(),
      };
      state.comments.push(newComment);
    },
    removeComment: (state, action: PayloadAction<{ id: number }>) => {
      const idToRemove = action.payload.id;
      state.comments = state.comments.filter(
        (comment) => comment.id !== idToRemove
      );
    },
    updateComment: (
      state,
      action: PayloadAction<{ id: number; text: string }>
    ) => {
      const { id, text } = action.payload;
      const commentToUpdate = state.comments.find(
        (comment) => comment.id === id
      );
      if (commentToUpdate) {
        commentToUpdate.text = text;
        commentToUpdate.date = new Date().toISOString(); // Update date to current time
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateAsyncComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAsyncComment.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateAsyncComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update comment';
      });
  },
});

export const updateAsyncComment = createAsyncThunk(
  'comments/updateAsyncComment',
  async (payload: { id: number; text: string }, { dispatch }) => {
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(updateComment(payload));
  }
);

export const { addComment, removeComment, updateComment } =
  commentsSlice.actions;

export default commentsSlice.reducer;
