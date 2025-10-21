const image =
  "https://res.cloudinary.com/douen1dwv/image/upload/v1761042207/default/profile-picture-small_fpo5na.jpg";

export default function Banner() {
  return (
    <section
      className="bg-gray rounded-b-[75px] md:rounded-b-[100px] lg:rounded-b-[200px] overflow-hidden"
      id="home"
    >
      <div className="container lg:max-w-6xl mx-auto px-6 pb-24 space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl  leading-none font-newyork">
          Full-Stack Developer
        </h1>

        <p className="text-sm font-light">
          I'm a Full-Stack Developer based in Zürich.
          <br />I specialize in React and JavaScript.
        </p>

        <img
          src={image}
          alt="Profile"
          className="mx-auto h-[300px] lg:h-[450px] aspect-square object-cover grayscale"
        />
      </div>
    </section>
  );
}
