import React from "react";
import Styles from "./-Navbar.module.css";
import { RiCalendarTodoFill } from "react-icons/ri";

const Logo = () => {
  return (
    <div className={Styles.logoBlock}>
      <h1>
        <span className={Styles.icon}>
          <RiCalendarTodoFill />
        </span>
        <span>TODO APP</span>
      </h1>
    </div>
  );
};

export default Logo;
