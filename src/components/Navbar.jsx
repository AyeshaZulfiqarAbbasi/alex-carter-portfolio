import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Alex Carter</h1>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <ul className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} md:block absolute md:static bg-gray-800 w-full md:w-auto left-0 top-16 p-4 md:p-0`}>
          <li><a href="#home" className="block hover:text-gray-300 py-2">Home</a></li>
          <li><a href="#projects" className="block hover:text-gray-300 py-2">Projects</a></li>
          <li><a href="#contact" className="block hover:text-gray-300 py-2">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;