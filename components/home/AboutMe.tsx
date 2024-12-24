export default function AboutMe() {
  return (
    <div className="my-8 px-4 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-1">
        <div></div>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-red-600">About Me</h2>
          <p className="text-lg leading-relaxed text-neutral-300">
            I am a skilled software developer with expertise in both
            <span className="font-semibold text-red-600"> frontend </span> and
            <span className="font-semibold text-red-600"> backend </span>{" "}
            development. Proficient in
            <span className="font-semibold text-red-600">
              {" "}
              modern JavaScript frameworks
            </span>
            , I build robust web applications using the latest technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
