
// du argumentai, busena ir veiksmas: prideti, salinti 
const TodoReducer = (state, action)=>{
    switch(action.type){
        case "Add task":
            return{
                ...state,
                tasks:[...state.tasks, action.payload]
            }
        case "Remove task":
            return{
                ...state,
                tasks: state.tasks.filter((task)=>task.id!==action.payload)//paspaudus ant id, kuri noresime istrinti
            }
        case "Open form":
            return{
                ...state,
                isOpen: action.payload
            }
        default:
            return state;
    }
}

export default TodoReducer