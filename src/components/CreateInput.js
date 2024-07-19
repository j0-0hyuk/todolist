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

  const onResetClick = () => {
    if (window.confirm("할일들을 전부 삭제하시겠습니까?")) {
      setToDos([]);
    }
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
      <button style={{ backgroundColor: "#1885f2" }}>+</button>
      <button
        style={{ backgroundColor: "#d02929" }}
        type="button"
        onClick={onResetClick}
      >
        ↻
      </button>
    </form>
  );
}

export default CreateInput;
