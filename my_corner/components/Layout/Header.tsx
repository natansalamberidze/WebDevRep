'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [ isScrolled, setIsScrolled ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Если прокрутили больше 10px, добавляем тень
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // Очистка слушателя
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
  <header className="relative text-text-secondary">
    <div className={`flex fixed top-0 left-0 right-0 justify-start gap-10 
      ${ isScrolled ? 'transpatent shadow-md' : 'bg-transparent shadow-none'}
    `}>
      <Link href="/" className="font-bold p-2 pointed hover:bg-bg-secondary rounded-full">
        Nathan Shalamberidze
      </Link>
    <nav className="flex gap-4">
      <Link href="#projects" className="font-bold p-2 hover:bg-bg-secondary rounded-b-lg h-2">Projects</Link>
      <Link href="#skills" className="font-bold p-2 hover:bg-bg-secondary rounded-b-lg h-2">Skills</Link>
      <Link href="#contact" className="font-bold p-2 hover:bg-bg-secondary rounded-b-lg h-2">Contact</Link>
    </nav>
    </div>
  </header>
  );
}
