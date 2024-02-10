import { Inter } from "next/font/google";
import React from "react";
import HeroArea from "../components/HeroArea";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroArea />
    </>
  );
}
