// src/pages/about/AboutSite.js
import React from "react";
import "./AboutPage.css";

export default function AboutSite() {
  return (
    <div className="about-content">
      <p>
        <strong>这个网站，是我一边摸索、一边搭建的自留地。</strong><br />
        没有模板，没有 CMS，<br />
        所有页面、结构、动效与布局，<br />
        都是我亲手在chatgpt的帮助下一行行写下的 :P
      </p>
      <p></p>
      <p>
        <strong>Tech Stack</strong><br />
        本站使用 <strong>React + React Router</strong> 实现前端构建，<br />
        样式通过 <strong>纯 CSS + 自定义媒体查询</strong> 控制响应式布局，<br />
        组件结构模块化
        目前仅为前端构建。<br />
        接下来会逐步增加网站功能搭建后端<br />
      </p>
      <p></p>
      <p>
        <strong>创作与呈现</strong><br />
        页面内容以最小化的文字和干净的图片为主，<br />
        「旅程」与「故事」是我亲历或虚构的片段，<br />
        希望通过轻量的段落、配图、地图，<br />
        营造一种自我沉浸、也可供人浏览的空间感。
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
      <p>
        <strong>为什么自己做？</strong><br />
        因为我想要一种完全属于自己的表达方式，<br />
        <strong>我很享受这种按照自己想法慢慢搭建一个世界的感觉。</strong><br />
      </p>
    </div>
  );
}
