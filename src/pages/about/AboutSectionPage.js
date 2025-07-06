import React from "react";
import SectionPage from "../../components/SectionPage";
import { aboutMap, aboutList } from "./AboutConfig";

export default function AboutSectionPage() {
  return (
    <SectionPage
      componentMap={aboutMap}
      linkList={aboutList}
      basePath="/about"
      sidebarTitle="关于"
      idParam="sectionId" 
    />
  );
}
