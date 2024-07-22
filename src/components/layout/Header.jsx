import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburger = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <>
      <header className="bg-white h-[60px] lg:h-[68px] shadow-lg sticky top-0 z-20">
        <div className="container h-full flex justify-between items-center">
          <div className="flex items-center gap-4 lg:flex-row-reverse">
            <Hamburger handleHamburger={handleHamburger} />
            <Link to="/" className="font-medium text-xl lg:text-3xl lg:font-semibold">
              Mutayloo
            </Link>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex gap-8 font-medium">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/horoscope">Horoscope</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4 items-center">
            <AiOutlineSearch className="w-6 h-6" />
            <Link to="/account">
              <AiOutlineUser className="w-6 h-6 hidden lg:block" />
            </Link>
            <AiOutlineHeart className="w-6 h-6 hidden lg:block" />
            <Link to="/cart">
              <AiOutlineShoppingCart className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isOpen} handleHamburger={handleHamburger} />
    </>
  );
};
