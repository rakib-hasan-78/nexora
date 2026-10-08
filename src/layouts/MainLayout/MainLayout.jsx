import React from "react";
import Header from "./../../components/shared/Header/Header";
import Footer from './../../components/shared/Footer/Footer';
import { Outlet } from "react-router";

const MainLayout = () => {
  
  return (
    <div className="w-full min-h-screen bg-primary-content flex flex-col content-center justify-between">
      <div className="w-full">
      {/* header */}
        <header>
          <Header />
        </header>
      </div>
      <main className="w-11/12 mx-auto flex-1 my-5">    
          <Outlet/>
      </main>
      {/* footer */}
      <footer>
      <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

