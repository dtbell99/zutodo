import { FormLabel } from "react-bootstrap";
import { useTodoStore } from "../Store";

export default function TodoEditor() {
  const todo = useTodoStore((state) => state.todo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const updateTitle = (val: string) => {
    updateTodo({ id: todo.id, title: val });
  };

  const updateContent = (val: string) => {
    updateTodo({ id: todo.id, content: val });
  };

  return (
    <div>
      {todo.id !== "0" && (
        <>
          <FormLabel>Title</FormLabel>
          <input
            type="text"
            value={todo.title}
            onChange={(e) => updateTitle(e.target.value)}
            className="form-control"
          />
          <FormLabel>Content</FormLabel>
          <textarea
            value={todo.content}
            onChange={(e) => updateContent(e.target.value)}
            className="form-control"
          />
        </>
      )}
    </div>
  );
}
