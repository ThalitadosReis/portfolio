import SectionHeader from "./common/SectionHeader.jsx";

export default function About() {
  return (
    <section id="about" className="py-12 px-6">
      <div className="container lg:max-w-6xl mx-auto space-y-12">
        <SectionHeader step="01" title="About me" />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="lg:max-w-lg uppercase text-3xl md:text-4xl lg:text-5xl leading-none ">
              I use my background in{" "}
              <span className="font-newyork">Hospitality</span> to build{" "}
              <span className="font-newyork whitespace-nowrap">
                customer-focused
              </span>{" "}
              solutions
            </h2>
          </div>

          <div className="flex-1 font-light text-justify space-y-4 indent-8">
            <p>
              Hey! I'm Thalita, a full-stack developer in Zürich who loves
              building things and figuring out how stuff works. When I'm not
              coding, you'll probably find me hiking somewhere beautiful, trying
              to recreate a dish I had on my last trip, or experimenting in the
              kitchen. There's something satisfying about both cooking and
              coding, that mix of following a structure while adding your own
              twist.
            </p>

            <p>
              I spent years in hospitality before moving into tech, and
              honestly, it taught me so much about reading people, staying calm
              when things get chaotic, and working with all kinds of
              personalities. Those skills show up in unexpected ways, like when
              I'm collaborating on a project or thinking through how someone
              will actually use what I'm building.
            </p>

            <p>
              Right now, I'm focused on growing as a developer and finding teams
              where people care about learning and trying new things. I want to
              work on projects that matter and keep pushing myself to get
              better. If that sounds like your vibe, let's chat!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
