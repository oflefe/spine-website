import { Inter } from "next/font/google";
import React from "react";
import HeroArea from "../components/HeroArea";
import Schedule from "@/components/Schedule";
import Committee from "@/components/Committee";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroArea />
      <Schedule />
      <Committee />
    </>
  );
}
