import SelfIntro from './about_content/SelfIntro';
import AboutSite from './about_content/AboutSite';
import ModelPhoto from './about_content/ModelPhoto';

export const aboutList = [
  { id: "self", name: { en: "About Me", cn: "我的自述" } },
  { id: "site", name: { en: "About Site", cn: "这个网站" } },
  { id: "model", name: { en: "Past Projects", cn: "建筑项目" } },
];

export const aboutMap = {
  self: SelfIntro,
  site: AboutSite,
  model: ModelPhoto,
};

/**
 * Get aboutList with labels mapped to the current language
 * @param {string} lang - "en" or "cn"
 * @returns array with displayName property
 */
export const getAboutListByLang = (lang) =>
  aboutList.map((item) => ({
    ...item,
    displayName: item.name[lang],
  }));