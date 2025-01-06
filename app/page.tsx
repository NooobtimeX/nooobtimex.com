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
      <AboutMe />
      <HighLightProjects />
      <HighLightSkills />
    </>
  );
}
