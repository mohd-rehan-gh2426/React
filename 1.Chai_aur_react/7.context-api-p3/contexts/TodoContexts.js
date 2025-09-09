import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos : [{}],
    addTodo : (Todo) => {},
    deleteTodo : (id) => {},
    updateTodo : (id,Todo) => {},
    toggleComplete : (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider