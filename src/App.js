import { useState } from "react";
import styles from "./App.module.css";
import CreateInput from "./components/CreateInput";
import List from "./components/List";

function App() {
  const [toDos, setToDos] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>What should I do?</h1>
        <CreateInput toDos={toDos} setToDos={setToDos} />
        <List toDos={toDos} setToDos={setToDos} />
      </div>
    </div>
  );
}

export default App;
