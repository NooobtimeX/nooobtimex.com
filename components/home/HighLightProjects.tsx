"use client";

import Combomaker from "@/components/home/projects/Combomaker";
import HoyoSmash from "@/components/home/projects/HoyoSmash";
import QRCodeProject from "@/components/home/projects/QRCodeProject";
import RSTROPHY from "@/components/home/projects/RSTROPHY";

export default function Project() {
  return (
    <div className="min-h-96 py-4">
      <h2 className="py-2 text-center text-4xl font-bold">Highlight Project</h2>
      <RSTROPHY />
      <QRCodeProject />
      <Combomaker />
      <HoyoSmash />
    </div>
  );
}
