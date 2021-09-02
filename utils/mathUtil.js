class mathUtils {
    static useItems(array, page_size, page_number,filter){
        return usePagination(useFilter(array, filter), page_size, page_number)
    }
    static usePagination(array, page_size, page_number) {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    };
    static useFilter = (array, filter) => {
        const filtredArray = []
        if (filter.maxPrice) {
            filtredArray = array.filter(item => item.price <= filter.maxPrice)
        }
        if (!filter.countOfGarage) {
            filtredArray = array.filter(item => item.garage == filter.filter.countOfGarage)
        }
        if (!filter.countOfBadroom) {
            filtredArray = array.filter(item => item.bedrooms == filter.countOfBadroom)
        }
        if (filter.maxSquare) {
            filtredArray = array.filter(item => item.square <= filter.maxSquare)
        }
        return filtredArray
    }
}

export default mathUtils;