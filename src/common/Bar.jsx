import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

import { Icon } from './Icon'

export function Bar() {

// Show/Hide bar on Mobile
const sidebarRef = useRef(null);

function openSidebar() {
  sidebarRef.current.style.width = "80%";
}

function closeSidebar() {
  sidebarRef.current.style.width = 0;
}

// Focus on selected Nav Item
const [focusedBarItem, setfocusedBarItem] = useState("/");

function changefocusedBarItem(path) {
  setfocusedBarItem(path);
}

    return (
    <>
      <nav className="bar-container">
          <ul>
            <li><Link 
                  className={focusedBarItem === "/" ? "focused-bar-item" : ""}
                  to="/" 
                  onClick={() => {changefocusedBarItem("/")}}
                >Sobre mí</Link>
            </li>
            <li><Link
                  className={focusedBarItem === "proj" ? "focused-bar-item" : ""}
                  to="/projects" 
                  onClick={() => {changefocusedBarItem("proj")}}
                >Experiencia y Proyectos</Link>
            </li>
            <li><Link
                  className={focusedBarItem === "ski" ? "focused-bar-item" : ""}
                  to="/skills" 
                  onClick={() => {changefocusedBarItem("ski")}}
                >Skills</Link>
            </li>
          </ul>
      </nav>
      <nav 
        className="sidebar-mobile-open-btn-container"
        onClick={openSidebar}
      >
        <Icon icon="fa-solid fa-bars" size="2x"/>
      </nav>

      <nav className="sidebar-mobile-container" ref={sidebarRef}>
        <div 
          className="sidebar-mobile-close-btn"
          onClick={closeSidebar}>
          <Icon icon="fa-solid fa-x" size="xl"/>
        </div>
        <div className="sidebar-mobile-link-container">
          <Link 
            className={focusedBarItem === "/" ? "focused-bar-item" : ""}
            to="/" 
            onClick={() => {changefocusedBarItem("/"); closeSidebar()}}
          >Sobre mí
          </Link>
          <Link
            className={focusedBarItem === "proj" ? "focused-bar-item" : ""}
            to="/projects" 
            onClick={() => {changefocusedBarItem("proj"); closeSidebar()}}
          >Experiencia y Proyectos
          </Link>
          <Link
              className={focusedBarItem === "ski" ? "focused-bar-item" : ""}
              to="/skills" 
              onClick={() => {changefocusedBarItem("ski"); closeSidebar()}}
            >Skills
          </Link>
        </div>
      </nav>
    </>
    );
}