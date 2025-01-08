"use client";

import Combomaker from "./projects/Combomaker";
import HoyoSmash from "./projects/HoyoSmash";
import QRCodeProject from "./projects/QRCodeProject";

export default function Project() {
  return (
    <div className="min-h-96 py-4">
      <h2 className="py-2 text-center text-4xl font-bold">Highlight Project</h2>
      <QRCodeProject />
      <Combomaker />
      <HoyoSmash />
    </div>
  );
}
