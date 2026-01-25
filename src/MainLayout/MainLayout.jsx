import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* Navbar here */}
      <Outlet />
      {/* Footer here */}
    </>
  );
};

export default MainLayout;
