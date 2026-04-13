'use client';
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export default function Header() {
  const [ isScrolled, setIsScrolled ] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);

  const [style, setStyle] = useState({
    width: '100%',
    x: 0,
  });
  
  const waveVariants = {
    idle: {
      scaleX: 1,
    },
    active: {
      scaleX: 2,
    },
  };
  const controls = useAnimation();

  // const [style, setStyle] = useState({
  //   width: "100%",
  //   transform: "translateX(0px)",
  // });

  // const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
  // if (!navRef.current) return;

  // const rect = e.currentTarget.getBoundingClientRect();
  // const navRect = navRef.current.getBoundingClientRect();

  //   setStyle({
  //     width: `${rect.width}px`,
  //     transform: `translateX(${rect.left - navRect.left}px)`,
  //   });
  // };

  const handleHover = async (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (!navRef.current) return;

  const rect = e.currentTarget.getBoundingClientRect();
  const navRect = navRef.current.getBoundingClientRect();

  setStyle({
    width: `${rect.width}px`,
    x: rect.left - navRect.left,
  });

  // Sequential Animation
  await controls.start("active"); // stretched
  await controls.start("idle");   // returned
};

  const handleLeave = () => {
    setStyle({
      width: "100%",
      x: 0,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // If the scroll distance exceeds 10px, add a shadow
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // Remove Event Listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
  <header className=" text-text-secondary ">
    <div className={`flex fixed top-0 left-0 right-0 z-1 justify-start bg-bg-primary/80 backdrop-blur-md 
      ${ isScrolled ? 'shadow-(--my-shadowform)' : 'shadow-none'}
    `}>
      <nav ref={navRef} className="relative flex gap-10" >
        <Link href="/" 
          onMouseEnter = {handleHover} 
          onMouseLeave = {handleLeave}
          className="font-bold p-2 rounded-full">
            Nathan Shalamberidze
        </Link>
        <Link href="#projects" 
          onMouseEnter = {handleHover}
          onMouseLeave = {handleLeave}
          className="relative font-bold p-2 hover:bg-bg-secondary rounded-b-lg cursor-pointer">
            Projects
        </Link>
        <Link href="#skills"
          onMouseEnter = {handleHover}
          onMouseLeave={handleLeave}
          className="relative font-bold p-2 hover:bg-bg-secondary rounded-b-lg cursor-pointer">
            Skills
        </Link>
        <Link href="#contact"
          onMouseEnter = {handleHover}
          onMouseLeave={handleLeave} 
          className="relative font-bold p-2 hover:bg-bg-secondary rounded-b-lg cursor-pointer">
            Contact
        </Link>
      </nav>
      {/* <div className="nav-wave text-accent-pink" style={style}></div> */}
        <motion.div
          className="nav-wave"
          animate={controls}
          variants={waveVariants}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          style={{
            width: style.width,
            x: style.x,
          }}
        />
    </div>
  </header>
  );
}