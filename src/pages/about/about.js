import React from "react";
import SharedSectionLayout from "../../components/SharedSectionLayout";
import Sidebar from "../../components/Sidebar";
import "./about.css"

export default function AboutPage() {
  const sidebar = (
    <Sidebar
      title="关于"
      variant="minimal"
      links={[]}
      currentId={null}
      basePath="/about"
    />
  );

  return (
    <SharedSectionLayout sidebar={sidebar}>
      <div className="about-content">
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
          <strong>也有人说，一个人的过往经历塑造了他。</strong><br />
          这些故事，<br />
          也许是真实的，<br />
          也许不是。<br />
          但更重要的是，<br />
          我的过往让我成为了现在的我。<br />
        </p>
        <p></p>
        <p>
          <strong>还有人说，一个人走过的地方，会刻进他的灵魂。</strong><br />
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
          从很小的时候起，<br />
          我就知道，<br />
          我想要的，是一场跌宕起伏、波澜壮阔的人生。<br />
          人生的起落果然从未让我失望。<br />
          <strong>我仍然渴望世俗意义上的成功，<br />
          但也渐渐懂得欣赏生活中那些简单的美好。<br /></strong>
          无论如何，<br />
          继续探索，继续学习，继续成长。<br />
          美好的人生，仍在前方等着我。<br />
        </p>
        <p></p>
      </div>
    </SharedSectionLayout>
  );
}
