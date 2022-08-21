
import React,{ useState } from "react";


function TaskList(){
    const [todoInput, setTodoInput] = useState("");
    const [todos, setTodos] = useState([
        {
            todo:"Code a website!",
            complete: true,
            id:1
        },
        {
            todo:"Make videos!",
            complete: false,
            id:2
        },
        {
            todo:"Make a todo list!",
            complete: false,
            id:3
        }
    ]);

    function handleAdd(){
        if(todoInput.length > 1){
            setTodos([...todos, {todo:todoInput, complete: false} ]);
        }
        
    }

    function handleTodoClick(e, index){
        switch(e.detail){
            case 1:{
                const newArr = []
                todos.forEach((item,indexw)=>{
                    if(index === indexw){
                        newArr.push({
                            todo:item.todo,
                            complete: !item.complete
                        })
                    }else{
                        newArr.push(item)
                    }
                })

                setTodos(newArr)
                break;
            }
            case 2:{
                setTodos(todos.filter((item,indexa)=> indexa !== index))
                break;
            }
            default:{
                break;
            }
        }
    }

    return(
        <div className='task-list'>
            <h1>Tada.list</h1>
            <div className='input-tasks'>
                <input onChange={e=> setTodoInput(e.target.value)}  className='task-input-box' type="text" placeholder="enter a task" />
                <button onClick={()=> handleAdd()} className='task-add-button'>add task</button>
            </div>
            <div>
            {todos.map((item,index) =>(
                <div style={{background: item.complete ? "red" : null}} className="todo-item-container" onClick={e=> handleTodoClick(e, index)}>
                    <h2 style={{textDecoration: item.complete ? "line-through" : "none"}} className="todo-item">{item.todo}</h2>
                 

                </div>
            )

            )}
             </div>

       
        </div>
    )
}

export default TaskList;