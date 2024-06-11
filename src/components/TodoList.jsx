import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoItemsContext);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todoDate={todo.dueDate}
          todoName={todo.todoName}
          key={todo.todoName}
        />
      ))}
    </ul>
  );
};

export default TodoList;
