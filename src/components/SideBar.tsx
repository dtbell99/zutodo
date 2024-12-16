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
  const addTodo = useTodoStore((state) => state.newTodo);
  const loadTodo = useTodoStore((state) => state.loadTodo);

  const openTodo = (indx: number) => {
    loadTodo(indx);
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
      <div
        key={indx}
        onClick={() => openTodo(indx)}
        style={{ cursor: "pointer" }}
      >
        {todo.title}
        <hr />
      </div>
    );
  });

  return (
    <motion.div
      className="SideBar"
      animate={{ width: sideBarWidth, marginLeft: marginLeft }}
      style={{ padding: "20px" }}
    >
      <button
        onClick={add}
        style={{
          marginBottom: "25px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        Add Todo
      </button>
      {items}
    </motion.div>
  );
}
