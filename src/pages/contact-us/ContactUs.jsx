import React from "react";
import { ContactSection } from "./components/ContactSection";
import { FeatureSection } from "./components/FeatureSection";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";

const ContactUs = () => {
  return (
    <section>
      <BreadcrumbBanner />
      <FeatureSection />
      <ContactSection />
    </section>
  );
};

export default ContactUs;
