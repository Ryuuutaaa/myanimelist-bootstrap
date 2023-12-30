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
      <div>
        <nav
          className={`navbar navbar-expand-lg position-fixed z-3 w-100 ${
            scrolling
              ? "bg-body-tertiary navbar-show"
              : "bg-transparent navbar-hide"
          }`}
        >
          <div className="container">
            <Link
              className="navbar-brand d-flex align-content-center "
              href={"/"}
            >
              <h3>
                <span>M</span>yAnimeList
              </h3>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <InputSearch />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
