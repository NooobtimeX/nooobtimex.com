import React from "react";
import Head from "next/head";
import HighLightProjects from "@/components/home/HighLightProjects";
import HighLightSkills from "@/components/home/HighLightSkills";
import HeroSection from "@/components/home/HeroSection";
import AboutMe from "@/components/home/AboutMe";

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
