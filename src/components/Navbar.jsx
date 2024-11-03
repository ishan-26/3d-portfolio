  import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  let timer; // Declare timer for debouncing

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Manage navbar background color based on scroll position
      setScrolled(scrollTop > 100);

      // Control navbar visibility based on scroll direction
      if (scrollTop > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }
      setLastScrollY(scrollTop);

      // Debounce the active link update
      clearTimeout(timer);
      timer = setTimeout(() => {
        navLinks.forEach((nav) => {
          const section = document.getElementById(nav.id);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollTop >= sectionTop - sectionHeight / 3 && scrollTop < sectionTop + sectionHeight) {
              setActive(nav.title);
            }
          }
        });
      }, 100); // Adjust delay as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer); // Clear the timer on cleanup
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-transform duration-300 ${
        scrolled ? "bg-primary" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Uncomment the logo if needed */}
          {/* <img src={logo} alt='logo' className='px-0 w-12 h-12 object-contain' /> */}
        </Link>

           <ul className='list-none hidden sm:flex flex-row gap-10'>
  {navLinks.map((nav) => (
    <li
      key={nav.id}
      className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white
                  text-[18px] font-medium cursor-pointer`}
      onClick={() => setActive(nav.title)}
    >
      {nav.id === "resume" ? (
        <Link to="https://drive.google.com/file/d/1DYHw0PQtLtMfpqvgSq4bBiJHCW8t8HhY/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          {nav.title}
        </Link>
      ) : (
        <a href={`#${nav.id}`}>{nav.title}</a>
      )}
    </li>
  ))}
</ul>

        <div className='sm:hidden flex justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
