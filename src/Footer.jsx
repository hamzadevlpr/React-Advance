import React from 'react';
import logo from '../src/assets/Logo.png';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-white body-font bg-gray-800 w-full">
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={logo} alt="LOGO" width={80} />
            <h1 className="font-poppins text-2xl font-bold text-white">MALIK</h1>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {year}  —
            <a
              href="https://github.com/hamzadvlpr1/"
              className="text-white ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @hamzadvlpr1
            </a>
          </p>
          <span className="gap-5 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-white">
              <BsFacebook />
            </a>
            <a className="ml-3 text-white">
              <BsInstagram />
            </a>
            <a className="ml-3 text-white">
              <BsLinkedin />
            </a>
            <a className="ml-3 text-white">
              <BsGithub />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
