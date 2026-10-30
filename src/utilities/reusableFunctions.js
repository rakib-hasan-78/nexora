 
 
 
 export const categoryHandler =(data,category, property )=>{
            const filterData = data.filter(news=>{

              if (category===0) return true

              const value = property.split('.')
              .reduce((obj, key)=>obj?.[key], news);

              if (category===1) return value;

              return news.category_id ===category;
            });

            return filterData;
 }

 export const searchHandler =(data, search)=>{
          const query = search.toLowerCase().trim();
          if(!query) return data;
          return data.filter(news=>{
            return(
              news?.title.toLowerCase().includes(query) ||
              news?.tags?.some(item=>item.toLowerCase().includes(query)) ||
              news?.author?.name.toLowerCase().includes(query)
            )
          });
        }


  // data show on UI
  export const displayDataHandler = (data, displayData) => {
    return data.slice(0, displayData);
  }
  // data loader handler per click
  export const dataLoadHandler = async(setIsLoading,displayData,data,setDisplayData)=>{
      setIsLoading(true)
      try {
        await new Promise(resolve=>setTimeout(resolve, 300))
        if (displayData.length<data.length){
          setDisplayData(prev=> prev + 8)
        } else {
          setDisplayData(8)
        }  
        
      } catch (error) {
        console.error(error)
      }
      finally{
        setIsLoading(false)
      }
  }



