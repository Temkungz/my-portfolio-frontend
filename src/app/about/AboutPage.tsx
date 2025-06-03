`use client`;
import FadeInPage from "../components/fade";
import ExperienceList from "../HomeComponent/ExperienceList";
import Section from "../HomeComponent/Section";
import SkillsList from "../HomeComponent/SkillsList";
import SoftSkillsList from "../HomeComponent/SoftSkillsList";
import Timeline from "../HomeComponent/Timeline";

export default function AboutPage() {
  //   const anim = (variants: any) => {
  //   return {
  //     variants: {fade},
  //     initial: "initial",
  //     animate: "enter",
  //     exit: "exit",
  //   };
  // };
  return (

    <div className="min-h-screen bg-gray-100 py-20 ">
      <FadeInPage>
        <div className="container mx-auto py-3 ">
          {/* Skills Section */}
          <div className="flex flex-col md:flex-row justify-between mt-10 text-left">

            {/* Skills section displays technical abilities */}
            <Section title="Skills">
              <SkillsList />
            </Section>
            {/* Soft Skills section shows interpersonal capabilities */}
            <Section title="Soft Skills">
              <SoftSkillsList />

             {/* Experience section lists professional history */}
              <div className="mt-10 text-left">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <ExperienceList />
              </div>
            </Section>

            {/* Timeline shows chronological university experiences */}
            <Section title="University Experience">
              <Timeline />
            </Section>
          </div>
        </div>
      </FadeInPage>
    </div>
  );
}
