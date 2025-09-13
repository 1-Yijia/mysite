import Europe_2014 from './journey_content/2014_Europe';
import Bali_2014 from './journey_content/2014_Bali';
import Munich_Paris_2015 from './journey_content/2015_Munich+Paris';
import Spain_2015 from './journey_content/2015_Spain';
import Italy_2015 from './journey_content/2015_Italy';
import Australia_2023 from './journey_content/2023_Australia';
import Scotland_2024 from './journey_content/2024_Scotland';


export const journeyList = [
  { id: "europe", name: { en: "2014 Europe", cn: "2014 西欧" } },
  { id: "bali", name: { en: "2014 Bali", cn: "2014 巴厘岛" } },
  { id: "Munich_Paris", name: { en: "2015 Munich+Paris", cn: "2015 慕尼黑 + 巴黎" } },
  { id: "Spain", name: { en: "2015 Spain", cn: "2015 西班牙" } },
  { id: "Italy", name: { en: "2015 Italy", cn: "2015 意大利" } },
  { id: "australia", name: { en: "2023 Australia", cn: "2023 澳大利亚" } },
  { id: "scotland", name: { en: "2024 Scotland", cn: "2024 苏格兰" } },
];


export const journeyMap = {
  europe: Europe_2014,
  bali: Bali_2014,
  Munich_Paris: Munich_Paris_2015,
  Spain: Spain_2015,
  Italy: Italy_2015,
  australia: Australia_2023,
  scotland: Scotland_2024,
};

export const getJourneyListByLang = (lang) =>
  journeyList.map((item) => ({
    ...item,
    displayName: item.name[lang],
  }));
