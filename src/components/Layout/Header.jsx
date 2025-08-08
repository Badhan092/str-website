"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore Us", path: "/we" },
    { name: "Story & History", path: "/story-history" },
    { name: "Responsibilities", path: "/responsibilities" },
    { name: "Products", path: "/products" },
    { name: "Events", path: "/news" },
    { name: "News", path: "/blog" },
    { name: "Find Us", path: "/contact-us" },
  ];

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="logo" onClick={handleClick}>
          <img src="/img/logo-white.png" alt="Logo" className="logo-image" />
        </div>

        {/* Hamburger / Close Icon */}
        <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <span className="close-icon">&times;</span>
          ) : (
            <>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </>
          )}
        </div>

        {/* Navigation Menu */}
        <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="menu-list">
            {navItems.map((item) => (
              <li key={item.name} className="menu-item" onClick={() => setIsMobileMenuOpen(false)}>
                <Link
                  href={item.path}
                  className={`nav-link ${currentPath === item.path ? "active" : ""}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
