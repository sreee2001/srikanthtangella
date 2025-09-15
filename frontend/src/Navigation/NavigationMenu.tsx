import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { type NavigationMenuProps } from "./NavigationMenu.types";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Todo from "../pages/Todo";

const NavigationMenu: React.FC<NavigationMenuProps> = ({ menu }) => {
  return (
    <BrowserRouter>
      <nav className="nav-menu">
        <ul>
          {menu.map((item) => (
            <li key={item.name}>
              <Link className="nav-link" to={item.url}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationMenu;
