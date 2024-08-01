import Card from "@/components/card";

export default function Page() {
  return (
      <section className="flex flex-col flex-1 gap-y-8">
      <h2 className="bg-brown-100 text-5xl customxs:text-6xl customsm:text-6.5xl font-semibold md:text-7xl">My projects</h2>
      <p className="text-xl primary font-normal customsm:text-2xl semibold">
        Here are my current projects that are available on Github. 
      </p>
      <Card title="Movie search" description="... is a React application created as part of a training project with Paul Blackwell, where through paired programming we covered the basics of React and best practices of it using the IMDBAPI." docsLink="https://" previewLink="https://" />
    </section>
  );
}