import { AgeFromDate } from "age-calculator";

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
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/people_profile%2FNooobtimeX.webp?alt=media&token=2449a999-5b38-4e2d-a032-f295934d94e8"
              alt="Avatar"
              className="object-cover"
            />
          </div>
        </div>

        {/* About Me Content */}
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold text-primary">
            Wongsaphat Puangsorn <span className="text-3xl">({age})</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-base-content">
            I am a skilled software developer currently pursuing a degree in
            <span className="font-semibold text-primary"> {bachelor}</span> at
            <span className="font-semibold text-primary"> {university}</span>.
            With expertise in both
            <span className="font-semibold text-primary"> frontend </span> and
            <span className="font-semibold text-primary"> backend </span>{" "}
            development, I am proficient in
            <span className="font-semibold text-primary">
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
