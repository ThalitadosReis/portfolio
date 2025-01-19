import React from "react";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        {/* Section Header */}
        <SectionHeader step="01" title="About me" />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Intro Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="uppercase text-[30px] lg:text-[45px] leading-[1] text-center lg:text-left lg:break-words lg:whitespace-pre-wrap">
              I use my{"\n"}
              background in{"\n"}
              <span className="font-newyork">Hospitality</span> to build{"\n"}
              <span className="font-newyork">customer-focused</span>{"\n"}
              solutions
            </h1>
          </div>

          {/* About Me Text */}
          <div className="flex-1 text-base text-justify">
            <p className="indent-8 mb-3">
              Hi there! I'm Thalita, a <span className="underline">junior</span>{" "}
              full-stack developer based in Zürich with a passion for learning
              and innovation. Beyond web development, I’m deeply engaged with
              nature and adventure—whether I’m snowboarding through the Swiss
              Alps in winter or enjoying lakeside sunshine in summer. I’m also a
              culinary enthusiast, constantly experimenting with international
              recipes, a creative practice that parallels my approach to coding:
              blending curiosity with structure to achieve something new.
            </p>
            <p className="indent-8 mb-3">
              Before transitioning into tech, I worked in the hospitality
              industry, where I gained skills in adaptability, teamwork, and
              proactive problem-solving. These experiences taught me how to
              connect with people and respond effectively to their needs,
              qualities that I now bring to every team and project.
            </p>
            <p className="indent-8">
              Looking ahead, I’m eager to deepen my expertise in full-stack
              development and collaborate with teams that prioritize creativity
              and growth. My goal is to contribute to meaningful projects,
              continuously improving my technical skills while making a positive
              impact in the tech industry. Let’s connect and explore how we can
              bring fresh ideas to life together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
