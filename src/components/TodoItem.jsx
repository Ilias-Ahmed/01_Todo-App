import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import { MdOutlineDeleteForever } from "react-icons/md";

const TodoItem = ({ todoDate, todoName }) => {
  const { deleteTodo } = useContext(TodoItemsContext);

  return (
    <li className="flex justify-between m-5 items-center border border-rounded-md bg-gray-800 rounded-md p-3">
      <p className="font-semibold text-white text-xl">{todoName}</p>
      <p className="text-green-500">{todoDate}</p>
      <button
        className="btn btn-outline btn-error"
        onClick={() => deleteTodo(todoName)}
      >
        <MdOutlineDeleteForever />
      </button>
    </li>
  );
};

export default TodoItem;
