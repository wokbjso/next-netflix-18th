import { DefaultTheme } from "styled-components";

import localFont from "next/font/local";

const SF_PRO_DISPLAY = localFont({
  src: [{ path: "../font/SF-Pro-Display-Regular.otf" }],
});

export const theme: DefaultTheme = {
  colors: {
    red: "#DB202C",
    black: "#000000",
    white: "#FFFFFF",
    gray1: "#8C8787",
    gray2: "#C4C4C4",
  },
  fontStyles: {
    header: `
      font-family: ${SF_PRO_DISPLAY};
      font-size: 1.7rem;
      font-style: normal;
      font-weight: 400;
      line-height: 30%; 
      letter-spacing: -0.762px;
    `,
    body0: `
    font-family: ${SF_PRO_DISPLAY};
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 74%; 
    letter-spacing: -0.073px;
  `,
    body1: `
    font-family: ${SF_PRO_DISPLAY};
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 74%; 
    letter-spacing: -0.057px;
  `,
  },
};
