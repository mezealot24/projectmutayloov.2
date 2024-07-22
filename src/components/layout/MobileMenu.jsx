import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";

const MobileMenu = ({ isOpen, handleHamburger }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-white z-10 py-[60px] lg:hidden">
          <ul className="flex flex-col gap-8 px-6 py-8">
            {/* <ul className="flex gap-8 font-medium"> */}
            <li>
              <Link to="/" onClick={handleHamburger}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={handleHamburger}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/horoscope" onClick={handleHamburger}>
                Horoscope
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={handleHamburger}>
                Contact Us
              </Link>
            </li>
            <hr className="w-[90%] border-t border-gray-300" />
            <li>
              <Link to="/wishlist" onClick={handleHamburger}>
                <AiOutlineHeart className="inline-block w-6 h-6 mr-2" />{" "}
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/account" onClick={handleHamburger}>
                <AiOutlineUser className="inline-block w-6 h-6 mr-2" /> Account
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
