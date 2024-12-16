import SideBar from "./components/SideBar";
import Content from "./components/Content";
import { useState } from "react";

export default function App() {
  const [sideBarWidth, setSideBarWidth] = useState<number>(200);
  const [sideBarMarginLeft, setSideBarMarginLeft] = useState<string>("0px");

  function hideShow(view: string) {
    if (view === "sidebar") {
      console.log("sidebar");
      setSideBarMarginLeft(sideBarWidth > 0 ? "-10px" : "0px");
      setSideBarWidth(sideBarWidth > 0 ? 0 : 200);
    }
  }

  return (
    <>
      <SideBar sideBarWidth={sideBarWidth} marginLeft={sideBarMarginLeft} />
      <Content hideShow={hideShow} />
    </>
  );
}
