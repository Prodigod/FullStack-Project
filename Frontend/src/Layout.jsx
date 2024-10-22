import { NavLink, Outlet } from "react-router-dom";
import './layout.css'
export default function Layout() {
  return (
    <>
      <header>
      <div className="banner">
      <NavLink to="/">
    <img src="/images/logo.jpg" alt="Banner"/>
    </NavLink>
    </div>
      <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Faculty">Faculty</NavLink>
          <NavLink to="/Departments">Departments</NavLink>
          <NavLink to="/Register">Register</NavLink>
          <NavLink to="/Login"> Login</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}