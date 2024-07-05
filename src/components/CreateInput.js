import { useState } from "react";
import styles from "./CreateInput.module.css";

function CreateInput({ toDos, setToDos }) {
  const [value, setValue] = useState("");

  const onValueChange = (e) => {
    setValue(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    setToDos([
      ...toDos,
      {
        text: value,
        checked: false,
      },
    ]);
    setValue("");
  };

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
