import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <Navbar darkMode={darkMode}
      setDarkMode={setDarkMode}></Navbar>
      <Outlet />
      {/* Footer here */}
    </div>
  );
};

export default MainLayout;
