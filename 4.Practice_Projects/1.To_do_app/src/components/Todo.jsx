import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoItem = () => {
    const item = {
      id: crypto.randomUUID(),
      text: input,
      completed: false,
    };
    if (item.text.trim() === "") {
      alert("Todo cannot be empty!");
      return;
    }
    setTodoList((prev) => [...prev, item]);
    setInput("");
  };

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };

  const deleteTodoItem = (id) => {
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Add todos"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2"
        />
        <button
          className="ml-auto bg-green-500 text-white px-2 rounded"
          onClick={() => addTodoItem()}
        >
          Add
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {todoList.map((t) => (
          <li className="flex items-center gap-2" key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />
            <span className={t.completed ? "line-through" : ""}>{t.text}</span>
            <button
              className="ml-auto bg-red-500 text-white px-2 rounded"
              onClick={() => deleteTodoItem(t.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
