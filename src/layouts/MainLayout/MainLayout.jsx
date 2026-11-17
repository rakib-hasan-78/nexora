import React from "react";
import Header from "./../../components/shared/Header/Header";
import Footer from './../../components/shared/Footer/Footer';
import { Outlet } from "react-router";
import useConfigLayout from "../../CustomHooks/useConfigLayout/useConfigLayout";

const MainLayout = () => {
  const {handleHeader, handleFooter} = useConfigLayout();
  
  return (
    <div className="w-full min-h-screen bg-primary-content flex flex-col content-center justify-between">

      <div className="w-full">
      {/* header */}
        <header>
        {
          handleHeader &&
          <Header />
        }
        </header>
      </div>
      <main className="3xl:w-11/12 mx-auto flex-1 mt-5">    
          <Outlet/>
      </main>
      {/* footer */}
      <footer className="w-full">
      {
      handleFooter &&
      <Footer />
      }
      </footer>
    </div>
  );
};

export default MainLayout;

