import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for hamburger and close
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation().pathname;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Navbar fluid rounded className="py-2 h-[12vh]">
      <div className="font-poppins flex items-center justify-between w-full">
        <Link to="/" className="flex font-medium items-center text-gray-900">
          <img className="p-3 h-16 md:h-16" src={logo} alt="Logo" />
        </Link>
        <div className="hidden md:flex md:flex-grow items-center justify-end space-x-6">
          <div
            className={`text-lg font-semibold ${
              path === "/" ? "text-bluetext" : ""
            } hover:text-bluetext`}
          >
            <Link to="/">News</Link>
          </div>
          <div
            className={`text-lg font-semibold ${
              path === "/about" ? "text-bluetext" : ""
            } hover:text-bluetext`}
          >
            <Link to="/model">Models</Link>
          </div>
          <div
            className={`text-lg font-semibold ${
              path === "/blogs" ? "text-bluetext" : ""
            } hover:text-bluetext`}
          >
            <Link to="/blogs">Events</Link>
          </div>
          <div
            className={`text-lg font-semibold ${
              path === "/services" ? "text-bluetext" : ""
            } hover:text-bluetext`}
          >
            <Link to="/services">Corporate</Link>
          </div>
          {/* <div className={`text-lg font-semibold ${path === '/help' ? 'text-bluetext' : ''} hover:text-bluetext`}>
            <Link to='/help'>Help</Link>
          </div> */}
          <div
            className={`text-lg font-semibold ${
              path === "/contact" ? "text-bluetext" : ""
            } hover:text-bluetext`}
          >
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-end mr-8">
          <Link
            to="/contact"
            className="md:ml-10  font-poppins  bg-black  text-white border-2  rounded-md px-4 py-2 font-bold text-md leading-snug flex justify-start items-center hover:shadow-2xl hover:shadow-skyblue hover:bg-grey-900 hover:text-skyblue transition duration-300 ease-in-out transform hover:scale-105 hover:border-skyblue transition duration-300 ease-in-out transform"
          >
            Book a Test Drive
            {/* <span className='px-1 flex items-center'><FaArrowRightLong /></span> */}
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-black">
            <HiMenu size={35} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-between p-6 space-y-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-black"
          >
            <HiX size={30} />
          </button>
          <div className="flex flex-col items-center space-y-6 text-lg font-semibold">
            <NavItem to="/" path={path} onClick={handleLinkClick}>
              Home
            </NavItem>
            <NavItem to="/about" path={path} onClick={handleLinkClick}>
              About
            </NavItem>
            <NavItem to="/blogs" path={path} onClick={handleLinkClick}>
              Blogs
            </NavItem>
            {/* <NavItem to='/services' path={path} onClick={handleLinkClick}>Services</NavItem> */}
            {/* <NavItem to='/help' path={path} onClick={handleLinkClick}>Help</NavItem> */}
            <NavItem to="/contact" path={path} onClick={handleLinkClick}>
              Contact
            </NavItem>
          </div>
          <div className="flex justify-center">
            <Link to="/contact">
              <div className="flex justify-center w-full">
                <button className="smd:ml-10  font-poppins  bg-skyblue  text-white border-2  rounded-md px-4 py-2 font-bold text-md leading-snug flex justify-start items-center hover:shadow-2xl hover:shadow-skyblue hover:bg-white hover:text-skyblue transition duration-300 ease-in-out transform hover:scale-105 hover:border-skyblue transition duration-300 ease-in-out transform">
                  Book a Test Drive
                  {/* <span className="w-48 text-center font-bold">Click!</span> */}
                  {/* <span className="w-48 text-center font-bold">Schedule a meeting</span> */}
                </button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </Navbar>
  );
}

function NavItem({ to, path, children, onClick }) {
  return (
    <div
      className={`text-lg font-semibold ${
        path === to
          ? "text-bluetext bg-blue-100 px-4 py-2 rounded-full"
          : "text-gray-900"
      } hover:text-bluetext hover:bg-blue-100`}
    >
      <Link to={to} onClick={onClick}>
        {children}
      </Link>
    </div>
  );
}
