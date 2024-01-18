import { useGlobalContext } from "../../context/TasksContext";
import Task from "../task/Task";
import AddTask from "../addTask/AddTask";

function Tasks() {
    const {tasks, isOpen, handleForm} = useGlobalContext();

 

    return (
      <div className="container">
        <h2 className="m-5 text-center"> Tasks list</h2>
        <div className="m-3 text-center">

         {!isOpen && <button onClick={()=>{handleForm(true)}}>Add task</button>}

        </div>
        {isOpen?(<AddTask/>):(
            <ul className="list-group">
                {tasks.map((task)=>{
                
                return(<Task
                    key={task.id}
                    id={task.id}
                    title ={task.title}
                    desc = {task.description}
                    

                    />)
                }
                
                )}
               
            </ul>
        )}
      </div>
    );
  }
  
  export default Tasks;
  