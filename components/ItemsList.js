import { CSSTransition, TransitionGroup } from "react-transition-group";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import React from "react";
import ProductItem from "./ProductItem";
import Grid from "./UI/Grid";
import styled from "styled-components";

const StyeledGrid = styled(Grid)`
  @media ${(props) => props.theme.media.tablet} {
  }
  @media ${(props) => props.theme.media.phone} {
  }
`;

const ItemsList = ({ listings, mapPoint }) => {
  if (!listings.length) {
    return <h1>Товары не найдены</h1>;
  }
  return (
    <Grid style={{padding: 10}}>
      <YMaps >
        <Map
          width={"90%"}
          margin={'0 auto'}
          height={"280px"}
          defaultState={{
            center: [
              listings[2].address.coordinates.latitude,
              listings[2].address.coordinates.longitude,
            ],
            zoom: 3,
          }}
        >
          {" "}
          {mapPoint.map((item) => {
            return (
              <Placemark
              key={item.id}
                geometry={[
                  item.address.coordinates.latitude,
                  item.address.coordinates.longitude,
                ]}
              />
            );
          })}
        </Map>
      </YMaps>
        <StyeledGrid gap={'0'} columns={'repeat(auto-fit,minmax(350px,1fr))'}>
          {listings.map((item) => (
              <ProductItem key={item.id} data={item} />
          ))}
        </StyeledGrid>
    </Grid>
  );
};

export default ItemsList;
