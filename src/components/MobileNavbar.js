import NavItem from "./NavItem";
import HomeIcon from "../images/home.svg";
import AboutIcon from "../images/about.svg";
import ProjectsIcon from "../images/projects.svg";
import SkillsIcon from "../images/skills.svg";
import { StyledMobileNavbar } from "../styled-components/MobileNavbar.styled";
import hamburgerMenu from "../images/hamburger.svg";
import { useEffect, useRef, useState } from "react";
import { StyledMobileHeader } from "../styled-components/MobileHeader.styled";

function MobileNavbar() {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const element = useRef();
  const navRef = useRef();

  useEffect(() => {
    function handleClickEvent(e) {
      if (isDisplaying === false) return;
      if (e.target === element.current || e.currentTarget === element.current)
        return;
      if (e.target === navRef.current || e.currentTarget === navRef.current)
        return;
      setIsDisplaying(false);
    }

    window.addEventListener("click", handleClickEvent);

    return () => window.removeEventListener("click", handleClickEvent);
  }, [isDisplaying]);

  return (
    <>
      <StyledMobileHeader>
        <div>
          <a
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              fontSize: "1.5rem",
              fontWeight: "600",
              letterSpacing: "0.15rem",
            }}
            href="#home"
          >
            <p style={{ color: "#F4FFFD" }}>FREDRIK</p>
            <p style={{ color: "#ED254E" }}>B12</p>
          </a>
        </div>
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            width: "100vw",
            zIndex: 1,
            display: isDisplaying ? "block" : "none",
            visibility: isDisplaying ? "visible" : "hidden",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        ></div>
        <button
          onClick={() => setIsDisplaying(true)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            position: "fixed",
            top: 10,
            right: 10,
          }}
        >
          <img
            ref={element}
            style={{ width: "40px" }}
            src={hamburgerMenu}
            alt="menu"
          />
        </button>
      </StyledMobileHeader>

      <StyledMobileNavbar
        ref={navRef}
        style={{
          display: isDisplaying ? "flex" : "none",
          visibility: isDisplaying ? "visible" : "hidden",
        }}
      >
        <ul>
          <NavItem name="Home" src={HomeIcon} />
          <NavItem name="About" src={AboutIcon} />
          <NavItem name="Skills" src={SkillsIcon} />
          <NavItem name="Projects" src={ProjectsIcon} />
        </ul>
      </StyledMobileNavbar>
    </>
  );
}

export default MobileNavbar;
