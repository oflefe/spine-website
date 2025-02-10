import { Event } from "./components/SingleEvent";

export const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.689353664484!2d32.81292137721361!3d39.903586886709206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f516d319681%3A0xe3fa091e9b309e00!2sMemorial%20Ankara%20Hastanesi!5e0!3m2!1sen!2str!4v1738867097471!5m2!1sen!2str";

export const speakersData = [
  { name: "Mehmet Aydoğan" },
  { name: "Murat Baloğlu" },
  { name: "İsmail Bozkurt" },
  { name: "Suat Canbay" },
  { name: "Şükrü Çağlar" },
  { name: "Adnan Demirci" },
  { name: "Uygur Er" },
  { name: "Serdar Ercan" },
  { name: "Akın Gökçedağ" },
  { name: "Güçlühan Güçlü" },
  { name: "Yahya Güvenç" },
  { name: "Aşkın Esen Hastürk" },
  { name: "İsmail İştemen" },
  { name: "Ender Ofluoğlu" },
  { name: "Önder Ofluoğlu" },
  { name: "Hakan Sabuncuoğlu" },
  { name: "Erkin Sönmez" },
  { name: "Salim Şentürk" },
  { name: "Serdar Kahraman" },
  { name: "Numan Karaaslan" },
  { name: "Oğuz Karaeminoğlulları" },
  { name: "Kemal Koç" },
  { name: "Hakan Millet" },
  { name: "Melih Üçer" },
  { name: "Ülkün Ünsal" },
  { name: "Eyüp Varol" },
  { name: "Onur Yaman" },
  { name: "Ersal Yayla" },
  { name: "İlhan Yılmaz" },
  { name: "Mehmet Zileli" },
  { name: "Bülent Bozyiğit" },
];

export const emails = [
  "enderofluoglu@yahoo.com",
  "erkinso@gmail.com",
  "ibozkurt85@gmail.com",
];
export const numbers = ["05324410928", "05326212514", "05313670930"];
export const eventList1: Event[] = [
  {
    time: "08:45-09:00",
    eventName: "Açılış Konuşması",
    omitPresentation: true,
    presentation: {
      speaker: "",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "09:00-09:10",
    eventName: "OLGU-1, C1-2 VİDALAMA İMPLANT KOMPLİKASYONU",
    omitPresentation: true,
    presentation: {
      speaker: "ŞAKİR EKŞİ",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "09:10-09:20",
    eventName: "OLGU-2, TORAKAL KAFES MALPOZİSYONU-VİDA KIRILMASI",
    presentation: {
      speaker: "DEMET EVLEKSİZ KARIMZADA",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "09:20-09:30",
    eventName: "OLGU-3   ENSTRÜMANTASYON SONRASI NÖROLOJİK DEFİSİT",
    presentation: {
      speaker: "BETÜL YAMAN",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "09:30-09:40",
    eventName: "OLGU-4. LOMBER CERRAHİ SONRASI VİDA KIRILMASI",
    presentation: {
      speaker: "HÜSEYİN ANIL ÖZMAT",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "09:40-09:50",
    eventName: "EN KÖTÜ VAKAM",
    presentation: {
      speaker: "YAHYA GÜVENÇ",
    },
    discussion: {
      speaker: "",
    },
  },
];

export const eventList2: Event[] = [
  {
    time: "09:50-10:00",
    eventName: "OLGU-1   SERVİKAL KORPEKTOMİ",
    presentation: {
      speaker: "EYLEM EREN EYÜPOĞLU",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "10:00-10:10",
    eventName: "OLGU-2 ANT-POST SERVİKAL CERRAHİ KOMPLİKASYONU",
    presentation: {
      speaker: "FATMA HEDİYE ERZURUMLU",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "10:10-10:20",
    eventName: "OLGU-3 POSTERİOR SERVİKAL CERRAHİ KOMPLİKASYONU",
    presentation: {
      speaker: "CELAL",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "10:20-10:30",
    eventName: "OLGU-4 NÜKS-REZİDÜ DİSK HERNİSİ",
    presentation: {
      speaker: "KADİR GEM",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "10:30-10:40",
    eventName: "EN KÖTÜ VAKAM",
    presentation: {
      speaker: "NUMAN KARAASLAN",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "10:40-11:00",
    eventName: "KAHVE MOLASI",
    presentation: {
      speaker: "",
    },
    discussion: {
      speaker: "",
    },
  },
];

export const eventList3: Event[] = [
  {
    time: "11:00-11:10",
    eventName: "OLGU-1  MENİNGOMYELOSEL-KİFOZ",
    presentation: {
      speaker: "HARUN DEMİRCİ",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "11:10-11:20",
    eventName: "OLGU-2",
    presentation: {
      speaker: "GÖKHAN DEMİRKIRAN",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "11:20-11:30",
    eventName: "OLGU-3",
    presentation: {
      speaker: "RAFİK RAMAZANOV",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "11:30-11:40",
    eventName: "OLGU-4",
    presentation: {
      speaker: "MEHMET AYDOĞAN",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "11:40-11:50",
    eventName: "EN KÖTÜ VAKAM",
    presentation: {
      speaker: "İSMAİL BOZKURT",
    },
    discussion: {
      speaker: "",
    },
  },
];

export const eventList4: Event[] = [
  {
    time: "11:50-12:00",
    eventName: "OLGU-1 L4 PATOLOJİK FRAKTÜR",
    omitPresentation: true,
    presentation: {
      speaker: "ATAHAN DURGAL",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "12:00-12:10",
    eventName: "OLGU-2 TORAKAL MET ? SONRASI KOMPLİKASYON",
    omitPresentation: true,
    presentation: {
      speaker: "ATAHAN DURGAL",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "12:10-12:20",
    eventName: "OLGU-3",
    omitPresentation: true,
    presentation: {
      speaker: "",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "12:20-12:30",
    eventName: "OLGU-4",
    omitPresentation: true,
    presentation: {
      speaker: "",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "12:30-12:40",
    eventName: "EN KÖTÜ VAKAM",
    omitPresentation: true,
    presentation: {
      speaker: "MURAT BALOĞLU",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "12:40-13:30",
    eventName: "ÖĞLEN YEMEĞİ",
    omitPresentation: true,
    presentation: {
      speaker: "",
    },
    discussion: {
      speaker: "",
    },
  },
];

export const eventList5: Event[] = [
  {
    time: "15:15-15:30",
    eventName: "Olgu sunumu 7",
    omitPresentation: true,
    presentation: {
      speaker: "Birol Özkal",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "15:30-15:45",
    eventName: "Olgu sunumu 8",
    omitPresentation: true,
    presentation: {
      speaker: "Oğuz Balkış",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "15:45-16:00",
    eventName: "Olgu sunumu 9",
    omitPresentation: true,
    presentation: {
      speaker: "İnan Uzunoğlu",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "16:00-16:15",
    eventName: "Olgu sunumu 10",
    omitPresentation: true,
    presentation: {
      speaker: "Barış Yaşar",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "16:15-16:30",
    eventName: "Olgu sunumu 11",
    omitPresentation: true,
    presentation: {
      speaker: "Gülyara Çiğdem",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "16:30-16:45",
    eventName: "Olgu sunumu 12",
    omitPresentation: true,
    presentation: {
      speaker: "Kemal Keşmer",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "16:45-17:00",
    eventName: "Olgu Sunumu 13",
    omitPresentation: true,
    presentation: {
      speaker: "Hidayet Şafak Çine",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "17:00",
    eventName: "KAPANIŞ",
    omitPresentation: true,
    presentation: {
      speaker: "",
    },
    discussion: {
      speaker: "",
    },
  },
];
