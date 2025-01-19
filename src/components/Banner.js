import React from "react";

export default function Banner() {
  return (
    <section
      className="section bg-soft-gray rounded-b-[75px] md:rounded-b-[100px] lg:rounded-b-[200px] overflow-hidden"
      id="home"
    >
      <div className="container mx-auto mb-10">
        {/* Title */}
        <h1 className="text-[35px] md:text-[60px] lg:text-[100px] leading-[0.8] mb-6 font-newyork">
          Full-Stack Developer
        </h1>

        {/* Subtitle */}
        <p className="text-sm font-bold text-black/50 mb-8 break-words whitespace-pre-wrap">
          I'm a Full-Stack Developer based in Zürich.{"\n"}
          I specialize in React and JavaScript.
        </p>

        {/* Banner Image */}
        <div
          className="bg-banner bg-cover bg-center bg-no-repeat w-full h-[300px] lg:h-[450px] max-w-[250px] lg:max-w-[450px] mx-auto grayscale"
          role="img"
          aria-label="A picture of me with a soft gray background"
        ></div>
      </div>
    </section>
  );
}
