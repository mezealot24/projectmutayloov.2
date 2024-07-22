import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";

const BreadcrumbSmall = ({ pagename }) => {
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((path) => path !== "");

  const handleBreadcrumbName = (value) => {
    if (value === "product") {
      return "Products";
    }
    return value;
  };

  const getBreadcrumbLink = (value, index) => {
    if (value === "product") {
      return "/products";
    }
    return `/${pathName.slice(0, index + 1).join("/")}`;
  };

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {pathName.slice(0, -1).map((value, index) => {
            const to = getBreadcrumbLink(value, index);
            return (
              <React.Fragment key={to}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={to}>
                    {handleBreadcrumbName(value)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
          {pagename && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{pagename}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbSmall;
