import React from 'react';
import './style.css';

export const App = () =>{

    var [todo,setTodo] = React.useState([])
    var [text,setText] = React.useState("")
    const addItem = () => {
        if (text ==="")
        alert("Enter a valid task")
        else{
        setTodo(todo.concat([text]))
    }
        setText("")
        
    }

    const updItem = (index) => {
       
        setTodo(todo.map((item,idx) => {if ( idx === index)     
          
           { item = [text]}
           else
           item = item;
           return item;

            
        }))
        setText("")
         console.log(todo) 
    }
    const delItem = (index) => {
 
            
        setTodo(todo.filter(item => todo.indexOf(item) !== index));                
        
        console.log(todo)
    }

    return(
        <div>
            <h1 className = "head"> Good Morning, your tasks to accomplish!</h1>
            <input id =  "txt" type = 'text' className = "txt" value = {text} onChange = {(event) => setText(event.target.value)}/>
             <button className = "Add" onClick = {addItem}>Add Task To Do</button>

            
               { todo.map((item,index) => (
                <div key = {index} >
                <h3 className = "txt">{item}</h3>
             
                <button className = "upd" onClick = {() =>
                {
                    updItem(index)
                    }
                }>Update</button>
                   <button className = "upd" onClick = {() =>
                {
                    delItem(index)
                    }
                }>Delete</button>


                </div>
                 ))                 
                 
                 }
    
        </div>
   
        )
    }