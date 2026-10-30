import { useState } from "react"

const useNewsListing = () => {
    const [searchNews, setSearchNews] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [dataShow, setDataShow] = useState(8);

    return {
        searchNews,
        setSearchNews,
        isLoading,
        setIsLoading,
        dataShow,
        setDataShow
    }

}
export default useNewsListing;

