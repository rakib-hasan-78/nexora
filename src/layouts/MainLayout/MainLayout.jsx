import React from "react";
import Header from "./../../components/shared/Header/Header";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen bg-primary-content flex flex-col content-center justify-between">
      <div className="w-full">
        <header>
          <Header />
        </header>
      </div>
      <span>2</span>
      <span>3</span>
    </div>
  );
};

export default MainLayout;
