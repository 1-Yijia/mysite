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
        <h2>Hello</h2>
        <p>
          <strong>It is said your work defines you.</strong><br />
          I'm...<br />
          an ex-architect;<br />
          an ex-software engineer;<br />
          and a current product manager<br />
          I'm just an explorer who is hardly satisfied<br />
          But ultimately I just want something i can call my own.<br />
        </p>
        <p></p>
        <p>
        <strong>It is also said your past experiences define you.</strong><br />
        The stories here<br />
        They can be my true experience,<br />
        They can also not be.<br />
        What is more important is<br />
        The kind of person I came out to be based on my past<br />
        </p>
        <p></p>
        <p>
        <strong>It is also also said the places you've travelled to define you.</strong><br />
        Oh well, travel that I love!<br />
        It's too late for me to become an actor<br />
        So that I can experience all kinds of life in my one life time<br />
        Luckily I can travel<br />
        To walk through paths others have been on<br />
        To see sceneries others have seen<br />
        To experience, to live, vicariously, to all the distant yet familiar places<br />
        </p>
        <p></p>
        <p>
        Since I was very young<br />
        I knew that I wanted a life that is dramatic, vast and magnificent<br />
        Life surely doesn't fail to impress on the ups and downs part<br />
        While I still want success in the secular sense<br />
        I also come to appreciate the simple aspects of life<br />
        Regardless, keep exploring, keep learning and keep growing<br />
        <strong>A wondeful life awaits</strong><br />
        </p>
      </div>
    </SharedSectionLayout>
  );
}
