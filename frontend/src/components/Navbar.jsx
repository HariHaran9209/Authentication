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

//Bro, nee solluvala, like, oru maari irruku sometime, some sort of feeling comes and goes, i guess i can feel it nowadays, naa normala tha irrunthan, but suddenly my heart feels heavy, overthinking, overreacting, doing some shits without thinking of anything like now, i know you're busy(or maybe don't wanna talk with me) and i'm torturing but, i can't hold it back so long, like, soo many thoughts, naanu bangalore pona distract aaguvenu nenacha but naa apa okay va irruke, konja neram kalichu thiripiyu oru maariya irruku, but bro
//Bro, yaarachu unna vidu poirukangala, who's so close, both trusting that each of you won't go away but some day they go and you want it back so badly that you're ready to do anything to get back but you don't even know the reason.....!? Unnaku yaarum apdilam pannirukangala bro.....!? And what did you do to overcome, like move on from it.....!?