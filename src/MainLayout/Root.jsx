import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
