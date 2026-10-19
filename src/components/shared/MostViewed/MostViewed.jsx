import React, { Suspense, use } from "react";
import { data } from "../../../../public/allData/allData";
import customSort from "../../../customSort/customSort";
import Card from "../../basic/Card/Card";
import SidebarSkeleton from "../../Skeletons/SidebarSkeleton/SidebarSkeleton";


const MostViewed = ({tab}) => {
  const mainData = use(data);
  const mostViewedData = customSort(mainData, "total_view");
  const topRatedData = customSort(mainData, "rating.number");
  return (
    <div
      className="w-full py-3 max-h-150 overflow-y-auto
  scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full flex flex-col gap-3"
    >
    <Suspense fallback={<SidebarSkeleton/>}>

      {tab==='mostRead'&& mostViewedData.map((item) => (
        <Card key={item.id} data={item} />
      ))}
      {
        tab==='topRated' && topRatedData?.map(item=>(
          <Card key={item.id} data={item} />
        ))
      }
    </Suspense>
    </div>
  );
};

export default MostViewed;
