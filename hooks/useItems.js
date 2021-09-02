
const usePagination =(array, page_size, page_number)=> {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
};
const useFilter = (array, filter) => {
    let filtredArray = []
    if (filter.maxPrice) {
        filtredArray = array.filter(item => item.price <= filter.maxPrice)
    }
    if (filter.countOfGarage) {
        filtredArray = array.filter(item => item.garage == filter.countOfGarage)
    }
    if (filter.countOfBadroom) {
        filtredArray = array.filter(item => item.bedrooms == filter.countOfBadroom)
    }
    if (filter.MaxSquare) {
        filtredArray = array.filter(item => item.square <= filter.MaxSquare)
    }
    if (filter.type) {
        filtredArray = array.filter(item => item.type == filter.type)
    }
    return filtredArray
}

const useItems = (array, page_size, page_number,filter) => {
        return usePagination(useFilter(array, filter), page_size, page_number)
}

export default useItems
