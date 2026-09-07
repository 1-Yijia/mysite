import React from "react";
import { useLang } from "../../../components/ToggleLang";

const ROADMAP_TOOL_URL = "https://roadmap-tool-yijia.vercel.app/";
const GITHUB_URL = "https://github.com/1-Yijia/roadmap_tool";

const content = {
  en: (
    <>
      <h2>Roadmap Tool</h2>
      <p>
        Excel and Google Sheets were never built for roadmapping — they just happened
        to be the only thing around. A roadmap tab is usually a grid of merged cells
        pretending to be a Gantt chart: every date shift means dragging cell borders,
        every product line or workstream is another set of columns to keep in sync by
        hand, and sharing it means exporting a screenshot that's already stale by the
        time someone opens it. So I built the tool I wanted instead.
      </p>
      <video src="/videos/roadmap-tool-intro.mp4" controls playsInline />
      <p>
        Roadmap Planner is a lightweight, purpose-built roadmapping tool: plan features
        and stages on an interactive timeline, group them by product and market, and
        share a clean visual instead of a spreadsheet link nobody wants to open.
      </p>
      <p><strong>Why it's different</strong></p>
      <ul>
        <li>
          <strong>Drag to plan, not to fight cells.</strong> Click and drag straight on
          the timeline to create, move, or resize a stage — no formulas, no merged
          cells, no fixing broken borders after every edit.
        </li>
        <li>
          <strong>Holidays baked into the timeline.</strong> Register public holidays
          once and see them as shaded bands across every stage, so planned dates
          account for them from the start.
        </li>
        <li>
          <strong>Context lives with the plan.</strong> Attach a note to any feature
          right where it's being planned, instead of a separate doc that drifts out
          of sync.
        </li>
        <li>
          <strong>Share a plan, not a link to a sheet.</strong> Export any feature
          straight to a styled Excel file, or back up/restore the whole roadmap as a
          single file.
        </li>
        <li>
          <strong>Private by default.</strong> Everything runs entirely in your
          browser — no accounts, no backend, no config to set up.
        </li>
      </ul>
      <p>
        Roadmap Planner is fully client-side — your roadmap lives in your browser's
        local storage, not on a server. That makes it fast and private, but it also
        means clearing your browser's site data will clear your roadmap too. Use the
        Export button regularly to back it up.
      </p>
      <p>
        🔗 Try it live: <a href={ROADMAP_TOOL_URL} target="_blank" rel="noopener noreferrer">roadmap-tool-yijia.vercel.app</a>
        <br />
        GitHub: <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">{GITHUB_URL}</a>
      </p>
    </>
  ),
  cn: (
    <>
      <h2>路线图工具</h2>
      <p>
        Excel 和 Google Sheets 从来都不是为路线图规划而生的——它们只是恰好触手可及。
        排期表往往是一堆合并单元格伪装成的甘特图：改一次日期就要拖动单元格边框，
        每加一个产品线或工作流就要多同步一组列，分享出去的往往是一张早已过时的截图。
        于是我做了一个自己想要的工具。
      </p>
      <video src="/videos/roadmap-tool-intro.mp4" controls playsInline />
      <p>
        Roadmap Planner 是一款轻量、专注的路线图工具：在交互式时间轴上规划功能与阶段，
        按产品和市场分组，分享一张清晰的可视化图，而不是没人愿意点开的表格链接。
      </p>
      <p><strong>它的不同之处</strong></p>
      <ul>
        <li>
          <strong>拖拽即可规划，而不是和单元格较劲。</strong>
          直接在时间轴上点击拖动即可创建、移动或调整阶段——没有公式，没有合并单元格，
          也不用每次编辑后修复错乱的边框。
        </li>
        <li>
          <strong>假期直接嵌入时间轴。</strong>
          预先登记法定假期，即可在每个阶段上看到对应的阴影提示，排期从一开始就把假期考虑在内。
        </li>
        <li>
          <strong>备注与计划同在。</strong>
          可以直接为某个功能添加备注，而不是另开一份容易脱节的文档。
        </li>
        <li>
          <strong>分享的是计划，而不是表格链接。</strong>
          可将任意功能导出为精美的 Excel 文件，也可备份/恢复整份路线图。
        </li>
        <li>
          <strong>默认保护隐私。</strong>
          所有数据都在浏览器本地运行——无需账号，无需后端，无需任何配置。
        </li>
      </ul>
      <p>
        Roadmap Planner 完全在客户端运行——你的路线图保存在浏览器本地存储中，而非服务器上。
        这让它更快、更私密，但清除浏览器数据也会清空路线图，请定期使用「导出」功能备份。
      </p>
      <p>
        🔗 在线体验：<a href={ROADMAP_TOOL_URL} target="_blank" rel="noopener noreferrer">roadmap-tool-yijia.vercel.app</a>
        <br />
        GitHub：<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">{GITHUB_URL}</a>
      </p>
    </>
  ),
};

export default function RoadmapTool() {
  const { lang } = useLang();
  return <div>{content[lang]}</div>;
}
