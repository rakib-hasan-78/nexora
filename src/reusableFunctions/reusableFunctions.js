 
 
 
 export const categoryHandler =(data,selectedCategory, property )=>{
            const filterData = data.filter(news=>{

              if (selectedCategory===0) return true

              const value = property.split('.')
              .reduce((obj, key)=>obj?.[key], news);

              if (selectedCategory===1) return value;

              return news.category_id ===selectedCategory;
            });

            return filterData;
 }

 export const searchHandler =(data, searchNews ,property)=>{

        const query = searchNews.trim().toLowerCase();

        if(!query) return true;

        return data.filter(news=>{
          const value = property.split('.')
          .reduce((obj, key)=>obj?.[key], news);

          if(Array.isArray(value)){
            return value.some(item=>
              item?.toLowerCase().includes(query)
            )
          }
        })
 }


  // data show on UI
  const displayData = searchData.slice(0, dataShow);
  // data loader handler per click
  const dataLoadHandler = async()=>{
      setIsLoading(true)
      try {
        await new Promise(resolve=>setTimeout(resolve, 300))
        if (dataShow<searchData.length){
          setDataShow(prev=> prev + 8)
        } else {
          setDataShow(8)
        }  
        
      } catch (error) {
        console.error(error)
      }
      finally{
        setIsLoading(false)
      }
  }