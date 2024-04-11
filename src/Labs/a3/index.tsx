import JavaScript from "./JavaScript";
import { useSelector } from "react-redux";
import { LabState, TodoType } from "../store";
import Styles from "./Styles";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import PathParameters from "./routing/PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Highlight from "./Highlight";
import Add from "./Add";
function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return (
    <div>
      <h2>Assignment 3</h2>
      <JavaScript/>
      <Styles />
      <Classes />
      <ConditionalOutput />
      <PathParameters />
      <TodoItem />
      <TodoList />
      <Add a={3} b={4} />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>

      <ul className="list-group">
        {todos.map((todo: TodoType) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
  export default Assignment3;