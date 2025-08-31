import Europe_2014 from './journey_content/2014_Europe';
import Bali_2014 from './journey_content/2014_Bali';
import Australia_2023 from './journey_content/2023_Australia';
import Scotland_2024 from './journey_content/2024_Scotland';


export const journeyList = [
  { id: "europe", name: { en: "2014 Europe", cn: "2014 西欧" } },
  { id: "bali", name: { en: "2014 Bali", cn: "2014 巴厘岛" } },
  { id: "australia", name: { en: "2023 Australia", cn: "2023 澳大利亚" } },
  { id: "scotland", name: { en: "2024 Scotland", cn: "2024 苏格兰" } },
];


export const journeyMap = {
  europe: Europe_2014,
  bali: Bali_2014,
  australia: Australia_2023,
  scotland: Scotland_2024,
};

export const getJourneyListByLang = (lang) =>
  journeyList.map((item) => ({
    ...item,
    displayName: item.name[lang],
  }));
