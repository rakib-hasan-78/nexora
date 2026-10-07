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
      <main className="w-11/12 mx-auto flex-1 my-5">
        <div className="grid grid-cols-12 py-3 bg-green-400 gap-2">
          <aside className="col-span-2 bg-red-400 py-2">

          </aside>
         <section className="col-span-8 py-2 bg-blue-500">
            <Outlet
            context={[category, setCategory]} 
            />
         </section> 
          <aside className="col-span-2 py-2 bg-yellow-400">

          </aside>
        </div>
      </main>
      {/* footer */}
      <footer>
      <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

