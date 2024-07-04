import ToDoListItem from "./ToDoListItem";

function ToDoList({ toDos, setToDos, onCheckClick, onDeleteClick }) {
  return (
    <ul>
      {toDos.map((toDo, index) => (
        <li key={index} id={index}>
          <ToDoListItem
            id={index}
            text={toDo.text}
            checked={toDo.checked}
            toDos={toDos}
            setToDos={setToDos}
            onCheckClick={onCheckClick}
            onDeleteClick={onDeleteClick}
          />
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
