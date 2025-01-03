"use client";

import Link from "next/link";
import QRCodeProject from "./projects/QRCodeProject";

export default function Project() {
  return (
    <div className="min-h-96 bg-neutral-900 py-4">
      <h2 className="py-2 text-center text-4xl font-bold text-red-600">
        Highlight Project
      </h2>
      <QRCodeProject />
      <div className="mt-6 flex items-center justify-center">
        <Link href="/projects">
          <button className="rounded-xl border border-red-600 px-6 py-3 text-red-600 transition duration-300 hover:bg-red-600 hover:text-white">
            More Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
