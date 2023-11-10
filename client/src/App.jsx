import './App.css';

import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import YourOrders from "./pages/YourOrders";
import Authentication from "./pages/Authentication";
import Page404 from "./pages/Page404";

import { HOME, MENU, YOUR_ORDERS, AUTHENTICATION, PAGE_404 } from "./constants";


function App() {

  return (
    <HashRouter basename=''>
      <Routes>
        <Route path={HOME.path} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={MENU.path} element={<Menu/>}/>
          <Route path={YOUR_ORDERS.path} element={<YourOrders/>}/>
          <Route path={AUTHENTICATION.path} element={<Authentication/>}/>
          <Route path={PAGE_404.path} element={<Page404/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
