import { Outlet, Link } from "react-router-dom";
import style from'./Header.module.css';

function Header() {
  return (
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Blogs</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Header;