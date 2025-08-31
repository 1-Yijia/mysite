import React from "react";
import SectionCover from "../../components/SectionCover";
import { useLang } from "../../components/ToggleLang";
import { getAboutListByLang } from "./AboutConfig";

export default function AboutCover() {
  const { lang } = useLang();
  const itemsWithLabel = getAboutListByLang(lang);
  console.log("StoryCover items:", itemsWithLabel); 

  return (
    <SectionCover
      items={itemsWithLabel}
      basePath="/about"
      getLinkPath={(id) => `/about/${id}`}
    />
  );
}
