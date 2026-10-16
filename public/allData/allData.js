//** * for all news data ***===>

const allData = async () => {
  const dataFetch = await fetch("/data/news.json");
  if (!dataFetch.ok) throw new Error("Failed to fetch news data!");

  return dataFetch.json();
};

export const data = allData();

const categoryData = async ()=>{
    const categoryList = await fetch('/data/categories.json');
    if(!categoryList.ok) throw new Error('failed to fetch categories');
    return categoryList.json();
}

export const category = categoryData(); 
