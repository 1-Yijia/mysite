export const applicationsList = [
  {
    id: "roadmap-tool",
    name: { en: "Roadmap Tool", cn: "路线图工具" },
    description: {
      en: "Drag, plan, export — turn a messy feature list into a polished roadmap.",
      cn: "拖拽排期，一键导出精美路线图。",
    },
    externalUrl: "https://roadmap-tool-yijia.vercel.app/",
  },
];

/**
 * Get applicationsList with labels/descriptions mapped to the current language
 * @param {string} lang - "en" or "cn"
 * @returns array with displayName and localized description
 */
export const getApplicationsListByLang = (lang) =>
  applicationsList.map((item) => ({
    ...item,
    displayName: item.name[lang],
    description: item.description[lang],
  }));
