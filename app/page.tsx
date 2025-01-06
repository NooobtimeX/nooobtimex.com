import AboutMe from "@/components/home/AboutMe";
import HeroSection from "@/components/home/HeroSection";
import HighLightProjects from "@/components/home/HighLightProjects";
import HighLightSkills from "@/components/home/HighLightSkills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/" />
      </Head>
      <HeroSection />
      <div className="mx-auto max-w-7xl border-t border-neutral-700 pt-8"></div>
      <AboutMe />
      <div className="mx-auto max-w-7xl border-t border-neutral-700 pt-8"></div>
      <HighLightProjects />
      <div className="mx-auto max-w-7xl border-t border-neutral-700 pt-8"></div>
      <HighLightSkills />
    </>
  );
}
