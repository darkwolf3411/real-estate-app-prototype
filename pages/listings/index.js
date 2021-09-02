import React, { useState, useEffect, useRef, useContext } from "react";
import Preloader from "../../components/UI/Preloader";
import ItemsList from "../../components/ItemsList";
import MainWrapper from "../../components/UI/MainWrapper";
import { useObserver } from "../../hooks/useObserver";
import Sidebar from "../../components/UI/Sidebar";
import { useFetching } from "../../hooks/useFetching";
import { ItemContext } from "../../context/context";
import { FilterContext } from "../../context/FilterContext";
import styled from "styled-components";
import Pagination from "../../components/UI/Pagination";
import { useItems } from "../../hooks/useItems";

const Content = styled.div`
  min-width: 480px;
  max-width: 1690px;
  margin: 0 auto;
  margin: 50px 0 0 230px;
`;

export default function Listings() {
  const { useInfinity, listings, setListings } = useContext(ItemContext);
  const { filter, setFilter, confirmFilter } = useContext(FilterContext);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const lastElement = useRef();

  const [filtredArrayCount, filtredAndPaginationArray] = useItems(
    listings,
    limit,
    page,
    filter
  );

  const [fetching, isLoading, error] = useFetching(async () => {
    await fetch(`api/listings`)
      .then((res) => res.json())
      .then((result) => {
        // if (useInfinity) {
        //   return setListings([...listings, ...result]);
        // }
        return setListings(result);
      });
  });
  const handlePageClick = (data) => {
    setPage(data.selected + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useObserver(lastElement, page < totalPages, isLoading, () => {
    if (useInfinity) {
      setPage(page + 1);
    }
  });
  useEffect(() => {
    fetching();
  }, [page,confirmFilter]);

  return (
    <MainWrapper keywords={"houses sale listing"} title={"Houses for Sale"}>
      <Sidebar />
      <Content>
        <ItemsList
          mapPoint={filtredAndPaginationArray}
          listings={filtredAndPaginationArray}
        />
        {useInfinity ? null : (
          <Pagination
            callback={handlePageClick}
            totalPages={Math.ceil(filtredArrayCount / limit)}
            limit={limit}
          />
        )}
      </Content>
      {isLoading && <Preloader />}
      <div ref={lastElement} style={{ padding: 10, background: "white" }} />
    </MainWrapper>
  );
}
