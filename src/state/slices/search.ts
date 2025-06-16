import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit';
import { config } from '../../config';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  tags: string[];
}

interface SearchState {
  suggestions: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  suggestions: [],
  loading: false,
  error: null
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.suggestions = action.payload;
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
