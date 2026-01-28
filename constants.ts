import { Event } from "./components/SingleEvent";

export const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.6095971346463!2d27.4619747!3d38.6118551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b99fd0814320f3%3A0x8c4ebbe917da89ce!2zTUFOxLBTQSDFnkVIxLBSIEhBU1RBTkVTxLA!5e0!3m2!1str!2str!4v1769602647993!5m2!1str!2str";

export const speakersData = [
  { name: "Ömer Akçalı" },
  { name: "Mehmet Aydoğan" },
  { name: "Murat Baloğlu" },
  { name: "Haluk Berk" },
  { name: "İsmail Bozkurt" },
  { name: "Süleyman Çaylı" },
  { name: "Yusuf Duransoy" },
  { name: "Şafak Çine" },
  { name: "Güçlühan Güçlü" },
  { name: "Yahya Güvenç" },
  { name: "İsmail İştemen" },
  { name: "Numan Karaaslan" },
  { name: "Serdar Kahraman" },
  { name: "Mesut Mete" },
  { name: "Ender Ofluoğlu" },
  { name: "Erkin Sönmez" },
  { name: "Kamil Sucu" },
  { name: "Salim Şentürk" },
  { name: "Ülkün Ünsal" },
  { name: "Onur Yaman" },
  { name: "Mehmet Zileli" },
];


export const emails = [
  "enderofluoglu@yahoo.com"
];
export const numbers = ["+90 (555) 875 33 96"];
export const eventList1: Event[] = [
  {
    time: "09:00-09:10",
    eventName: "AÇILIŞ KONUŞMASI",
    omitPresentation: true,
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
  {
    time: "09:10-09:25",
    eventName: "KOMPLİKASYON MU? MALPRAKTİS Mİ?",
    omitPresentation: true,
    presentation: { speaker: "PROF. DR. MEHMET ZİLELİ" },
    discussion: { speaker: "" },
  },
  {
    time: "09:25-09:40",
    eventName: "OLGU-1",
    presentation: { speaker: "Yahya Güvenç" },
    discussion: { speaker: "" },
  },
  {
    time: "09:40-09:55",
    eventName: "OLGU-2",
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
  {
    time: "09:55-10:10",
    eventName: "OLGU-3",
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
  {
    time: "10:10-10:25",
    eventName: "OLGU-4",
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
  {
    time: "10:25-10:40",
    eventName: "OLGULAR EŞLİĞİNDE: KAÇINMA VE YÖNETME",
    omitPresentation: true,
    presentation: { speaker: "Yusuf Duransoy" },
    discussion: { speaker: "" },
  },
  {
    time: "10:40-11:00",
    eventName: "KAHVE ARASI",
    omitPresentation: true,
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
];
export const eventList2: Event[] = [
  {
    time: "11:00-11:15",
    eventName: "OLGU-1",
    presentation: { speaker: "Mesut Mete" },
    discussion: { speaker: "" },
  },
  {
    time: "11:15-11:30",
    eventName: "OLGU-2",
    presentation: { speaker: "Ülkün Ünsal" },
    discussion: { speaker: "" },
  },
  {
    time: "11:30-11:45",
    eventName: "OLGU-3",
    presentation: { speaker: "İsmail İştemen" },
    discussion: { speaker: "" },
  },
  {
    time: "11:45-12:00",
    eventName: "OLGU-4",
    presentation: { speaker: "Salim Şentürk" },
    discussion: { speaker: "" },
  },
  {
    time: "12:00-12:15",
    eventName: "OLGULAR EŞLİĞİNDE: KAÇINMA VE YÖNETME",
    omitPresentation: true,
    presentation: { speaker: "Ender Ofluoğlu" },
    discussion: { speaker: "" },
  },
  {
    time: "12:15-13:15",
    eventName: "ÖĞLEN YEMEĞİ",
    omitPresentation: true,
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
];
export const eventList3: Event[] = [
  {
    time: "13:15-13:30",
    eventName: "OLGU-1",
    presentation: { speaker: "Erkin Sönmez" },
    discussion: { speaker: "" },
  },
  {
    time: "13:30-13:45",
    eventName: "OLGU-2",
    presentation: { speaker: "Murat Baloğlu" },
    discussion: { speaker: "" },
  },
  {
    time: "13:45-14:00",
    eventName: "OLGU-3",
    presentation: { speaker: "İsmail Bozkurt" },
    discussion: { speaker: "" },
  },
  {
    time: "14:00-14:15",
    eventName: "OLGULAR EŞLİĞİNDE: KAÇINMA VE YÖNETME",
    omitPresentation: true,
    presentation: { speaker: "Süleyman Çaylı" },
    discussion: { speaker: "" },
  },
  {
    time: "14:15-14:30",
    eventName: "KAHVE ARASI",
    omitPresentation: true,
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
];
export const eventList4: Event[] = [
  {
    time: "14:30-14:45",
    eventName: "OLGU-1",
    presentation: { speaker: "Mehmet Aydoğan" },
    discussion: { speaker: "" },
  },
  {
    time: "14:45-15:00",
    eventName: "OLGU-2",
    presentation: { speaker: "Onur Yaman" },
    discussion: { speaker: "" },
  },
  {
    time: "15:00-15:30",
    eventName: "OLGU-3",
    presentation: { speaker: "Numan Karaaslan" },
    discussion: { speaker: "" },
  },
  {
    time: "15:30-15:45",
    eventName: "OLGU-4",
    presentation: { speaker: "Güçlühan Güçlü" },
    discussion: { speaker: "" },
  },
  {
    time: "15:45-16:00",
    eventName: "OLGULAR EŞLİĞİNDE: KAÇINMA VE YÖNETME",
    omitPresentation: true,
    presentation: { speaker: "Ömer Akçalı" },
    discussion: { speaker: "" },
  },
  {
    time: "16:00",
    eventName: "KAPANIŞ",
    omitPresentation: true,
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
];


// If your app expects eventList5..8 to exist, keep them as empty arrays:
export const eventList5: Event[] = [];
export const eventList6: Event[] = [];
export const eventList7: Event[] = [];
export const eventList8: Event[] = [];



