import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../config';
import type { Product } from '../types';

interface ProductsState {
  data: Product[];
  loading: boolean;
  error: null | string;
}

const initialState: ProductsState = {
  data: [],
  loading: false,
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    storeProducts: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchProductsAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch products.';
    });
  }
});

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProductsAsync',
  async (
    payload: { page?: string; limit?: string; search?: string },
    { dispatch }
  ) => {
    let params = ''
    if (payload.page) {
      params += `&page=${payload.page}`
    }
    if (payload.limit) {
      params += `&limit=${payload.limit}`
    }
    if (payload.search) {
      params += `&search=${payload.search}`
    }

    const response = await axios.get<Product[]>(
      `${config.API_ENDPOINT}/products?${params}`
    );
    dispatch(storeProducts(response.data));
  }
);

export const { storeProducts } = productsSlice.actions;

export default productsSlice.reducer;
