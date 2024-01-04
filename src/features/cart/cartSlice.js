import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  //   {
  //     pizzaId: 13,
  //     name: "Mediterranean1",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  //   {
  //     pizzaId: 15,
  //     name: "Mediterranean4",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// redux selector helper funciton, start with get

const cart = (state) => state.cart.cart;
const username = (state) => state.user.username;

export const getCart = cart;
export const getUsername = username;

// reselect library
export const getCurrentQuantityById = (id) =>
  createSelector(
    cart,
    (cart) => cart.find((item) => item.pizzaId === id)?.quantity ?? 0,
  );

export const getTotalCartQuantity = createSelector(cart, (cart) =>
  cart.reduce((sum, item) => sum + item.quantity, 0),
);

export const getTotalCartPrice = createSelector(cart, (cart) => {
  return cart.reduce((sum, item) => sum + item.totalPrice, 0);
});
