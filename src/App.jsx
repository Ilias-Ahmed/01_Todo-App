import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoList from "./components/TodoList";
import TodoItemsProvider from "./store/TodoItemsContext";

const App = () => {
  return (
    <TodoItemsProvider>
      <center>
        <AppName />
        <AddTodo />
        <TodoList />
      </center>
    </TodoItemsProvider>
  );
};

export default App;
