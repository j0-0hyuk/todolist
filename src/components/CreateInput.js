import styles from "./CreateInput.module.css";

function CreateInput({ value, onFormSubmit, onValueChange }) {
  return (
    <form onSubmit={onFormSubmit}>
      <input
        className={styles.create_input}
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

export default CreateInput;
