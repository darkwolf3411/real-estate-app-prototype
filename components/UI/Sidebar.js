import React, { useContext, useState } from "react";
import { ItemContext } from "../../context/context";
import { FilterContext } from "../../context/FilterContext";
import { useFetching } from "../../hooks/useFetching";
import styled from "styled-components";
import Switch from "react-switch";
import MyButton from "./MyButton";

const StyledSidebar = styled.div`
  width: 230px;
  position: fixed;
`;

const Sidebar = () => {
  const { useInfinity, setInfinity, setListings } = useContext(ItemContext);
  const { filter, setFilter, confirmFilter, setConfirm } =
    useContext(FilterContext);
  const handleChange = (nextChecked) => {
    setInfinity(nextChecked);
  };
  const agreetHendler = () => {
    setConfirm(!confirmFilter);
  };
  const resetHendler = () => {
    setConfirm(!confirmFilter);
    setFilter({
      maxPrice: null,
      countOfGarage: null,
      countOfBadroom: null,
      maxSquare: null,
      type: null,
    });
  };
  return (
    <StyledSidebar>
      <label htmlFor="range">цена до</label>
      <input
        id="range"
        type="range"
        min="1"
        max="1000000"
        value={filter.maxPrice}
        onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
      ></input>
      {filter.maxPrice}$
      <br />
      <div>
        <span>use infinity</span>
        <Switch onChange={handleChange} checked={useInfinity} />
      </div>
      <br />
      <label htmlFor='garage'>garage count: </label>
      <select onChange={(e)=>setFilter({ ...filter, countOfGarage: e.target.value })} id='garage' name='garage'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='3'></option>
      </select>
      <br />
      <button onClick={() => agreetHendler()}>ok</button>
      <button onClick={() => resetHendler()}>reset</button>
    </StyledSidebar>
  );
};

export default Sidebar;
