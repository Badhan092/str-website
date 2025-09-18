"use client";

import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { href: "https://www.facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://www.twitter.com", icon: <FaXTwitter />, label: "Twitter" },
  { href: "https://www.instagram.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

const footerLinks = [
  { href: "/we", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact-us", label: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Tagline */}
        <div className="footer-logo">
          <img src="/img/logo-white.png" alt="STR Logo" className="logo" />
          <p className="text">
            At STR Sourcing, we are a global sourcing and export company built on three core values:
            Sustainability, Trustworthy, and Responsibility. These principles define who we are and how we
            work—delivering world-class products with integrity, transparency, and a commitment to
            long-term impact.
          </p>
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-info">
          <h4 className="footer-info-title">Head Office</h4>
          <p className="footer-info-item">House: 1/B, Road: 10, Nikunja 2, Khilket, <br/>Dhaka-1229, Bangladesh</p>
          <p className="footer-info-item">Phone: +880 1672916863 , +880170692 2655</p>
          <p className="footer-info-item">Email: info@strsourcing.com</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4 className="footer-links-title">Quick Menu</h4>
          {footerLinks.map((link) => (
            <a key={link.label} className="footer-links-item" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      {/* <div className="footer-bottom">
        <p>© 2025 STR Textiles. All rights reserved.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
