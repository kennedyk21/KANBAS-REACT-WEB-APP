import JavaScript from "./JavaScript";
import { useSelector } from "react-redux";
import { LabState, TodoType } from "../store";
function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return (
    <div>
      <h2>Assignment 3</h2>
      <ul className="list-group">
        {todos.map((todo: TodoType) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      ...
    </div>
  );
}
  export default Assignment3;