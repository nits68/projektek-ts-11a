"use client";

import { useState } from "react";

export type AlignOptions = {
  label: string; // pi.: Top
  value: string; // Tailwind classname: "items-start"
};

export default function FlexboxDemo() {
  const [vertical, setVertical] = useState("items-center");

  // Függőleges igazítás
  const verticalAlign: AlignOptions[] = [
    { label: "Top", value: "items-start" },
    { label: "Center", value: "items-center" },
    { label: "Bottom", value: "items-end" },
  ];

  return (
    <div>
      <nav className="flex w-full flex-wrap justify-center gap-3 bg-green-400 p-4">
        <h1 className="text-2xl">Verical alignment</h1>
        {verticalAlign.map((align) => (
          <button
            className="btn transition-transform btn-primary hover:scale-110"
            key={align.label}
            onClick={() => setVertical(align.value)}
          >
            {align.label}
          </button>
        ))}
      </nav>
      <div className={`flex h-100 flex-wrap ${vertical} justify-center gap-4 bg-yellow-100 p-4`}>
        {/* AligmentBar helye */}

        {/* [...Array(3)] -> [undefined, undefined, undefined] */}
        {[...Array(3)].map((_, i) => (
          <div
            className="text-white1 flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-blue-400 text-3xl font-bold shadow-xl"
            key={i}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
