import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../config';
import type { Product } from '../types';

interface ProductState {
  data: Product | null;
  loading: boolean;
  error: null | string;
}

const initialState: ProductState = {
  data: null,
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    storeProduct: (state, action: PayloadAction<Product>) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to query product.';
      });
  }
});

export const fetchProductAsync = createAsyncThunk(
  'product/fetchProductAsync',
  async (payload: string, { dispatch }) => {
    const response = await axios.get<Product>(
      `${config.API_ENDPOINT}/products/${payload}`
    );
    dispatch(storeProduct(response.data));
  }
);

export const { storeProduct } = productSlice.actions;
export default productSlice.reducer;
