import React from "react";
import { HoroDetailPicture } from "./components/HoroDetailPicture";
import { Detail } from "./components/Detail";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";

const HoroscopeDetail = () => {
  return (
    <div>
      <BreadcrumbBanner />
      <HoroDetailPicture />
      <Detail />
    </div>
  );
};

export default HoroscopeDetail;
