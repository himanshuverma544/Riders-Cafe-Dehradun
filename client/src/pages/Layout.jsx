import { Link as RouterLink, Outlet } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import SvgIcon from '@mui/material/SvgIcon';

import HomeOutlined from '@mui/icons-material/HomeOutlined';
import MenuBookOutlined from '@mui/icons-material/MenuBookOutlined';
import RestaurantMenuOutlined from '@mui/icons-material/RestaurantMenuOutlined';
import PersonOutline from '@mui/icons-material/PersonOutline';
import CallOutlined from "@mui/icons-material/CallOutlined";
import FmdGoodOutlined from "@mui/icons-material/FmdGoodOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import XIcon from '../assets/icons/XIcon.svg?react';


import NavItem from "../components/NavItem";
import RestaurantBrand from "../components/RestaurantBrand";
import { HOME, MENU, ORDERS, AUTHENTICATION } from "../constants";

import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';


const Layout = () => {

  return (
    <>
      <Container className="master-cont" maxWidth={false} disableGutters>

        <Grid className="header-cont w-max-inherit" container>
          <AppBar className="the-header" position="static">
            <Toolbar className="header-toolbar" disableGutters>
              <Grid className="restaurant-brand-cont" sm={12} lg={4}>
                <RestaurantBrand
                  logo="https://avatars.githubusercontent.com/u/22081424" 
                  name="Brand Name"
                  variant="h1"
                />
              </Grid>
              <Grid className="nav-cont fixed bottom-0 w-full bg-blue-600 lg:static" sm={12}>
                <nav>
                  <ul className="flex justify-evenly items-center">
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

        <Container className="main-cont" maxWidth={false} disableGutters> 
          <main>
            <Outlet/>
          </main>
        </Container>

        <Container className="footer-cont bg-blue-500" maxWidth={false} disableGutters>
          <footer className="the-footer py-3 mb-12 lg:mb-0">
						<Grid container>

							<Grid className="restaurant-brand flex justify-center bg-green-800" sm={12} md={4}>
                <RestaurantBrand 
                  logo="https://avatars.githubusercontent.com/u/22081424" 
                  name="Brand Name"
                  variant="h5"
                />	
							</Grid>

							<Grid className="contact-us flex flex-col justify-center items-center gap-2 text-center bg-orange-800" sm={12} md={4}>
								<Typography variant="h5">Contact Us</Typography>
                <Box className="contact-number">
								  <Link component={RouterLink} variant="body1" to="tel:+919410986033" color="#000" underline="none">
                    <CallOutlined htmlColor="#000"/>
                    +91 94109 86033
                  </Link>
                </Box>
                <Box className="address flex justify-center">
                  <Link className="flex" component={RouterLink} to="#" color="#000" underline="none">
                    <FmdGoodOutlined className="location-icon"/>
                    <Typography variant="body1">
                      252/9, Model Colony, Araghar,
                      Dehradun, Uttarakhand, 248001
                    </Typography>
                  </Link>
                </Box>
							</Grid>

							<Grid className="opening-hours flex flex-col justify-center items-center gap-2 text-center bg-yellow-700" sm={12} md={4}>
                <Typography variant="h5">Opening Hours</Typography>
                <Box className="timing">
                  <Typography variant="body1">
                    Monday – Friday
                    <br></br>
                    10:00 AM – 11:00 PM
                  </Typography>
                </Box>
							</Grid>

							<Divider/>

							<Grid className="sub-footer grid md:grid-cols-3 text-center" sm={12}>
                <Box className="developer-details flex flex-col justify-center bg-pink-800">
                  <Typography  variant="h6" fontSize="1rem">
                    Meet the Developer 
                  </Typography>
                  <Link
                    component={RouterLink}
                    variant="body2" 
                    to="https://linktr.ee/himanshuverma544" 
                    target="_blank"
                    color="#000"
                    underline="none"
                  >
                    Himanshu Verma
                  </Link>
                </Box>
                <Box className="legal-details flex flex-col justify-center bg-red-700">
                  <Typography variant="body2">
                    © 2023 – {new Date().getFullYear()}
                    <Link
                      component={RouterLink}
                      to="https://linktr.ee/himanshuverma544" 
                      target="_blank"
                      color="#000"
                      underline="none"
                    > Himanshu Verma
                    </Link>. 
                    All rights reserved.
                  </Typography>
                  <Link
                    component={RouterLink}
                    variant="body2"
                    to="#"
                    target="_blank"
                    color="#000"
                    underline="none"
                  >
                    Terms and Conditions
                  </Link>
                </Box>
                <Box className="social-links order-first md:order-last flex justify-center items-center gap-3 bg-white">
                  <Link component={RouterLink} to="https://www.instagram.com" target="_blank" color="#000">
                    <InstagramIcon/>
                  </Link>
                  <Link component={RouterLink} to="https://www.facebook.com" target="_blank" color="#000">
                    <FacebookOutlined/>
                  </Link>
                  <Link component={RouterLink} to="https://www.twitter.com" target="_blank" color="#000">
                    <SvgIcon component={XIcon} inheritViewBox/>
                  </Link>
                </Box>
							</Grid>

						</Grid>
          </footer>
        </Container>
      </Container>
    </>
  );
}

export default Layout;