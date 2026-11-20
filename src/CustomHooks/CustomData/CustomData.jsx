import React, { createContext, useContext } from "react";
import { useState } from "react";

const CustomDataManagement = createContext();
export const useCustomData = () => useContext(CustomDataManagement);

const CustomData = ({ children }) => {
  const [bookmark, setBookmark] = useState([]);
  const [read, setRead] = useState([]);
  const [share, setShare] = useState([]);

//   bookmark handler
  const bookmarkHandler = (news) => {
    //**  check if the news already in selected bookmark
    const matchedBookmark = bookmark.find((item) => item.id === news.id);

    if (matchedBookmark) return false;

    setBookmark((prev) => [...prev, news]);
    return true;
  };

//  

  const value = {
    bookmark,
    read,
    share,
    bookmarkHandler,
  };

  return (
    <CustomDataManagement.Provider value={value}>
      {children}
    </CustomDataManagement.Provider>
  );
};

export default CustomData;
