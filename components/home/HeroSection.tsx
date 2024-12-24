var ageCalculator = require("age-calculator");
let { AgeFromDate } = ageCalculator;

export default function HeroSection() {
  const birthdate = new Date(2003, 3, 19); // April 19, 2003 (Note: Month is 0-indexed)
  let age = new AgeFromDate(birthdate).age;
  let university = "Thammasat University";
  let bachelor = "Computer Science";
  return (
    <div className="bg-neutral-800 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
          <div className="avatar online mb-6 flex items-center justify-center lg:mb-0">
            <div className="h-40 w-40 overflow-hidden rounded-full shadow-lg">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/people_profile%2FNooobtimeX.webp?alt=media&token=2449a999-5b38-4e2d-a032-f295934d94e8"
                alt="Avatar"
                className="h-full w-full object-cover"
                width={160}
                height={160}
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <span className="text-4xl font-semibold text-red-600">
              Portfolio
            </span>
            <h2 className="mt-2 text-5xl font-bold text-red-500">
              Wongsaphat Puangsorn{" "}
              <span className="text-3xl text-neutral-400">({age})</span>
            </h2>
            <span className="mt-4 block text-2xl font-medium text-red-600">
              {university}
            </span>
            <p className="text-xl font-medium text-neutral-300">{bachelor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
