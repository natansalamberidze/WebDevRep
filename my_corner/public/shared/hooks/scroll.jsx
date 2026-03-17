'use client';
import { useEffect, useState } from "react";

const [ isScrolled, setIsScrolled ] = useState(false);

const HeaderScroll = () =>{
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

  
}

export default HeaderScroll