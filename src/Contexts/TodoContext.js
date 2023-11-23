/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todoMsg: "This is a comment",
            completed: false,
        }
    ],
    addTodo:(todoMsg)=>{},
    updateTodo:(id,todoMsg)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

});

export const useTodo = ()=>{
    return useContext(TodoContext);
}
export const TodoProvider =  TodoContext.Provider;