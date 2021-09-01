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
  const [value, setValue] = useState(500000);
  const {useInfinity, setInfinity,setListings} = useContext(ItemContext);
  const {setIsFiltred,isFiltred} = useContext(FilterContext);
  const [fetching, isLoading, error] = useFetching(async()=>{
    await fetch(`api/setfilter?_filter=${value}&`)
    .then((res) => res.json())
    .then((result) => {
      setListings(result)
    });
  })
  const handleChange = nextChecked => {
    setInfinity(nextChecked);
  };
  const agreetHendler =()=>{
    setIsFiltred(true)
    fetching()
  }
  const resetHendler =()=>{
    setIsFiltred(false)
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {value}$ 
      <br />
      <div>
        <span>use infinity</span>
        <Switch onChange={handleChange}  checked={useInfinity} />
      </div>
      <button onClick={()=>agreetHendler()}>ok</button>
      <button onClick={()=>resetHendler()}>reset</button>
    </StyledSidebar>
  );
};

export default Sidebar;
