"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";
import { useState, useEffect } from "react";
import "../../app/public/styles/navbar.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <nav className={`navbar navbar-expand-lg position-fixed z-3 w-100 ${scrolling ? "bg-body-tertiary navbar-show" : "bg-transparent navbar-hide"}`}>
          <div className="container">
            <Link className="navbar-brand d-flex align-content-center " href={"/"}>
              <h3>
                <span>M</span>yAnimeList
              </h3>
            </Link>
            <InputSearch />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
