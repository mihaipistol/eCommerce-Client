import {
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit';

interface ProductState {
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

interface ProductsState {
  search: ProductState[];

  loading: boolean;
  error: null | string;
}

const initialState: ProductsState = {
  search: [],
  loading: false,
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductState>) => {
      state.search.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<{ id: number }>) => {
      const idToRemove = action.payload.id;
      state.search = state.search.filter(
        (product) => product.id !== idToRemove
      );
    },
    updateProduct: (state, action: PayloadAction<ProductState>) => {
      const updatedProduct = action.payload;
      const index = state.search.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (index !== -1) {
        state.search[index] = updatedProduct;
      }
    },
    searchProducts: (state, action: PayloadAction<ProductState[]>) => {
      state.search = action.payload;
    }
  }
});

export const { addProduct, removeProduct, updateProduct, searchProducts } =
  productsSlice.actions;
export default productsSlice.reducer;
