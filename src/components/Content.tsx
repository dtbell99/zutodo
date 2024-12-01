import { LayoutSidebar } from "react-bootstrap-icons";
import TodoEditor from "./TodoEditor";
import { useTodoStore } from "../Store";

export default function Content({ hideShow }: { hideShow: Function }) {
  const todo = useTodoStore((state) => state.todo);

  return (
    <div className="Content">
      <div className="ContentMenuBar">
        <div>
          <LayoutSidebar
            cursor="pointer"
            width={32}
            height={32}
            style={{ marginLeft: "15px", marginTop: "5px" }}
            onClick={() => hideShow("sidebar")}
          />
        </div>
        <div style={{ flexGrow: 2, textAlign: "center" }}>
          Zu-Todo {todo.id !== "0" && <>{todo.id}</>}
        </div>
        {/* <div>
          <LayoutSidebarReverse
            cursor="pointer"
            width={32}
            height={32}
            style={{ marginRight: "15px", marginTop: "5px" }}
            onClick={() => hideShow("detail")}
          />
        </div> */}
      </div>
      <div className="ContentWindow">
        <TodoEditor />
      </div>
    </div>
  );
}
