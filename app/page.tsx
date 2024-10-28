import React from "react";
import Image from "next/image";
var ageCalculator = require("age-calculator");
let { AgeFromDate } = ageCalculator;

export default function Home() {
  const birthdate = new Date(2003, 3, 19); // April 19, 2003 (Note: Month is 0-indexed)
  let age = new AgeFromDate(birthdate).age;
  let university = "Thammasat University";
  let bachelor = "Computer Science";

  return (
    <>
      <div className="hero rounded-xl bg-gray-900 p-8 text-white">
        <div className="hero-content flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
          <div className="avatar online mb-6 flex items-center justify-center lg:mb-0">
            <div className="h-40 w-40 overflow-hidden rounded-full shadow-lg">
              <Image
                src="/people/NooobtimeX.webp"
                alt="Avatar"
                className="h-full w-full object-cover"
                width={160}
                height={160}
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <span className="text-4xl font-semibold text-indigo-400">
              Portfolio
            </span>
            <h2 className="mt-2 text-5xl font-bold text-indigo-200">
              Wongsaphat Puangsorn{" "}
              <span className="text-3xl text-gray-400">({age})</span>
            </h2>
            <span className="mt-4 block text-2xl font-medium text-indigo-400">
              {university}
            </span>
            <p className="text-xl font-medium text-gray-300">{bachelor}</p>
          </div>
        </div>
      </div>
      <section
        id="about"
        className="container mx-auto my-8 rounded-xl bg-gray-800 p-8 text-white"
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-bold text-indigo-400">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I am a skilled software developer with expertise in both
            <span className="font-semibold text-blue-500"> frontend </span> and
            <span className="font-semibold text-blue-500"> backend </span>{" "}
            development. Proficient in
            <span className="font-semibold text-blue-500">
              {" "}
              modern JavaScript frameworks
            </span>
            , I build robust and scalable web applications using the latest
            technologies.
          </p>
        </div>
      </section>
    </>
  );
}
