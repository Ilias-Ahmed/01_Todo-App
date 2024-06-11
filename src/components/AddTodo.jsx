import { useContext, useRef } from "react";
import { MdAddTask } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItemsContext";
const AddTodo = () => {
  const textRef = useRef();
  const dateRef = useRef();
  const { addTodo } = useContext(TodoItemsContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const todoName = textRef.current.value;
    const dueDate = dateRef.current.value;
    addTodo(todoName, dueDate);
    textRef.current.value = "";
    dateRef.current.value = "";
  };
  return (
    <form
      className="flex items-center justify-center m-5"
      onSubmit={handleOnSubmit}
    >
      <input
        type="text"
        name=""
        id=""
        ref={textRef}
        placeholder="Add Todo Here.."
        className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="date"
        name=""
        id=""
        ref={dateRef}
        className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button className="btn btn-outline btn-success text-xl">
        <MdAddTask />
      </button>
    </form>
  );
};

export default AddTodo;
