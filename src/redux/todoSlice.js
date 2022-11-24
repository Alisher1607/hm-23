const { createSlice } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };

      state.todos.push(newTodo);
    },

    toggleComplete: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );

      state.todos[index].completed = action.payload.completed;
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
