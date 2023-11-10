import './App.css';

import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Authentication from "./pages/Authentication";
import Page404 from "./pages/Page404";

import { HOME, MENU, ORDERS, AUTHENTICATION, PAGE_404 } from "./constants";


function App() {

  return (
    <HashRouter basename=''>
      <Routes>
        <Route path={HOME.path} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={MENU.path} element={<Menu/>}/>
          <Route path={ORDERS.path} element={<Orders/>}/>
          <Route path={AUTHENTICATION.path} element={<Authentication/>}/>
          <Route path={PAGE_404.path} element={<Page404/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
