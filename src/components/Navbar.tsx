import React from "react";
import NavElement from "./NavElement";
import Logo from "./Logo";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <div className="bg-blue-900 h-20 flex items-center justify-between p-5">
      <Logo />
      <NavElement />
      <LoginButton />
    </div>
  );
};

export default Navbar;
