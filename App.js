import logo from './logo.svg';
import './App.css';
import Input from './components/input/input';
import { use, useEffect, useState } from 'react';
import List from './components/list/list';

function App() {    
  const [todoList,setTodoList] = useState([])
  
  useEffect(()=>{
    
  },[todoList])

  useEffect(()=>{
    const todoListFromLocalStorage=JSON.parse(localStorage.getItem("list"))
    setTodoList(todoListFromLocalStorage??[])
  },[])
  
  return (
    <div className="App">
      <h1>Todo</h1>
      <Input todoList={todoList} setTodoList={setTodoList}/>
      <List todoList={todoList} setTodoList={setTodoList} />

    </div>
  );
}
//timeStamp у туду (время когда добавил ее), ключ был ли выполнено туду,вывести список туду
export default App;
