
export const matchedNews = (currentData, news)=>{
        const matchedData = currentData.find(item=>
            item.id === news.id
        )
        return matchedData;
}

export const uniqueNewsHandler = (currentData, setData, news) =>{
     
    const product = matchedNews(currentData, news);

    if (product) {
        const matchedItem =
        currentData.map(targetedItem=>
            targetedItem.id === news.id ?
            {...targetedItem, quantity: targetedItem.quantity +1} : 
            targetedItem
        )

        setData(matchedItem);
        return true;
    }

    setData([...currentData, {...news, quantity:1}])
    return true

}


