import SelfIntro from './SelfIntro';
import AboutSite from './AboutSite';
import ModelPhoto from './ModelPhoto';

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
