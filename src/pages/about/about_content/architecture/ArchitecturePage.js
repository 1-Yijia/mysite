import React from "react";
import Project_1 from './Project1';
import Project_2 from './Project2';
import Project_3 from './Project3';
import Project_4 from './Project4';
import Project_5 from './Project5';
import Project_6 from './Project6';
import SectionPage from "../../../../components/SectionPage";


export const architectureList = [
  {
    id: "project1",
    title: "光影",
    image: "/images/Thumbnail_1.jpg",
  },
  {
    id: "project2",
    title: "繁复",
    image: "/images/Thumbnail_2.jpg",
  },
  {
    id: "project3",
    title: "挣脱",
    image: "/images/Thumbnail_3.jpg",
  },
  {
    id: "project4",
    title: "古典",
    image: "/images/Thumbnail_4.jpg",
  },
  {
    id: "project5",
    title: "轻盈",
    image: "/images/Thumbnail_5.jpg",
  },
    {
    id: "project6",
    title: "解构",
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
  return (
    <SectionPage
      componentMap={architectureMap}
      linkList={architectureList}
      basePath="/about/about_content/architecture"
      sidebarTitle="模型照片"
      fallbackMessage="项目不存在"
      idParam="id" // default param name, can omit
    />
  );
}