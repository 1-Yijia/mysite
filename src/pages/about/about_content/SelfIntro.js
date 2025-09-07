// src/pages/about/SelfIntro.js
import React from "react";
import { useLang } from "../../../components/ToggleLang";

const content = {
  cn: (<div>
    <p>
      <strong>人们常说，工作会定义一个人。</strong><br />
      我曾是<br />
      一名建筑师；<br />
      一名软件工程师；<br />
      现在，是一名产品经理。<br />
      一直在找探索，追寻<br />
      但归根结底，<br />
      我只是想创造一些真正属于我自己的东西。<br />
    </p>
    <p></p>
    <p>
      <strong>也有人说，一个人走过的地方，会刻进他的灵魂。</strong><br />
      我太喜欢旅行了！<br />
      虽然已错过成为演员的年纪，<br />
      无法在一生中体验千百种人生，<br />
      但我仍能旅行 <br />
      走千万人走过的路，<br />
      看千万人看过的景，<br />
      去感受去经历那些熟悉又遥远的地方<br />
    </p>
    <p></p>
    <p>
      <strong>还有人说，一个人的过往经历塑造了他。</strong><br />
      从很小的时候起，<br />
      我就知道，<br />
      我想要的，是一场跌宕起伏、波澜壮阔的人生。<br />
      人生的起落果然从未让我失望。<br />
      我走过崩塌，也穿越迷雾。<br />
      我把痛变成铠甲，把孤独变成光。<br />
      一路上，我一直在寻找意义，寻找归属，寻找自己。<br />
      直到现在，我终于能对生命说说：<br />
      <strong>“无论好坏，我收下你所有的赠与，然后带着我的不羁一直坚定的走下去。”</strong><br />
    </p>
    <p></p>
  </div>),
  en: (<div>
    <p>
      <strong>They say, work defines a person.</strong><br />
      I was<br />
      an architect<br />
      a software developer<br />
      and now a product manager<br />
      I've always been on the search, for meaning<br />
      But ultimately<br />
      I just want to create something that I can call my own<br />
    </p>
    <p></p>
    <p>
      <strong>They say, the places one walks become etched into the soul.</strong><br />
      I have always been restless with wanderlust.<br />
      Though I missed the stage to live as an actor,<br />
      to wear a thousand lives in one,<br />
      I can still travel—<br />
      tread the roads of millions,<br />
      witness what countless eyes have seen,<br />
      and feel the echo of lives<br />
      both distant and familiar.<br />
    </p>
    <p></p>
    <p>
      <strong>They say, a life is shaped by its past.</strong><br />
      since young I knew I wanted a maginficent life that show me every possibility<br />
      And my life never fails to impress me with ups and downs<br />
      I endured through collapse and wandered through fog<br />
      I armoured up and sought salvation<br />
      Ultimately I became my own saviour, in every possible way<br />
      Only now, I can look life in the eye and say<br />
      <strong>“Good or bad, I accept your giving. And I shall continue my life in my own defiant way, as always.”</strong><br />
    </p>
    <p></p>
  </div>)
}

export default function SelfIntro() {
  const { lang } = useLang();
  return content[lang];
}
