import TodoItem from "../TodoItem/TodoItem";
import { ITodo } from "../../types/data";
interface ITodoList {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodosList: React.FC<ITodoList> = (props) => {
  const { items, toggleTodo, deleteTodo } = props;
  return (
    <div>
      {items.map((elem) => {
        return (
          <TodoItem
            key={elem.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            {...elem}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default TodosList;
