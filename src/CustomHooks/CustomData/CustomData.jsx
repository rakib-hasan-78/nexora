import React, { createContext, useContext } from "react";
import { useState } from "react";
import {
  matchedNews,
  uniqueNewsHandler,
} from "../../utilities/customDataHandlers/customDataHandlers";

const CustomDataManagement = createContext();
export const useCustomData = () => useContext(CustomDataManagement);

const CustomData = ({ children }) => {
  const [bookmark, setBookmark] = useState([]);
  const [read, setRead] = useState([]);
  const [share, setShare] = useState([]);

  //   bookmark handler
  const bookmarkHandler = (news) => {
    //**  check if the news already in selected bookmark
    const matchedBookmark = matchedNews(bookmark, news);

    if (matchedBookmark) return false;

    setBookmark((prev) => [...prev, news]);
    return true;
  };

  //** reading handler
  const readingHandler = (news) => {
    uniqueNewsHandler(read, setRead, news);
  };

  // ** sharing handler

  const sharingHandler = (news) => {
    uniqueNewsHandler(share, setShare, news);
  };

  const value = {
    bookmark,
    read,
    share,
    bookmarkHandler,
    readingHandler,
    sharingHandler,
  };

  return (
    <CustomDataManagement.Provider value={value}>
      {children}
    </CustomDataManagement.Provider>
  );
};

export default CustomData;
