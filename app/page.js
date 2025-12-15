'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {

   const [isDarkMode, setIsDarkMode] = useState(true);
   const [mounted, setMounted] = useState(false);

    useEffect(()=>{
      setMounted(true);
      const shouldBeDark = localStorage.theme === 'dark' || (!('theme' in localStorage));
      setIsDarkMode(shouldBeDark);
      
      if(shouldBeDark){
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }else{
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
      }
    },[]);


   useEffect(()=>{
     if(!mounted) return;
     
     if(isDarkMode){
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
     }else{
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
     }
   },[isDarkMode, mounted])


  return (
       
       <>
       <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
       <Header isDarkMode={isDarkMode} />
       <About isDarkMode={isDarkMode} />
       <Services isDarkMode={isDarkMode} />
       <Work isDarkMode={isDarkMode} />
       <Contact isDarkMode={isDarkMode} />
       <Footer isDarkMode={isDarkMode} />

       </>
    
  );
}
