import { NavLink } from "react-router-dom";

import Box from "@mui/material/Box";


const NavItem = ({ path, icon, title }) => {
  return (
    <li>
      <NavLink to={path}>
        <Box className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
          {icon}
          <Box component="span">{title}</Box>
        </Box>
      </NavLink>
    </li>
  );
}

export default NavItem;