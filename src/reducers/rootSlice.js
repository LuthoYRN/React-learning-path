import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1️⃣ Async Thunk to Fetch Users from API
export const fetchUsers = createAsyncThunk("cards/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json(); // Redux Toolkit handles promise resolution
});

const rootSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    loading: false,
    error: null,
  },
  reducers: {
    // 2️⃣ Reducer to delete a card
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.cards = action.payload.map((user) => ({
          id: user.id,
          title: user.name,
          body: user.email, // Using email as body text
        }));
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { deleteCard } = rootSlice.actions;
export default rootSlice.reducer;
