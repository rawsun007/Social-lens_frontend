import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`mx-4 mt-4 transition-all duration-500 ease-in-out ${
          hasScrolled ? "mt-2" : "mt-4"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative overflow-hidden transition-all duration-500 ${
              hasScrolled
                ? "bg-gray-800/60 backdrop-blur-sm"
                : "bg-indigo-600/20 backdrop-blur-xs"
            } border border-gray-600/30 rounded-2xl`}
          >
            <div className="relative px-6 py-4">
              {/* Centered content */}
              <div className="flex justify-center text-center">
                <h1 className=" text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">
                  SocialLens
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
