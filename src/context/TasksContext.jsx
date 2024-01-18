import React, { useContext, useReducer } from "react";
import { newTask, deleteTask, openForm } from "../actions/TodoActions";
import TodoReducer from "../reducers/TodoReducer";


const AppContext = React.createContext(); // sukuria context'a

const initialState = {
    tasks:[
        {
        id:1,
        title: "Task task 1",
        description: "Test task 1 desc"
    },
    {
        id:2,
        title: "Task task 2",
        description: "Test task 2 desc"
    },
    {
        id:3,
        title: "Task task 3",
        description: "Test task 3 desc"
    }
    
],
isOpen: false

}




//Tiekejas yra children
const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(TodoReducer, initialState)
    const addTask =(data)=>{
        dispatch(newTask(data))
    }

    const handleForm = (formStatus)=>{
        dispatch(openForm(formStatus))
    }

    const removeTask = (id)=>{
        console.log(id)
        dispatch(deleteTask(id))
    }
    return(
        <AppContext.Provider value={{
            ...state,
            addTask,
            handleForm,
            removeTask
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}