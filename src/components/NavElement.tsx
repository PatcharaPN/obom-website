import React from "react";

type Props = {};

const NavElement = (props: Props) => {
  return (
    <ul className="text-white flex gap-9 justify-center items-center cursor-pointer h-full text-2xl">
      <li>Services</li>
      <li>Partner</li>
      <li>About</li>
      <li>Support</li>
    </ul>
  );
};

export default NavElement;
