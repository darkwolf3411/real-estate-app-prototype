import { useEffect, useState } from "react";
import MainWrapper from "../../components/UI/MainWrapper";

export default function listItem({ id }) {
  const [itemData, setItemData] = useState({})
  useEffect(() => {
      fetch(`http://localhost:3000/api/getitem?_id=${id}`)
      .then(res => res.json())
      .then(result => {
        setItemData(result);
      });
    }, []);
  return (
    <MainWrapper>
      <h1>Страница товара с ID = {id}</h1>
      <span>{itemData.description}</span>
    </MainWrapper>
  );
}
export async function getServerSideProps({ params }) {
  const id = params.id
  
  return {
    props: { id }, // will be passed to the page component as props
  };
}
