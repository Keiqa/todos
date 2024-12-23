import Todo from "../todo/todo"
import styles from "./list.module.css"

const List = ({todoList,setTodoList}) => {
  const handleDelete = (id) => {
    localStorage.setItem("list",JSON.stringify(todoList.filter(item => item.id !== id)))
    setTodoList(todoList.filter(item => item.id !== id));
  };
  
  // не ПОНИМАЮ КАК РАБОТАЕТ ЭТА ФУНКЦИЯ ПРИЧЕМ ТУТ ВАЩЕ АЙДИ
  //НЕ ПОНИМАЮ ПОЧЕМУ ЕСЛИ УДАЛИТЬ В ДОЧЕРНЕМ ЭЛЕМЕНТЕ СТРЕЛОЧНУЮ ФУНКЦИЮ ТО НИЧЕГО НЕ РАБОТАЕТ
  return (
    <div className={styles.wrapperUl}>
      <ul className={styles.ull}>
      {todoList.map((item, index) => (
        
        <Todo index={index} item={item} todoList={todoList} setTodoList={setTodoList} key={index} deleteTodo={() => handleDelete(item.id)}  />
      ))}
      </ul>
    </div>
  )
  
}

export default List