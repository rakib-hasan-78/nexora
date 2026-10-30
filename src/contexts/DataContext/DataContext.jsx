import React, { createContext } from 'react';
import { useState } from 'react';

const DataUsages = createContext();
const DataContext = ({children}) => {
const [searchNews, setSearchNews] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [dataShow, setDataShow] = useState(8);



    return (
        <DataUsages.Provider>
            {children}
        </DataUsages.Provider>
    );
};

export default DataContext;