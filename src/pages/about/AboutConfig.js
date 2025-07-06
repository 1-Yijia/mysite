import SelfIntro from './about_content/SelfIntro';
import AboutSite from './about_content/AboutSite';
import ModelPhoto from './about_content/ModelPhoto';

export const aboutList = [
  { id: "self", name: "我的自述" },
  { id: "site", name: "这个网站" },
  { id: "model", name: "模型照片" },
];

export const aboutMap = {
  self: SelfIntro,
  site: AboutSite,
  model: ModelPhoto,
};
