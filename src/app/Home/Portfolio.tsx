// app/Home/Portfolio.tsx
"use client";
import Timeline from "../components/Timeline";
import ExperienceList from "../components/ExperienceList";
import SkillsList from "../components/SkillsList";
import SoftSkillsList from "../components/SoftSkillsList";
import Section from "../components/Section";

export default function Portfolio() {
  return (
    <main className="order-1 md:order-2 w-full md:w-2/3 bg-white p-10 ">
      <div className="text-center mt-10">
        <h1 className="text-xl md:text-4xl font-bold">Sahaphap Prommanok</h1>
        <p className="text-gray-600">Frontend Developer</p>

        {/* Timeline Section */}
        <div className="flex flex-col items-center justify-center mt-10">
          <Timeline />
        </div>

        {/* Experience Section */}
        <div className="mt-10 text-left">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <ExperienceList />
        </div>

        {/* Skills Section */}
        <div className="flex flex-col md:flex-row justify-between mt-10">
          <Section title="Skills">
            <SkillsList />
          </Section>
          <Section title="Soft Skills">
            <SoftSkillsList />
          </Section>
        </div>
      </div>
    </main>
  );
}