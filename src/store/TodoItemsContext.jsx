import { createContext, useReducer } from "react";

// Initial state with an empty list of todos
const initialTodoState = { todos: [] };

// Declaring the context to share todos and related functions
export const TodoItemsContext = createContext({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

// Reducer function to update state based on actions
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item.todoName !== action.payload),
      };
    default:
      return state; // Keep state unchanged for other actions
  }
};

// TodoProvider component to manage todo state
const TodoItemsProvider = ({ children }) => {
  // Use useReducer hook to manage state
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  // Destructure state for todos
  const { todos } = state;

  // Define functions to add and delete todos
  const addTodo = (todoName, dueDate) => {
    dispatch({ type: "ADD_TODO", payload: { todoName, dueDate } });
  };

  const deleteTodo = (todoName) => {
    dispatch({ type: "DELETE_TODO", payload: todoName });
  };

  // Provide todos and functions to the context
  return (
    <TodoItemsContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsProvider;
