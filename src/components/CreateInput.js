import styles from "./CreateInput.module.css";

function CreateInput({ value, onFormSubmit, onValueChange }) {
  return (
    <form className={styles.create_form} onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="I should do..."
        value={value}
        onChange={onValueChange}
        required
      />
      <button>+</button>
    </form>
  );
}

export default CreateInput;
