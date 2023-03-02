import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Location from "../pages/Location";
import Builds from "../pages/Builds";
import Houses from "../pages/Houses";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Nav from "../layout/Nav";

function Layout() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;
