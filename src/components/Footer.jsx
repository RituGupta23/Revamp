import React, { useState } from "react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/" },
        { name: "Press", href: "/" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Consulting", href: "/" },
        { name: "Development", href: "/" },
        { name: "Design", href: "/" },
      ],
    },
    {
      title: "Connect",
      links: [
        // { name: 'Help Center', href: '#' },
        { name: "Contact Us", href: "/contact" },
        // { name: 'FAQ', href: '#' }
      ],
    },
    {
      title: "Technologies",
      links: [
        { name: "Blog", href: "/blogs" },
        { name: "Guides", href: "/" },
        // { name: 'Newsletter', href: '#' }
      ],
    },
    {
        title: 'Reference',
        links: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' }
        ]
    }
  ];

  return (
    <footer className="bg-gray-700 text-white px-8 py-4 md:px-14 w-full h-auto z-0">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {sections.map((section, index) => (
                        <div key={index} className="flex flex-col">
                            <button
                                className="text-xl md:text-2xl font-poppins font-bold my-4 flex justify-between items-center w-full sm:w-auto"
                                onClick={() => handleToggle(index)}
                            >
                                {section.title}
                                <span className="text-lg text-white sm:hidden">
                                    {openIndex === index ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                                </span>
                            </button>
                            <ul className={`font-poppins sm:block ${openIndex === index ? 'block' : 'hidden'}`}>
                                {section.links.map((link, idx) => (
                                    <li key={idx} className='text-white font-thin my-4 '><a href={link.href} className="hover:underline">{link.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-white font-thin mt-4">
            &copy; 2024 MyCTO Innovations . All rights reserved.
          </p>
          <div className="w-auto gap-2 flex flex-row text-2xl justify-between mt-4">
            <a
              href="https://www.linkedin.com/company/mycto-innovations/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white border-solid rounded-full w-10 h-10 flex justify-center items-center"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/my_cto/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white border-solid rounded-full w-10 h-10 flex justify-center items-center"
            >
              <FaInstagramSquare />
            </a>
            <a
              href="https://www.facebook.com/myctoinnovations"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white border-solid rounded-full w-10 h-10 flex justify-center items-center"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
