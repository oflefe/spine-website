import { Inter } from "next/font/google";
import React from "react";
import HeroArea from "../components/HeroArea";
import Schedule from "@/components/Schedule";
import Committee from "@/components/Committee";
import Announcement from "@/components/Announcement";
import SpeakersList from "@/components/SpeakersList";
import EventContactInfo from "@/components/EventContactInfo";

const inter = Inter({ subsets: ["latin"] });
const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12047.603289156283!2d29.1066507!3d40.9836525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7d47788c567%3A0x5bc7016e8254311e!2sMedicana%20Ata%C5%9Fehir%20Hastanesi!5e0!3m2!1str!2str!4v1707762542369!5m2!1str!2str";
const speakersData = [
  {
    name: "John Doe",
    title: "CEO of Example Corp",
  },
  {
    name: "Jane Doe",
    title: "CTO of Example Corp",
  },
  // Add more speaker objects here
];

export default function Home() {
  return (
    <>
      <HeroArea />
      <Schedule />
      <Announcement />
      <SpeakersList speakers={speakersData} />
      <Committee />
      <EventContactInfo
        email="contact@example.com"
        phone="+1234567890"
        address="123 Event Venue St, City, Country"
        mapUrl={mapUrl}
      />
    </>
  );
}
