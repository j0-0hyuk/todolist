import ToDoListItem from "./ToDoListItem";

function ToDoList({ toDos, onCheckClick, onDeleteClick }) {
  return (
    <ul>
      {toDos.map((toDo, index) => (
        <li key={index} id={index}>
          <ToDoListItem
            text={toDo.text}
            checked={toDo.checked}
            onCheckClick={onCheckClick}
            onDeleteClick={onDeleteClick}
          />
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
