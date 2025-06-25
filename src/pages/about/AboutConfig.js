// 先导入 3 个子页面组件
import SelfIntro from './SelfIntro';
import AboutSite from './AboutSite';
// import ModelPhotos from './ModelPhotos';

// Sidebar 列表（用于显示和跳转）
export const aboutList = [
  { id: "self", name: "我的自述" },
  { id: "site", name: "这个网站" },
//   { id: "model", name: "模型照片" },
];

// 对应路由与组件的映射
export const aboutMap = {
  self: SelfIntro,
  site: AboutSite,
//   model: ModelPhotos,
};
