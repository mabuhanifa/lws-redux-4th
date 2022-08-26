import React from "react";
import { useSelector } from "react-redux";
import CompletedTodos from "./CompletedTodos";

const Completed = () => {
  const todos = useSelector((state) => state.todos);
  const filterByCompleted = (todo) => {
    return todo.completed === true;
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      <p className="my-5">Completed Tasks</p>
      {todos.filter(filterByCompleted).map((todo) => (
        <CompletedTodos todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Completed;
