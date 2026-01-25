import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      {/* Footer here */}
    </div>
  );
};

export default MainLayout;
