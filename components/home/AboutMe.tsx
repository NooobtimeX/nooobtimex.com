import { AgeFromDate } from "age-calculator";
import Image from "next/image";

export default function AboutMe() {
  const birthdate = new Date(2003, 3, 19); // April 19, 2003 (Note: Month is 0-indexed)
  const age = new AgeFromDate(birthdate).age;
  const university = "Thammasat University";
  const bachelor = "Computer Science";

  return (
    <div className="hero min-h-96 bg-base-200">
      <div className="hero-content flex flex-col lg:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="avatar">
          <div className="w-40 h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              src="/profile/NooobtimeX.webp"
              alt="Avatar"
              className="object-cover"
              width={160}
              height={160}
            />
          </div>
        </div>

        {/* About Me Content */}
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold text-primary">
            Wongsaphat Puangsorn <em className="text-3xl">({age})</em>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-base-content">
            I am a skilled software developer currently pursuing a degree in
            <em className="font-semibold "> {bachelor}</em> at
            <em className="font-semibold "> {university}</em>. With expertise in
            both
            <em className="font-semibold "> frontend </em> and
            <em className="font-semibold "> backend </em> development, I am
            proficient in
            <em className="font-semibold"> modern JavaScript frameworks</em>. I
            build robust web applications using the latest technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
