"use client";

import Link from "next/link";
import QRCodeProject from "./projects/QRCodeProject";
import Combomaker from "./projects/Combomaker";
import HoyoSmash from "./projects/HoyoSmash";

export default function Project() {
  return (
    <div className="min-h-96 bg-neutral-900 py-4">
      <h2 className="py-2 text-center text-4xl font-bold">Highlight Project</h2>
      <QRCodeProject />
      <Combomaker />
      <HoyoSmash />
      <div className="mt-6 flex items-center justify-center">
        <Link href="/projects">
          <button className="border border-red-600 px-6 py-3 text-red-600 transition duration-300 hover:bg-red-600 hover:text-white">
            MORE PROJECTS
          </button>
        </Link>
      </div>
    </div>
  );
}
