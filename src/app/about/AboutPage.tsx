"use client";
import FadeInPage from "../components/fade";
import ExperienceList from "../AboutComponent/ExperienceList";
import Section from "../AboutComponent/Section";
import SkillsList from "../AboutComponent/SkillsList";
import SoftSkillsList from "../AboutComponent/SoftSkillsList";
import Timeline from "../AboutComponent/Timeline";
import { useLanguage } from "../contexts/LanguageContext"; //

export default function AboutPage() {
 const {t} = useLanguage() as {t: (key: string) => string | string[] }; // กำหนด type ของ t เป็น string หรือ array ของ string


  if(!String(t)) return null; // ถ้าไม่ใช่ string ก็ให้เป็น null
  
  return (

    <div className="min-h-screen bg-gray-100 py-20 ">
      <FadeInPage>
        <div className="container mx-auto py-3 ">
          {/* Skills Section */}
          <div className="flex flex-col md:flex-row justify-between mt-10 text-left">

            {/* Skills section displays technical abilities */}
            <Section title={t("skills")}>
              <SkillsList />
            </Section>
            {/* Soft Skills section shows interpersonal capabilities */}
            <Section title={t("softskills")}>
              <SoftSkillsList />

             {/* Experience section lists professional history */}
              <div className="mt-10 text-left">
                <h2 className="text-2xl font-bold mb-4">{t("experience")}</h2>
                <ExperienceList />
              </div>
            </Section>

            {/* Timeline shows chronological university experiences */}
            <Section title={t("universityexperience")}>
              <Timeline />
            </Section>
          </div>
        </div>
      </FadeInPage>
    </div>
  );
};
