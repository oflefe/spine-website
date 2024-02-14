import { Event } from "./components/SingleEvent";

export const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12047.603289156283!2d29.1066507!3d40.9836525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7d47788c567%3A0x5bc7016e8254311e!2sMedicana%20Ata%C5%9Fehir%20Hastanesi!5e0!3m2!1str!2str!4v1707762542369!5m2!1str!2str";
export const speakersData = [
  { name: "Emre Acaroğlu" },
  { name: "Mehmet Aydoğan" },
  { name: "İlhan Aydın" },
  { name: "Murat Baloğlu" },
  { name: "Bülent Bozyiğit" },
  { name: "Barış Çöllüoğlu" },
  { name: "Emir Darcan" },
  { name: "Adnan Demirci" },
  { name: "Serdar Ercan" },
  { name: "Metehan Eseoğlu" },
  { name: "Cengiz Gömleksiz" },
  { name: "Güçlühan Güçlü" },
  { name: "Yahya Güvenç" },
  { name: "Serdar Kahraman" },
  { name: "Numan Karaaslan" },
  { name: "Kemal Koç" },
  { name: "Hakan Millet" },
  { name: "Ender Ofluoğlu" },
  { name: "Önder Ofluoğlu" },
  { name: "Erdinç Özek" },
  { name: "Ersin Özeren" },
  { name: "Erkin Sönmez" },
  { name: "Salim Şentürk" },
  { name: "Melih Üçer" },
  { name: "Ülkün Ünlü Ünsal" },
  { name: "Eyüp Varol" },
  { name: "Onur Yaman" },
  { name: "Erdal Yayla" },
  { name: "İlhan Yılmaz" },
  { name: "Mehmet Zileli" },
];

export const emails = ["enderofluoglu@yahoo.com", "dronuryaman@yahoo.com"];
export const numbers = ["05324410928", "05065998527"];
export const eventList1: Event[] = [
  {
    time: "08:30-08:45",
    eventName: "Komplikasyon mu, hata mı?",
    omitPresentation: true,
    presentation: {
      speaker: "Mehmet Zileli",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "08:45-09:00",
    eventName: "Yanlış seviye cerrahisi nasıl önlenir?",
    omitPresentation: true,
    presentation: {
      speaker: "Murat Baloğlu",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "09:00-09:15",
    eventName: "Lomber disk cerrahisi komplikasyonları Olgu Sunumu (5 dk)",
    presentation: {
      speaker: "Barış Çöllüoğlu",
    },
    discussion: {
      speaker: "Salim Şentürk",
    },
  },
  {
    time: "09:15-09:30",
    eventName: "Lomber dar kanal cerrahisi komplikasyonları Olgu sunumu (5 dk)",
    presentation: {
      speaker: "Serdar Ercan",
    },
    discussion: {
      speaker: "Adnan Demirci",
    },
  },
  {
    time: "09:30-09:45",
    eventName:
      "Lomber füzyon cerrahisi (Dejeneratif skolyoz) komplikasyonları Olgu sunumu (5 dk)",
    presentation: {
      speaker: "Erdinç Özek",
    },
    discussion: {
      speaker: "Erkin Sönmez",
    },
  },
  {
    time: "09:45-10:00",
    eventName:
      "Servikal disk hernisi cerrahisi komplikasyonları Olgu sunumu (5 dk)",
    presentation: {
      speaker: "Erdal Yayla",
    },
    discussion: {
      speaker: "Güçlühan Güçlü",
    },
  },
  {
    time: "10:00-10:15",
    eventName:
      "Servikal dar kanal cerrahisi komplikasyonları Olgu sunumu- 5 dk",
    presentation: {
      speaker: "Hakan Millet",
    },
    discussion: {
      speaker: "Numan Karaaslan",
    },
  },
  {
    time: "10:15-10:30",
    eventName: "KAHVE ARASI",
    omitPresentation: true,
    presentation: {
      speaker: "",
    },
    discussion: {
      speaker: "",
    },
  },
];

export const eventList2: Event[] = [
  {
    time: "10:30-10:45",
    eventName:
      "İdiopatik skolyoz cerrahisinin komplikasyonları Olgu sunumu (5 dk)",
    presentation: {
      speaker: "Erkin Özeren",
    },
    discussion: {
      speaker: "Emre Acaroğlu",
    },
  },
  {
    time: "10:45-11:00",
    eventName: "VBT cerrahi komplikasyonları Olgu sunumu (5 dk)",
    presentation: {
      speaker: "Abdulhalim Akar",
    },
    discussion: {
      speaker: "Mehmet Aydoğan",
    },
  },
  {
    time: "11:00-11:15",
    eventName: "Konjenital skolyoz cerrahi komplikasyonları Olgu sunumu (5 dk)",
    presentation: {
      speaker: "Ülkün Ünsal",
    },
    discussion: {
      speaker: "Yahya Güvenç",
    },
  },
];

export const eventList3: Event[] = [
  {
    time: "11:15-11:30",
    eventName:
      "Metastatik omurga tümörlerinin cerrahi komplikasyonları Olgu sunumu (5 dk)",
    presentation: {
      speaker: "Bülent Bozyiğit",
    },
    discussion: {
      speaker: "Serdar Kahraman",
    },
  },
  {
    time: "11:30-11:45",
    eventName:
      "Primer omurga tümörlerinin cerrahi komplikasyonları Olgu sunumu (5 dk)",
    presentation: {
      speaker: "Melih Üçler",
    },
    discussion: {
      speaker: "Kemal Koç",
    },
  },
  {
    time: "11:45-12:00",
    eventName:
      "Sakral ve pelvik tümörlerin cerrahi komplikasyonları Olgu sunumu (5 dk)",
    presentation: {
      speaker: "İlhan Yılmaz",
    },
    discussion: {
      speaker: "Önder Ofluoğlu",
    },
  },
  {
    time: "12:00-13:00",
    eventName: "Yemek Arası",
    omitPresentation: true,
    presentation: {
      speaker: "",
    },
    discussion: {
      speaker: "",
    },
  },
];

export const eventList4: Event[] = [
  {
    time: "13:00-13:15",
    eventName: "Olgu sunumu 1.",
    omitPresentation: true,
    presentation: {
      speaker: "Gökhan Gökçe",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "13:15-13:30",
    eventName: "Olgu sunumu 2.",
    omitPresentation: true,
    presentation: {
      speaker: "Hakan Ak",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "13:30-13:45",
    eventName: "Olgu sunumu 3.",
    omitPresentation: true,
    presentation: {
      speaker: "Cengiz Gömleksiz",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "13:45-14:00",
    eventName: "Olgu sunumu 4.",
    omitPresentation: true,
    presentation: {
      speaker: "Metehan Eseoğlu",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "14:00-14:15",
    eventName: "Olgu sunumu 5.",
    omitPresentation: true,
    presentation: {
      speaker: "Tolga Dündar",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "14:15-14:30",
    eventName: "Olgu sunumu 6.",
    omitPresentation: true,
    presentation: {
      speaker: "Hakan korkmaz",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "14:30-14:45",
    eventName: "Olgu Sunumu 7.",
    omitPresentation: true,
    presentation: {
      speaker: "Mahmut Demirkol",
    },
    discussion: {
      speaker: "",
    },
  },
  {
    time: "14:45-15:15",
    eventName: "Kahve arası",
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
