import React from "react";
import { useParams } from "react-router-dom";
import SharedSectionLayout from "../../components/SharedSectionLayout";
import Sidebar from "../../components/Sidebar";
import { aboutMap, aboutList } from "./AboutConfig";
import "./AboutPage.css";

export default function AboutPage() {
  const { sectionId } = useParams();
  const SectionComponent = aboutMap[sectionId];

  if (!SectionComponent) {
    return <div>内容不存在</div>;
  }

  return (
    <SharedSectionLayout
      sidebar={
        <Sidebar
          variant="full"
          title="关于"
          links={aboutList}
          currentId={sectionId}
          basePath="/about"
          alwaysExpanded={true}
        />
      }
    >
      <div className="about-content">
        <SectionComponent />
      </div>
    </SharedSectionLayout>
  );
}
