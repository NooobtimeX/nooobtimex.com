"use client";

import Link from "next/link";
import QRCodeProject from "./projects/QRCodeProject";

export default function Project() {
  return (
    <div className="bg-neutral-800 py-2">
      <h2 className="py-1 text-center text-4xl font-bold text-red-600">
        Highlight Project
      </h2>
      <QRCodeProject />
      <div className="mt-4 flex items-center justify-center">
        <Link href="/projects">
          <button className="rounded-xl border border-red-600 px-3 py-2 text-red-600 hover:bg-red-600 hover:text-white">
            more
          </button>
        </Link>
      </div>
    </div>
  );
}
