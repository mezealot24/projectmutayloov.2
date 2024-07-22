import { useEffect, useState } from "react";
import AboutUs from "./components/AboutUs";
import Hastag from "./components/Hastag";
import HeroBanner from "./components/HeroBanner";
import HoroscopeBanner from "./components/HoroscopeBanner";
import OurProducts from "./components/OurProducts";
import ShopByPower from "./components/ShopByPower";

import { getProducts } from "@/api/apiProduct";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <main>
      <HeroBanner />
      <AboutUs />
      <ShopByPower />
      <OurProducts productsData={products} />
      <HoroscopeBanner />
      <Hastag />
    </main>
  );
};

export default Home;
