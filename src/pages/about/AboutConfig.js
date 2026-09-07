import SelfIntro from './about_content/SelfIntro';
import AboutSite from './about_content/AboutSite';

export const aboutList = [
  { id: "self", name: { en: "About Me", cn: "我的自述" } },
  { id: "site", name: { en: "About Site", cn: "这个网站" } },
];

export const aboutMap = {
  self: SelfIntro,
  site: AboutSite,
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