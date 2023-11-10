import { Link, Outlet } from "react-router-dom";

import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { HomeOutlined, MenuBookOutlined, RestaurantMenuOutlined, PersonOutline } from '@mui/icons-material';

import NavItem from "../components/NavItem";
import { HOME, MENU, YOUR_ORDERS, AUTHENTICATION } from "../constants";


const Layout = () => {

  return (
    <>
      <Container maxWidth={false} disableGutters>

        <Container className="max-w-inherit">
          <header>
            <div className="restaurant-brand">
              <Link href="/"><img src="/logo.png" alt="Restaurant Brand Logo"/></Link>
              <h1>Brand Name</h1>
            </div>
            <nav>
              <ul className="flex justify-evenly py-5">
                <NavItem
                  to={HOME.path}
                  icon={<HomeOutlined/>}
                  title={HOME.title}
                />

                <NavItem
                  to={MENU.path}
                  icon={<MenuBookOutlined/>}
                  title={MENU.title}
                />

                <NavItem
                  to={YOUR_ORDERS.path}
                  icon={<RestaurantMenuOutlined/>}
                  title={YOUR_ORDERS.title}
                />

                <NavItem
                  to={AUTHENTICATION.path}
                  icon={<PersonOutline/>}
                  title={AUTHENTICATION.title}
                />
              </ul>
            </nav>
          </header>
        </Container>

        <Container> 
          <main>
            <Outlet/>
          </main>
        </Container>

        <Container>
          <footer>

          </footer>
        </Container>

      </Container>
    </>
  );
}

export default Layout;