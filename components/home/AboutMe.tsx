var ageCalculator = require("age-calculator");
let { AgeFromDate } = ageCalculator;
export default function AboutMe() {
  const birthdate = new Date(2003, 3, 19); // April 19, 2003 (Note: Month is 0-indexed)
  let age = new AgeFromDate(birthdate).age;
  let university = "Thammasat University";
  let bachelor = "Computer Science";
  return (
    <div className="mx-auto flex min-h-96 items-center justify-center bg-neutral-800 p-2">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 md:flex-row">
        <div className="h-40 w-40 overflow-hidden rounded-full shadow-lg">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/people_profile%2FNooobtimeX.webp?alt=media&token=2449a999-5b38-4e2d-a032-f295934d94e8"
            alt="Avatar"
            className="h-full w-full object-cover"
            width={160}
            height={160}
          />
        </div>{" "}
        <div className="mx-auto max-w-3xl">
          <h2 className="mt-2 text-5xl font-bold text-red-500">
            Wongsaphat Puangsorn{" "}
            <span className="text-3xl text-neutral-400">({age})</span>
          </h2>
          <p className="text-lg leading-relaxed text-neutral-300">
            I am a skilled software developer currently pursuing a degree in
            <span className="font-semibold text-red-600"> {bachelor}</span> at
            <span className="font-semibold text-red-600"> {university}</span>.
            With expertise in both
            <span className="font-semibold text-red-600"> frontend </span> and
            <span className="font-semibold text-red-600"> backend </span>{" "}
            development, I am proficient in
            <span className="font-semibold text-red-600">
              {" "}
              modern JavaScript frameworks
            </span>
            . I build robust web applications using the latest technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
