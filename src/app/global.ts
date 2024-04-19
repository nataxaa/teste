"use client"

import { createGlobalStyle } from "styled-components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const GlobalStyle = createGlobalStyle`



  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family:${roboto.style.fontFamily};
  }

  

`

