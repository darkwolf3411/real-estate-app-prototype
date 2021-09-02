import React, { useContext, useState } from "react";
import { ItemContext } from "../../context/context";
import { FilterContext } from "../../context/FilterContext";
import { useFetching } from "../../hooks/useFetching";
import styled from "styled-components";
import Switch from "react-switch";
import MyButton from './MyButton'

const StyledSidebar = styled.div`
width: 230px;
position: fixed;
`

const Sidebar = () => {
  const { useInfinity, setInfinity, setListings } = useContext(ItemContext);
  const { filter, setFilter } = useContext(FilterContext);
  const handleChange = nextChecked => {
    setInfinity(nextChecked);
  };
  const agreetHendler = () => {
    fetching()
  }
  const resetHendler = () => {
    fetching()
  }
  return (
    <StyledSidebar>
      <label htmlFor="range">цена до</label>
      <input
        id="range"
        type="range"
        min="1"
        max="1000000"
        value={filter.maxPrice}
        onChange={(e) => setFilter({...filter,maxPrice: e.target.value})}
      ></input>
      {filter.maxPrice}$
      <br />
      <div>
        <span>use infinity</span>
        <Switch onChange={handleChange} checked={useInfinity} />
      </div>
      <button onClick={() => agreetHendler()}>ok</button>
      <button onClick={() => resetHendler()}>reset</button>
    </StyledSidebar>
  );
};

export default Sidebar;
