'use client';

import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { href: "https://www.facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://www.twitter.com", icon: <FaXTwitter />, label: "Twitter" },
  { href: "https://www.instagram.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Logo and Tagline */}
        <div className="footer-logo">
          <img src="/img/logo.png" alt="STR Logo" className="logo" />
          <p className="text">
            At STR Textiles, we stand for Sustainability, <br />
            Trustworthiness, and Reliability — the fabric of our promise.
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
          <h4 className="footer-info-title">Our Address</h4>
          <p className="footer-info-item">123 Textile Lane, Fabric City, TX 12345</p>
          <p className="footer-info-item">Phone: (123) 456-7890</p>
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
