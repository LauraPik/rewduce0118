import { useGlobalContext } from "../../context/TasksContext";
import { useState } from "react";

function Task(props) {
    const { removeTask } = useGlobalContext();
    console.log(props)

    return (
      <>
      <li className="d-flex justify-content-between list-group-item" onClick={()=>removeTask(props.id)} >{props.title}:{props.desc}<button className="btn btn-danger">Salinti</button></li>
      </>
       
    
    );
  }
  
  export default Task;
  