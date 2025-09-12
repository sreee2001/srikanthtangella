import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AboutMe from "./pages/AboutMe";

type Todo = { id: number; text: string };

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  // Fetch todos
  useEffect(() => {
    fetch("http://localhost:3000/api/todos")
      .then((res) => res.json())
      .then(setTodos);
  }, []);

  // Add todo
  const addTodo = async () => {
    const res = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    if (res.ok) {
      const newTodo = await res.json();
      setTodos((todos) => [...todos, newTodo]);
      setInput("");
    }
  };

  // Delete todo
  const deleteTodo = async (id: number) => {
    await fetch(`http://localhost:3000/api/todos/${id}`, { method: "DELETE" });
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <AboutMe />
      <div>
        <h1>Todo List</h1>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}{" "}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
