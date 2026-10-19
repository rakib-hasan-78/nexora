import React, { use } from "react";
import { category } from "../../../../public/allData/allData";

const Categories = (
    { 
        selectedCategory,
        setSelectedCategory
    }
) => {
  const categoryData = use(category);
 
  return (
    <div className="w-full bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800 rounded-xl shadow-2xl py-3 pb-4">
    <div className="w-full flex items-center justify-center text-slate-200 py-6 text-2xl font-bold">
        <h3>categories ({categoryData.length})</h3>
    </div>
      <div className="w-auto px-3 py-2 flex flex-col space-y-2">
        {
            categoryData?.map(category=>(
                <div key={category.id} className={`${selectedCategory===category.id ?'aura':''} text-violet-800/30 overflow-hidden`}>
                <button
                className={`w-full py-3 cursor-pointer ${selectedCategory===category.id ?
                'btn-glass border-violet-300 font-bold':' glass-effect'} hover:border-violet-300 delay-75 transition-all`}
                onClick={()=>setSelectedCategory(category.id)}
                >
                    {category.name} 
                </button>

                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Categories;
