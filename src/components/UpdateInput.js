import { useState } from "react";

function UpdateInput({ id, text, checked, toDos, setToDos, setUpInput }) {
  const [value, setValue] = useState(text);

  const onValueChange = (e) => {
    setValue(e.target.value);
  };

  const onUpdateSubmit = (e) => {
    e.preventDefault();
    setToDos(
      toDos.map((toDo, index) => {
        return index === id ? { text: value, checked: checked } : toDo;
      })
    );
    setUpInput(false);
  };
  return (
    <>
      <form onSubmit={onUpdateSubmit}>
        <input type="text" value={value} onChange={onValueChange} />
        <button>Update</button>
      </form>
    </>
  );
}

export default UpdateInput;
