import React, { use } from "react";
import { category } from "../../../../public/allData/allData";

const Categories = () => {
  const categoryData = use(category);
 
  return (
    <div className="w-full bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800 rounded-xl shadow-2xl">
      <div className="w-auto px-3 py-8 flex flex-col space-y-2">
        {
            categoryData?.map(category=>(
                <button
                className={`py-3 glass-effect cursor-pointer`}
                key={category.id}
                onClick={()=>console.log('clicked',`${category.name}`)}
                >
                    {category.name}
                </button>
            ))
        }
      </div>
    </div>
  );
};

export default Categories;
