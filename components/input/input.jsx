import React, { useState } from 'react'
import styles from './input.module.css'


const Input = ({todoList,setTodoList}) => {
    const [inputValue, setInputValue] = useState('');
    const saveTodo =(event)=>{ 
        const todoItem={
            id:new Date(),
            name:inputValue,
            date:new Date(),
            completed:false
        }
        if(event.key==="Enter"){
            //создать объект и запомнить в сет тудулист
            localStorage.setItem("list",JSON.stringify([...todoList,todoItem]))
            setTodoList([...todoList,todoItem])
            
        }
    }

  return (
    <div className={styles.wrapperInput}>
        <input placeholder="Введите todo" className={styles.inputTodo}   type="text" onKeyDown={(event)=>saveTodo(event)} value={inputValue} onChange={(event)=>setInputValue(event.target.value)} />
    </div>
  )
}

export default Input