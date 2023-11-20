import { Link, Outlet } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import HomeOutlined from '@mui/icons-material/HomeOutlined';
import MenuBookOutlined from '@mui/icons-material/MenuBookOutlined';
import RestaurantMenuOutlined from '@mui/icons-material/RestaurantMenuOutlined';
import PersonOutline from '@mui/icons-material/PersonOutline';

import NavItem from "../components/NavItem";
import { HOME, MENU, ORDERS, AUTHENTICATION } from "../constants";

import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';


const Layout = () => {

  return (
    <>
      <Container maxWidth={false} disableGutters>

        <Grid container className="w-max-inherit">
          <AppBar position="fixed">
            <Toolbar disableGutters>
              <Grid className="restaurant-brand-cont" sm={12} lg={4}>
                <Link className="restaurant-brand w-fit flex mx-auto" to="/">
                  <img
                    className="max-w-[2.1rem] h-auto"
                    src="https://avatars.githubusercontent.com/u/22081424"
                    alt="Restaurant-Brand-Logo-Image"
                  />
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "2rem",
                      marginLeft: "1rem"
                    }}
                  >
                    Brand Name
                  </Typography>
                </Link>    
              </Grid>
              <Grid className="nav-cont fixed bottom-0 w-full bg-blue-600 lg:static" lg={12}>
                <nav>
                  <ul className="flex justify-evenly">
                    <NavItem
                      path={HOME.path}
                      icon={<HomeOutlined/>}
                      title={HOME.title}
                    />
                    <NavItem
                      path={MENU.path}
                      icon={<MenuBookOutlined/>}
                      title={MENU.title}
                    />
                    <NavItem
                      path={ORDERS.path}
                      icon={<RestaurantMenuOutlined/>}
                      title={ORDERS.title}
                    />
                    <NavItem
                      path={AUTHENTICATION.path}
                      icon={<PersonOutline/>}
                      title={AUTHENTICATION.title}
                    />
                  </ul>
                </nav>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>

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