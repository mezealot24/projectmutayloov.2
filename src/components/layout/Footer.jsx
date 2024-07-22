import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="pt-8 container grid lg:grid-cols-2">
        <div className="py-8 border-b">
          <div className="lg:flex lg:items-center lg:gap-4">
            <h3>Mutayloo</h3>
            <p className="hidden lg:block text-3xl">|</p>
            <p className="text-base-100">เครื่องประดับสายมู</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3">
          <ul className="font-medium flex flex-col gap-4 py-8 border-b">
            <li className="font-bold">Pages</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products-list">Products</Link>
            </li>
            <li>
              <Link to="/horoscope">Horoscope</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
          <ul className="font-medium flex flex-col gap-4 py-8 border-b">
            <li className="font-bold">Help</li>
            <li>
              <Link to="/">Ordering</Link>
            </li>
            <li>
              <Link to="/products-list">Ring Size Chart</Link>
            </li>
            <li>
              <Link to="/horoscope">Tracking</Link>
            </li>
            <li>
              <Link to="/contact-us">Refund</Link>
            </li>
          </ul>
          <ul className="font-medium flex flex-col gap-4 py-8 border-b">
            <li className="font-bold">Connect</li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/products-list">Facebook</Link>
            </li>
            <li>
              <Link to="/horoscope">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container py-4 flex flex-col-reverse lg:flex-row lg:gap-12">
        <ul className="flex justify-center gap-4 font-semibold lg:order-2">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
        <p className="lg:order-1 text-base-100 font-normal">
          Copyright © 2024 Mutayloo. All rights reserved
        </p>
      </div>
    </footer>
  );
};
