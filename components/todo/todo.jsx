import React, { useEffect, useState } from 'react'
import styles from "./todo.module.css"
import image from "./del1.png"

const Todo = ({item,todoList,setTodoList,index, deleteTodo}) => {
  const[check,setCheck]=useState(item.completed)
  const[clear,setClear]=useState(item)
  
  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(todoList.map((element)=>{
      if(element.id==item.id){
        element.completed=check
      }
      return element})))
      
    setTodoList(todoList.map((element)=>{
      if(element.id==item.id){
        element.completed=check
      }
      return element
    }))
  },[check])

  

  return (
    <div className={styles.wrapperTodo}>
    <li className={styles.list}> <div className={styles.wrapperText} style={{textDecoration:item.completed?"line-through":"none"}}> <input className={styles.checkbox} type='checkbox' checked={check} onChange={()=>setCheck(!check)}/> {item.name} </div> <button className={styles.deleteBtn} onClick={deleteTodo}><img class="yt" src={image} /></button>
    </li></div>
  )
}
// добавить удаление туду. добавить кнопку в ли
export default Todo