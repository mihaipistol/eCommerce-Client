import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../config';
import type { Product } from '../types';

interface SearchState {
  data: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  data: [],
  loading: false,
  error: null
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(searchProductsAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(searchProductsAsync.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(searchProductsAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to search for products.';
    });
  }
});

export const searchProductsAsync = createAsyncThunk(
  'search/searchProductsAsync',
  async (payload: string, { dispatch }) => {
    if (!payload) {
      dispatch(setProducts([]));
      return;
    }
    const response = await axios.get<Product[]>(
      `${config.API_ENDPOINT}/products?search=${payload}`
    );
    dispatch(setProducts(response.data));
  }
);

export const { setProducts } = searchSlice.actions;

export default searchSlice.reducer;
