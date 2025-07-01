import React from "react";
import { aboutList } from "./AboutConfig";
import SectionCover from "../../components/SectionCover";

export default function AboutCover() {
  return (
    <SectionCover
      items={aboutList}
      basePath="/about"
      getLinkPath={(id) => `/about/${id}`}
    />
  );
}
