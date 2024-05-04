import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const index = state.findIndex((_, index) => index === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    editTask: (state, action) => {
      const index = action.payload.index;
      if (index !== -1) {
        state[index] = action.payload.newValue;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
