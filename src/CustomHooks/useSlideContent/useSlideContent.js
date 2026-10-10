import { useState } from "react";


const  useSlideContent = (filterData, contentPerPage=8) => {

    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(filterData.length/contentPerPage);
    const currentIndex = (page-1) * contentPerPage;
    const totalItems = filterData.slice(currentIndex, currentIndex + contentPerPage);

    // next & prev handler
    const pageHandler = value =>{
        if (value >= 1 && value <= totalPages) 
            return setPage(value) 
    }
    return {
        page,
        totalPages,
        totalItems,
        pageHandler
    } 
};

export default  useSlideContent;