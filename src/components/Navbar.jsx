import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      const scrollPos = window.scrollY + 150;
      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(section.getAttribute("id"));
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = ["home", "about", "projects", "skills", "contact"];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">
          <span>SIDDHU</span>.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={active === item ? "active" : ""}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mobile-menu">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={active === item ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
