import { getArchitectureList, architectureMap } from "../about/about_content/architecture/ArchitecturePage";
import RoadmapTool from "./applications_content/RoadmapTool";

const roadmapToolItem = {
  id: "roadmap-tool",
  name: { en: "Roadmap Tool", cn: "路线图工具" },
  description: {
    en: "Drag, plan, export — turn a messy feature list into a polished roadmap.",
    cn: "拖拽排期，一键导出精美路线图。",
  },
  image: "/images/Thumbnail_roadmap-tool.png",
};

export const applicationsMap = {
  "roadmap-tool": RoadmapTool,
  ...architectureMap,
};

/**
 * Get the Projects section list (apps + past architecture projects) with labels
 * mapped to the current language.
 * @param {string} lang - "en" or "cn"
 * @returns array with displayName property
 */
export const getApplicationsListByLang = (lang) => [
  {
    ...roadmapToolItem,
    displayName: roadmapToolItem.name[lang],
    description: roadmapToolItem.description[lang],
  },
  ...getArchitectureList(lang),
];
