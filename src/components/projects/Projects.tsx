import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-32 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <ProjectCard
          title="MBS Auto Avenue"
          desc="Car auction bidding platform with multi-user routing and Redux state management."
        />
        <ProjectCard
          title="DubaiTalkies"
          desc="SEO-optimized content platform built with React and performance-focused architecture."
        />
        <ProjectCard
          title="PoseSchool"
          desc="Fitness management system using React, TensorFlow, and Firebase."
        />
      </div>
    </section>
  );
}
