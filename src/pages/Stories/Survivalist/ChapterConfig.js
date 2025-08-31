//Update here for new chapters addition
import DuanlianChapter1 from './Chap_1';
import DuanlianChapter2 from './Chap_2';
import DuanlianChapter3 from './Chap_3';
import DuanlianChapter4 from './Chap_4';
import DuanlianChapter5 from './Chap_5';
import DuanlianChapter6 from './Chap_6';
import DuanlianChapter7 from './Chap_7';
import DuanlianChapter8 from './Chap_8';


export const chapterTitles = [
  { number: 1, title: "一 那个女人是谁" },
  { number: 2, title: "二 别人家的孩子" },
  { number: 3, title: "三 新加坡" },
  { number: 4, title: "四 纸包不住火" },
  { number: 5, title: "五 心里的天平" },
  { number: 6, title: "六 短发" },
  { number: 7, title: "七 心理咨询" },
  { number: 8, title: "八 高中生活" },
];

export const chapterMap = {
  1: DuanlianChapter1,
  2: DuanlianChapter2,
  3: DuanlianChapter3,
  4: DuanlianChapter4,
  5: DuanlianChapter5,
  6: DuanlianChapter6,
  7: DuanlianChapter7,
  8: DuanlianChapter8,
};

/**
 * Map chapters for SectionCover / SectionPage
 * @returns array of { id, displayName }
 */
export const getChapterLinks = () =>
  chapterTitles.map(({ number, title }) => ({
    id: number,
    displayName: title,
  }));