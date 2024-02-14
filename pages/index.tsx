import { Inter } from "next/font/google";
import React from "react";
import HeroArea from "../components/HeroArea";
import Schedule from "../components/Schedule";
import Committee from "../components/Committee";
import Announcement from "../components/Announcement";
import SpeakersList from "../components/SpeakersList";
import EventContactInfo from "../components/EventContactInfo";
import Head from "next/head";
import { eventList1, speakersData, emails, numbers, mapUrl } from "@/constants";

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Omurga Cerrahisinde Komplikasyonlar</title>
      </Head>
      <HeroArea />
      <Announcement />
      <SpeakersList speakers={speakersData} />
      <Schedule eventList={eventList1} />

      <Committee />
      <EventContactInfo
        emails={emails}
        numbers={numbers}
        address="123 Event Venue St, City, Country"
        mapUrl={mapUrl}
      />
    </>
  );
}
