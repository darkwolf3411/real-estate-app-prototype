import { useMemo } from "react"

export const usePagination = (totalPages) =>{
    const getPageArr = useMemo(()=>{
        let pageArray = [] 
        for (let i = 0; i < totalPages; i++) {
            pageArray.push(i+1)
        }
        console.log(pageArray);
        return pageArray
    },[totalPages])
    return getPageArr
}