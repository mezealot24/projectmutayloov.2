import React from "react";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const Account = () => {
  return (
    <main className="w-full">
      <h1 className="text-center py-8">My Account</h1>
      
      <section className="container grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <SideBar />
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 ">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Account;