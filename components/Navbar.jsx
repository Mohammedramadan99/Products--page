import React, { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 50 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <nav className={`nav ${active ? "active" : ""}`}>
      <div className="container">
        <div className="logo">
          <span>products</span> page
        </div>
        {/* <ul className="links">
          <li className="link ">home</li>
          <li className="link active">shop</li>
          <li className="link ">about</li>
          <li className="link ">contact</li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;
