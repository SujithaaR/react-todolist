import { useEffect, useState } from "react"
import classes from './styles.module.css';
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";

function App() {

  const [todolist,setTodoList]=useState([]);
  const [loading,setLoading]=useState(false);
  const [errorMsg,setErrorMsg]=useState(null);
  const [tododetails,settododetails]=useState(null);
  const [opendialog,setopendialog]=useState(false);


  async function fetchListOfTodos() {
    try{
        setLoading(true);
        const apiResponse=await fetch('https://dummyjson.com/todos');
        const result=await apiResponse.json();
        // console.log(result);

        if(result?.todos && result?.todos?.length>0){
          setTodoList(result?.todos);
          setLoading(false);
          setErrorMsg('');
        }
        else{
          setTodoList([]);
          setLoading(false);
          setErrorMsg('');
        }
        
    }catch(error){
         console.log(error);
         setErrorMsg('some error occurred');
    }
  }

  async function fetchDetailsofCurrentTodo(getCurrentTodoId) {
    console.log(getCurrentTodoId);
    try{
      const apiResponse=await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`);
      const details = await apiResponse.json();
      console.log(details);
      if(details){
        settododetails(details);
        setopendialog(true);
      }else{
        settododetails(null)
        setopendialog(false);
      }
    }catch(error){
      console.log(error);
      
    }
  }

  useEffect(()=>{
        fetchListOfTodos();
  },[]);

  return (
    <>
      <div className={classes.mainWrapper}>
        <h1 className={classes.headerTitle}>Todo App with material UI</h1>
        <div className={classes.todolistWrapper}>
          {
            todolist && todolist.length>0?
            todolist.map(todoitem=><TodoItem fetchDetailsofCurrentTodo={fetchDetailsofCurrentTodo}item={todoitem}/>):null
          }
        </div>
        <TodoDetails
        settododetails={settododetails}
        setopendialog={setopendialog}
        opendialog={opendialog} tododetails={tododetails}/>
      </div>
    </>
  )
}

export default App
