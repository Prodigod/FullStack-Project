import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Faculty"> Faculty</NavLink>
          <NavLink to="/Departments"> Departments</NavLink>
          <NavLink to="/Register"> Register</NavLink>
          <NavLink to="/Login"> Login</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}