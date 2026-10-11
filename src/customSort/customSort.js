const customSort =(data, key)=>{
    const sortedData = [...data].sort((a,b)=>{
        const getValue = (data)=>
            key.split('.').reduce((value, property)=>value?.[property], data)

        if (getValue(a)>getValue(b)) {
            return 1
        } else if (getValue(a)< getValue(b)){
            return -1
        } else {
            return 0
        }
    })
    return sortedData;
}

export default customSort;

