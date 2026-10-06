import React, { useState } from "react";
import Header from "./../../components/shared/Header/Header";
import Footer from './../../components/shared/Footer/Footer';
import { Outlet } from "react-router";

const MainLayout = () => {
  const [category, setCategory] = useState(0);
  return (
    <div className="w-full min-h-screen bg-primary-content flex flex-col content-center justify-between">
      <div className="w-full">
      {/* header */}
        <header>
          <Header />
        </header>
      </div>
      <section>
        <aside></aside>
        <Outlet
        context={[category, setCategory]} 
         />
        <aside></aside>
      </section>
      {/* footer */}
      <footer>
      <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

