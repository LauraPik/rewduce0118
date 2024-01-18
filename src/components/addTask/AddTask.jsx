import { useGlobalContext } from "../../context/TasksContext";
import { useState } from "react";
import { useId } from "react";



function AddTask() {
    const idGenerator = useId()


    const {addTask, handleForm} = useGlobalContext();
    const [newTask, setNewTask] = useState({
        id:'',
        title:'',
        description:''
    })

    const handleChange = (event)=>{
        setNewTask(
        {
            ...newTask,
            [event.target.name]:event.target.value, id:idGenerator
        }
        )
    }

    console.log(idGenerator)

    const submitHandle = (event) =>{
        event.preventDefault();
        addTask(newTask)
        handleForm(false)
        
    }

    console.log(newTask)


    return (
      <form className="form" onSubmit={submitHandle}>
            <div className="form-group">
                <input type="text" name="title" placeholder="title"  onChange={handleChange} className="form-control"/>
            </div>
            <div className="form-group">
                <textarea placeholder="Description" name="description" onChange={handleChange} className="form-control"></textarea>
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Add</button>
            </div>
            
      </form>
    );
  }
  
  export default AddTask;
  