import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { Link } from 'react-scroll';  // Import from react-scroll

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${!isTop ? "navbar-white" : "navbar-transparent"}`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={import.meta.env.VITE_PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {repos.show && (
            <Link
              to="projects"
              smooth={true}
              duration={200}
              offset={-70}
              className="nav-item"
              activeClass="active-link"
            >
              Projects
            </Link>
          )}
          <a
            className="nav-item"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
          {about.show && (
            <Link
              to="aboutme"
              smooth={true}
              duration={200}
              offset={-70}
              className="nav-item"
              activeClass="active-link"
            >
              About
            </Link>
          )}
          {skills.show && (
            <Link
              to="skills"
              smooth={true}
              duration={200}
              offset={-70}
              className="nav-item"
              activeClass="active-link"
            >
              Skills
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
