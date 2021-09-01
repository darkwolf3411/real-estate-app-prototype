import React from "react";
import Head from "next/head";
import A from "./A";
import styled from "styled-components";
import {TinyButton  as ScrollUpButton} from "react-scroll-up-button";
import Grid from "./Grid";
const Header = styled.header`
  padding: 20px;
`
const Footer = styled.footer`
  width: 100%;
  height: 400px;
  background-color: black;
`
const Container = styled.div`
width: 99vw;
max-width: 1920px;
margin: 0 auto;
`
const MainWrapper = ({ children, title, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={keywords}></meta>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Grid>
      <Header>
        <A href={"/"}>Главная</A>
        <A href={"/listings"}>Список товаров</A>
      </Header>
      <ScrollUpButton style={{zIndex: '1101'}}/>
      <Container>{children}</Container>
      </Grid>
      <Footer>

      </Footer>
    </>
  );
};

export default MainWrapper;
