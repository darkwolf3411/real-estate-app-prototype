import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ItemContext } from "../context/context";
import { FilterContext } from "../context/FilterContext";

const theme = {
  colors: {
    accent: "#ffb74d",
    text_color: "#2f3640",
  },
  fonts: {
    primary: `'Roboto', sans-serif`,
  },
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px)",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  const [listings, setListings] = useState([]);
  const [confirmFilter, setConfirm] = useState(false);
  const [filter, setFilter] = useState({
    maxPrice: null,
    countOfGarage: null,
    countOfBadroom: null,
    maxSquare: null,
    type: null,
  });
  const [useInfinity, setInfinity] = useState(false);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <FilterContext.Provider
          value={{
            confirmFilter,
            setConfirm,
            setFilter,
            filter,
          }}
        >
          <ItemContext.Provider
            value={{
              useInfinity,
              setInfinity,
              listings,
              setListings,
            }}
          >
            <Component {...pageProps} />
          </ItemContext.Provider>
        </FilterContext.Provider>
      </ThemeProvider>
    </>
  );
}
