import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Faculty"> Faculty</NavLink>
          <NavLink to="/Departments"> Faculty</NavLink>
          <NavLink to="/Register"> Faculty</NavLink>
          <NavLink to="/Login"> Faculty</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}