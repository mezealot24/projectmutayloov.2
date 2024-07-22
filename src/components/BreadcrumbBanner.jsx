import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation, Link } from "react-router-dom";

const BreadcrumbBanner = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((path) => path !== "");

  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto flex flex-col gap-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {pathName.map((value, index) => {
              const to = `/${pathName.slice(0, index + 1).join("/")}`;
              const isLast = index === pathName.length - 1;

              return (
                <React.Fragment key={to}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{value}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={to}>{value}</BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-4xl font-bold uppercase">{pathName[pathName.length - 1].split("-").join(" ")}</h1>
      </div>
    </section>
  );
};

export default BreadcrumbBanner;
