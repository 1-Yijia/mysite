// src/pages/about/AboutSite.js
import React from "react";
import { useLang } from "../../../components/ToggleLang";


const content = {
  cn: (<div>
    <p>
      <strong>这个网站，是我一边摸索、一边搭建的。</strong><br />
      因为我即会设计又会编码，同时还有一身的故事<br />
      所有页面、结构、动效与布局，<br />
      都是我亲手在chatgpt的帮助下一行行写下的 :P
    </p>
    <p></p>
    <p>
      <strong>为什么做？</strong><br />
      因为我想要一种完全属于自己的表达方式，<br />
      <strong>我很享受这种按照自己想法慢慢搭建一个世界的感觉。</strong><br />
      也因为我经历了太多，<br />
      现在是时候，我从经历者的角度转换到叙述者的角度<br />
      讲述自己的故事，编织自己的世界。<br />
    </p>
    <p></p>
    <p>
      <strong>Tech Stack</strong><br />
      本站使用 <strong>React + React Router</strong> 实现前端构建，<br />
      目前仅为前端构建。<br />
      接下来会逐步增加网站功能搭建后端<br />
    </p>
    <p></p>
    <p>
      <strong>创作与呈现</strong><br />
      图片不是我拍的就是我做的<br />
      故事不是我亲历的就是我编的<br />
      code不是我写的就是我抄的<br />
    </p>
    <p></p>
    <p>
      <strong>开发节奏</strong><br />
      网站功能随着灵感与需求自然生长：<br />
      一开始是纯粹写故事，<br />
      后来想加入旅行的轨迹，<br />
      所以代码一直在边写边拆边重构。
    </p>
    <p></p>
  </div>),
  en: (<div>
    <p>
      <strong>I built this website from scratch</strong><br />
      I've always wanted my own website, a clean URL without any funny addendum.<br />
    </p>
    <p></p>
    <p>
      <strong>Why this website?</strong><br />
      I value personal voice, even though no one else gives a damn<br />
      Also becasue I've been through a lot<br />
      Now I'm finally ready to translate experience into words<br />
      To quantify the pain, to tell my tales, to bring clarity to my life<br />
    </p>
    <p></p>
    <p>
      <strong>Tech Stack</strong><br />
      React + React Router for frontend<br />
      I will slowly increase functionality on this site<br />
    </p>
    <p></p>
    <p>
      <strong>Creation</strong><br />
      Images here are either taken or created by me<br />
      Stories here are either lived or made up by me<br />
      Displays here are either designed or copied from somewhere else by me <br />
    </p>
    <p></p>
    <p>
      <strong>Updates</strong><br />
      Growth is organic<br />
      But I try to update it at regular interval<br />
      either frontend functionality or backend code refactoring and maintenability.<br />
    </p>
    <p></p>
  </div>)
}

export default function AboutSite() {
  const { lang } = useLang();
  return content[lang];
}
