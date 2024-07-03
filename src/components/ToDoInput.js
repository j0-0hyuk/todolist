import styles from "./ToDoInput.module.css";

function ToDoInput({ value, onFormSubmit, onValueChange }) {
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="I should do..."
        value={value}
        onChange={onValueChange}
        required
      />
      <button className={styles.create_button}>+</button>
    </form>
  );
}

export default ToDoInput;
