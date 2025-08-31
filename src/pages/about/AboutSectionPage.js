import React from "react";
import SectionPage from "../../components/SectionPage";
import { aboutMap } from "./AboutConfig";
import { useLang } from "../../components/ToggleLang";
import { getAboutListByLang } from "./AboutConfig";

export default function AboutSectionPage() {
  const { lang } = useLang();
  const aboutListWithLabel = getAboutListByLang(lang);

  return (
    <SectionPage
      componentMap={aboutMap}
      linkList={aboutListWithLabel}
      basePath="/about"
      sidebarTitle={lang === "en" ? "About" : "关于"}
      idParam="sectionId" 
    />
  );
}
