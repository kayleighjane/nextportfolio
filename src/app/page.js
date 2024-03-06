import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col flex-1 justify-around md:gap-y-8 md:justify-center">
      <h2 className="text-6xl customxs:text-6.5xl customsm:text-7xl font-bold md:text-7.5xl">
        Hi, I'm <br />
        Kayleigh
      </h2>
      <p className="text-xl font-semibold customsm:text-2xl sm:2.5rem lg:text-3xl font-normal">
        I am a Junior{" "}
        <span className="underline">
          <span className="font-bold">Frontend</span> Developer
        </span>{" "}
        based in Portslade and working at Homeflow. I enjoy all things{" "}
        <span className="font-bold">design</span> and using the web to{" "}
        <span className="underline">
          <span className="font-bold">solve</span> modern{" "}
          <span className="font-bold">problems</span>
        </span>
        .
      </p>
      {/* {!desktop && <Nav />} */}
    </section>
  );
}
