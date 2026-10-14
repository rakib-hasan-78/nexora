import { use } from "react";


const customDataFilter =(expectedData, ...filterValue)=>{

    const dataFilter = use(expectedData);
         const sciTechData = dataFilter.filter(item=>
        item.tags.some(tag=>
        [...filterValue].includes(tag.toLowerCase())
        )
    )
    return sciTechData;


}
export default customDataFilter;