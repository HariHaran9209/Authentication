import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavItem({ text, onClick }) {
  return (
    <div className="justify-center py-2 cursor-pointer" onClick={onClick}>
      {text}
    </div>
  );
}

function Navbar() {

  const navigate = useNavigate()

  const [navItems, setNavItems] = useState([
    { text: "Home", onClick: () => navigate('/') },
    { text: "About", onClick: () => navigate('/about') }
  ]);

  return (
    <div className="flex gap-5 justify-between items-center py-1.5 px-6 rounded-3xl backdrop-blur-[17.5px] bg-opacity-80 w-full max-w-full flex-wrap sm:flex-nowrap sm:py-4 sm:px-10 bg-[#ffffffff]">
      <div className="flex gap-2 justify-between items-center py-1.5 my-auto w-full sm:w-auto">
        <div className="my-auto cursor-pointer uppercase font-extrabold text-lg text-zinc-950" onClick={() => navigate('/')}>
          Auth App
        </div>
      </div>
      <nav className="flex sm:flex-row flex-col gap-5 justify-center items-center self-stretch my-auto text-base text-center text-neutral-900 font-light w-full sm:w-auto">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item.text} onClick={item.onClick} />
        ))}
      </nav>
      <button
        className="justify-center self-stretch sm:self-auto px-6 py-5 text-base leading-6 text-center text-white rounded-2xl bg-neutral-900 max-md:px-5 font-light w-full sm:w-auto cursor-pointer"
        onClick={() => navigate('/register')}
      >
        Register
      </button>
    </div>
  );
}

export default Navbar;
