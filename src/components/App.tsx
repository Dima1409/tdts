import { useEffect, useState, useRef } from "react";
import { ITodo } from "../types/data";
import TodosList from "./TodoList/TodosList";

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addTodo = (): void => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          completed: false,
        },
      ]);
      setValue("");
    }
  };
  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((elem) => {
        if (elem.id !== id) {
          return elem;
        }
        return {
          ...elem,
          completed: !elem.completed,
        };
      })
    );
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div style={{display:'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto'}}>
      <div>Todo list</div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button type="submit">Add todo</button>
      </form>
      <TodosList
        items={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};
export default App;
