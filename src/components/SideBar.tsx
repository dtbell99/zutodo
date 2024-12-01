import { motion } from "framer-motion";
import { useTodoStore } from "../Store";

export default function SideBar({
  sideBarWidth,
  marginLeft,
}: {
  sideBarWidth: number;
  marginLeft: string;
}) {
  const todoList = useTodoStore((state) => state.todoList);
  const addTodo = useTodoStore((state) => state.addTodo);
  const openTodo = useTodoStore((state) => state.openTodo);

  const loadTodo = (indx: number) => {
    openTodo(indx);
  };

  const add = () => {
    addTodo({
      id: new Date().getTime().toString(),
      title: "Update Title",
      content: "",
    });
  };

  const items = todoList.map((todo, indx) => {
    return (
      <div key={indx} onClick={() => loadTodo(indx)}>
        ID:
        <br /> {todo.id}
        <br />
        <br />
        Title:
        <br />
        {todo.title}
        <br />
        <br />
        Content:
        <br />
        {todo.content}
        <hr />
      </div>
    );
  });

  return (
    <motion.div
      className="SideBar"
      animate={{ width: sideBarWidth, marginLeft: marginLeft }}
    >
      <button onClick={add}>Add Todo</button>
      {items}
    </motion.div>
  );
}
