import { useMemo } from "react";

const usePagination = (array, page_size, page_number) => {
  const getPagination = useMemo(() => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }, [array, page_size, page_number]);
  return getPagination;
};
const useFilter = (array, filter) => {
  const filtredItems = useMemo(() => {
    let filtredArray = [];
    if (filter.maxPrice) {
      filtredArray = array.filter((item) => item.price <= filter.maxPrice);
    }
    if (filter.countOfGarage) {
      filtredArray = filtredArray.filter(
        (item) => item.garage == filter.countOfGarage
      );
    }
    if (filter.countOfBadroom) {
      filtredArray = filtredArray.filter(
        (item) => item.bedrooms == filter.countOfBadroom
      );
    }
    if (filter.type) {
      filtredArray = filtredArray.filter((item) => item.type == filter.type);
    }
    if (filter.maxSquare) {
      filtredArray = filtredArray.filter(
        (item) => item.square <= filter.maxSquare
      );
    }
    if (filtredArray.length != 0) {
      return filtredArray;
    } else {
      return array;
    }
  }, [array]);
  return filtredItems;
};
export const useItems = (array, page_size, page_number, filter) => {
  const filtredArray = useFilter(array, filter);
  const filtredArrayCount = filtredArray.length;
  const filtredAndPaginationArray = usePagination(
    filtredArray,
    page_size,
    page_number
  );
  return [filtredArrayCount, filtredAndPaginationArray];
};
