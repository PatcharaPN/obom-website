import React from "react";
import NavElement from "./NavElement";
import Logo from "./Logo";
import LoginButton from "./LoginButton";
import LanguageChange from "./LanguageChange";

const Navbar = () => {
  return (
    <div className="bg-black h-20 flex items-center justify-between p-5">
      <Logo />
      <NavElement />
      <ul className="flex items-center gap-5">
        <LanguageChange />
        <LoginButton />
      </ul>
    </div>
  );
};

export default Navbar;
