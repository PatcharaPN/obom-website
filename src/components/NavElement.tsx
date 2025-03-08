import React from "react";

type Props = {};

const NavElement = (props: Props) => {
  return (
    <ul className="text-white flex gap-2 justify-center items-center h-full text-2xl">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
};

export default NavElement;
