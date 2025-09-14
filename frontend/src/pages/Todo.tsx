import { useEffect, useState } from "react";

type Todo = { id: number; text: string };

function Todo() {
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

export default Todo;
