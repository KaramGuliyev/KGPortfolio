import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BiBrain } from "react-icons/bi";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className="nav">
      <nav>
        <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "clicked" : ""}>
          <AiOutlineHome />
        </a>
        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "clicked" : ""}>
          <BiUserCircle />
        </a>
        <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "clicked" : ""}>
          <BiBrain />
        </a>
        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "clicked" : ""}>
          <MdMiscellaneousServices />
        </a>
        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "clicked" : ""}>
          <RiCustomerServiceLine />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
