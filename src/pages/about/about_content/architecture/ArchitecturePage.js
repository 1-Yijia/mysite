import React from "react";
import Project_1 from './Project1';
import Project_2 from './Project2';
import Project_3 from './Project3';
import Project_4 from './Project4';
import Project_5 from './Project5';
import Project_6 from './Project6';
import SectionPage from "../../../../components/SectionPage";
import { useLang } from "../../../../components/ToggleLang";


export const getArchitectureList = (lang = "en") => [
  {
    id: "project1",
    displayName: lang === "en" ? "Light & Shadow" : "光影",
    image: "/images/Thumbnail_1.jpg",
  },
  {
    id: "project2",
    displayName: lang === "en" ? "Labyrinth" : "繁复",
    image: "/images/Thumbnail_2.jpg",
  },
  {
    id: "project3",
    displayName: lang === "en" ? "Break Free" : "挣脱",
    image: "/images/Thumbnail_3.jpg",
  },
  {
    id: "project4",
    displayName: lang === "en" ? "Classical" : "古典",
    image: "/images/Thumbnail_4.jpg",
  },
  {
    id: "project5",
    displayName: lang === "en" ? "Weightless" : "轻盈",
    image: "/images/Thumbnail_5.jpg",
  },
  {
    id: "project6",
    displayName: lang === "en" ? "Deconstructivism" : "解构",
    image: "/images/Thumbnail_6.jpg",
  },
];

// ✅ Optional: if needed later to map id → component
export const architectureMap = {
  project1: Project_1,
  project2: Project_2,
  project3: Project_3,
  project4: Project_4,
  project5: Project_5,
  project6: Project_6,
};

export default function ArchitectureProjectPage() {
  const { lang } = useLang();
  const architectureList = getArchitectureList(lang);
  return (
    <SectionPage
      componentMap={architectureMap}
      linkList={architectureList}
      basePath="/about/about_content/architecture"
      sidebarTitle={lang === "en" ? "Architecture Projects" : "过往项目"}
      fallbackMessage="项目不存在"
      idParam="id" // default param name, can omit
    />
  );
}