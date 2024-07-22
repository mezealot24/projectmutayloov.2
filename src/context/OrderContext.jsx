import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({
    products: [],
    userInfo: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      address: {
        address_line1: "",
        address_line2: "",
        postcode: "",
        province: "",
        district: "",
        subdistrict: "",
      },
      paymentMethod: "",
    },
    status: "pending",
  });

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
