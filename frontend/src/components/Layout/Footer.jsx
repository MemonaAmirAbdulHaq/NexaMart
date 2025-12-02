import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  const [email, setEmail] = useState("");

  const footerLinks = {
    company: [
      { name: "About Us", link: "#" },
      { name: "Careers", link: "#" },
      { name: "Blog", link: "#" },
      { name: "Press", link: "#" },
    ],
    shop: [
      { name: "New Arrivals", link: "#" },
      { name: "Best Sellers", link: "#" },
      { name: "Collections", link: "#" },
      { name: "Sale", link: "#" },
    ],
    support: [
      { name: "Contact Us", link: "#" },
      { name: "FAQ", link: "#" },
      { name: "Shipping", link: "#" },
      { name: "Returns", link: "#" },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-500 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-teal-600 via-teal-500 to-cyan-500 opacity-50 animate-pulse delay-1000"></div>
      </div>

      {/* Newsletter section */}
      <div className="relative z-10">
        <div className="bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-500 py-12 sm:py-16 px-4 sm:px-8 mx-4 sm:mx-8 my-8 rounded-2xl shadow-2xl transform transition-transform hover:scale-105 duration-500">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Stay Updated
              </h2>
              <p className="text-gray-100 text-sm sm:text-base">
                Get the latest news, events, and exclusive offers delivered to your inbox
              </p>
            </div>
            <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-300 w-full sm:w-72 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="text-center sm:text-left space-y-4">
              <div className="inline-block sm:inline">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                  NexaMart
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Discover amazing products with seamless shopping experience and world-class customer service.
              </p>
              <div className="flex justify-center sm:justify-start gap-4 pt-4">
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 transform hover:scale-125">
                  <AiFillFacebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-400 hover:bg-clip-text transition-all duration-300 transform hover:scale-125">
                  <AiOutlineTwitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-teal-300 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 transform hover:scale-125">
                  <AiFillInstagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:to-teal-300 hover:bg-clip-text transition-all duration-300 transform hover:scale-125">
                  <AiFillYoutube size={24} />
                </a>
              </div>
            </div>

            {/* Company links */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.link}
                      className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 text-sm hover:translate-x-2 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop links */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Shop
              </h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.link}
                      className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-400 hover:bg-clip-text transition-all duration-300 text-sm hover:translate-x-2 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Support
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.link}
                      className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 text-sm hover:translate-x-2 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent my-8"></div>

          {/* Bottom section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 Nexamart. All rights reserved.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <span className="text-gray-600">·</span>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms & Conditions
              </a>
            </div>
            <div className="flex justify-center lg:justify-end gap-2 text-xs text-gray-500">
              <span>🛒 Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;