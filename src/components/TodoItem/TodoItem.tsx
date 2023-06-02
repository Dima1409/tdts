import { ITodo } from "../../types/data";

interface ITodoItem extends ITodo {
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, completed, deleteTodo, toggleTodo } = props;

  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      ></input>

      <p style={{marginRight:'auto', marginLeft:'20px'}}>{title}</p>
      <button
        style={{
          border: "none",
          outline: "none",
          width: "30px",
          height: "30px",
        }}
        type="button"
        onClick={() => deleteTodo(id)}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
