import { NavLink } from "react-router-dom";


const NavItem = ({ path, icon, title }) => {
  return (
    <li>
      <NavLink to={path}>
        <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
          {icon}
          <span>{title}</span>
        </div>
      </NavLink>
    </li>
  );
}

export default NavItem;