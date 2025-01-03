import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex min-h-96 flex-col items-center justify-center bg-neutral-900 px-6 text-white">
      <h1 className="text-center text-4xl font-bold md:text-6xl">
        <span className="text-red-600">Web Developer Portfolio </span>
      </h1>
      <p className="mt-4 max-w-2xl text-center text-lg text-gray-400 md:text-xl">
        Passionate about turning ideas into seamless digital experiences. I
        specialize in modern web development with frameworks like{" "}
        <span className="text-red-400">Next.js</span> and{" "}
        <span className="text-red-400">TailwindCSS</span>.
      </p>
      <div className="mt-8 flex space-x-4">
        <Link
          href="/projects"
          className="rounded-xl bg-red-500 px-6 py-3 font-medium text-white shadow-md transition hover:bg-red-600"
        >
          View My Projects
        </Link>
        <Link
          href="https://www.facebook.com/xnooobtime"
          className="rounded-xl bg-neutral-500 px-6 py-3 font-medium text-white shadow-md transition hover:bg-neutral-600"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
