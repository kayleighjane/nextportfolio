export default function Page() {
  return (
      <section className="flex flex-col flex-1 gap-y-8">
      <h2 className="bg-brown-100 text-5xl customxs:text-6xl customsm:text-6.5xl font-semibold md:text-7xl">Contact me</h2>
      <p className="text-xl font-semibold customsm:text-2xl sm:2.5rem lg:text-3xl font-normal">If you're interested in my work and would like to find out more, feel free to email me at <span className="underline"><a href="mailto:kayleighjaneregan@gmail.com">kayleighjaneregan@gmail.com</a></span> and I'll get back to you ASAP.
    </p>
  </section>
  );
}