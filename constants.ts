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
    time: "09.00–09.10",
    eventName: "Açılış Konuşması",
    omitPresentation: true,
    presentation: { speaker: "Ender Ofluoğlu – Ülkün Ünsal" },
    discussion: { speaker: "" },
  },
  {
    time: "09.10–09.25",
    eventName: "Komplikasyon mu? Malpraktis mi?",
    omitPresentation: true,
    presentation: { speaker: "Prof. Dr. Mehmet Zileli" },
    discussion: { speaker: "" },
  },
  {
    time: "09.25–09.40",
    eventName: "Olgu-1: C6-7 Dislokasyon-Revizyon",
    presentation: { speaker: "Dr. Canan Subaşı Kalaycı" },
    discussion: { speaker: "" },
  },
  {
    time: "09.40–09.55",
    eventName: "Olgu-2: C1-2 Fiksasyon",
    presentation: { speaker: "Dr. Umut Tan Sevgi" },
    discussion: { speaker: "" },
  },
  {
    time: "09.55–10.10",
    eventName: "Olgu-3: C7 Fraktürü sonrası Pull-out",
    presentation: { speaker: "Dr. Ahmet Sancar Topal" },
    discussion: { speaker: "" },
  },
  {
    time: "10.10–10.25",
    eventName: "Olgu-4: Kifoplasti sonrası Korpektomiye gidiş",
    presentation: { speaker: "Dr. Efecan Erişken" },
    discussion: { speaker: "" },
  },
  {
    time: "10.25–10.40",
    eventName: "Olgular Eşliğinde: Kaçınma ve Yönetme",
    omitPresentation: true,
    presentation: { speaker: "Kamil Sucu" },
    discussion: { speaker: "" },
  },
  {
    time: "10.40–11.00",
    eventName: "Kahve Arası",
    omitPresentation: true,
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
];
export const eventList2: Event[] = [
  {
    time: "11.00–11.15",
    eventName: "Olgu-1: Lomber enstrüman sonrası 6. Kranial sinir paralizisi",
    presentation: { speaker: "Dr. M. Fatih Sarı" },
    discussion: { speaker: "" },
  },
  {
    time: "11.15–11.30",
    eventName: "Olgu-2: Lomber Dar kanal Cerrahisi Revizyonu",
    presentation: { speaker: "Dr. Bilal Bahadır Akbulut" },
    discussion: { speaker: "" },
  },
  {
    time: "11.30–11.45",
    eventName: "Olgu-3: Dejeneratif omurga cerrahisi revizyonu",
    presentation: { speaker: "Dr. Eyüp Varol" },
    discussion: { speaker: "" },
  },
  {
    time: "11.45–12.00",
    eventName: "Olgu-4",
    presentation: { speaker: "Dr. Şafak Çine" },
    discussion: { speaker: "" },
  },
  {
    time: "12.00–12.15",
    eventName: "Olgular Eşliğinde: Kaçınma ve Yönetme",
    omitPresentation: true,
    presentation: { speaker: "Ender Ofluoğlu" },
    discussion: { speaker: "" },
  },
  {
    time: "12.15–13.15",
    eventName: "Öğlen Yemeği",
    omitPresentation: true,
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
];
export const eventList3: Event[] = [
  {
    time: "13.15–13.30",
    eventName: "Olgu-1: Uterus Ca Torakal Met",
    presentation: { speaker: "Dr. Salim Katar" },
    discussion: { speaker: "" },
  },
  {
    time: "13.30–13.45",
    eventName: "Olgu-2: Sakrum Tümörü",
    presentation: { speaker: "Dr. Güçlühan Güçlü" },
    discussion: { speaker: "" },
  },
  {
    time: "13.45–14.00",
    eventName: "Olgu-3: Primer Omurga",
    presentation: { speaker: "Dr. İsmail İştemen" },
    discussion: { speaker: "" },
  },
  {
    time: "14.00–14.15",
    eventName: "Olgu-4: Lomber Transforaminal enjeksiyon sonrası Apse",
    presentation: { speaker: "Dr. İlker Deniz Cingöz" },
    discussion: { speaker: "" },
  },
  {
    time: "14.15–14.30",
    eventName: "Olgular Eşliğinde: Kaçınma ve Yönetme",
    omitPresentation: true,
    presentation: { speaker: "Süleyman Çaylı" },
    discussion: { speaker: "" },
  },
  {
    time: "14.30–14.45",
    eventName: "Kahve Arası",
    omitPresentation: true,
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
];
export const eventList4: Event[] = [
  {
    time: "14.30–14.45",
    eventName: "Olgu-1: Erişkin Deformite",
    presentation: { speaker: "Dr. İsmail Bozkurt" },
    discussion: { speaker: "" },
  },
  {
    time: "14.45–15.00",
    eventName: "Olgu-2: Erişkin Deformite Komplikasyonu",
    presentation: { speaker: "Dr. Hakan Millet" },
    discussion: { speaker: "" },
  },
  {
    time: "15.15–15.30",
    eventName: "Olgu-3: Erişkin Deformite Komplikasyonu",
    presentation: { speaker: "Dr. Baran Uyanık" },
    discussion: { speaker: "" },
  },
  {
    time: "15.30–15.45",
    eventName: "Olgu-4: Lomber Distal Junction Kifozu",
    presentation: { speaker: "Dr. Emin Aksu" },
    discussion: { speaker: "" },
  },
  {
    time: "15.45–16.00",
    eventName: "Olgular Eşliğinde: Kaçınma ve Yönetme",
    omitPresentation: true,
    presentation: { speaker: "Mehmet Aydoğan" },
    discussion: { speaker: "" },
  },
];


export const eventList5: Event[] = [
  {
    time: "16.00–16.15",
    eventName: "Olgu 1",
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
  {
    time: "16.15–16.30",
    eventName: "Olgu 2",
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
  {
    time: "16.30–16.45",
    eventName: "Olgu 3",
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
  {
    time: "16.45–17.00",
    eventName: "Olgu 4",
    presentation: { speaker: "" },
    discussion: { speaker: "" },
  },
];
export const eventList6: Event[] = [];
export const eventList7: Event[] = [];
export const eventList8: Event[] = [];
