import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Bramantio Krisno Aji. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
