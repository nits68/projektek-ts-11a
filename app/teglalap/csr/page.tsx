"use client"; // ez egy Client Side Rendered (CSR) oldal

import { useState } from "react";

export default function TeglalapClientPage() {
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState(4);

  const kerület = 2 * (a + b);
  const terület = a * b;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="shadow-lg0 flex w-100 flex-col gap-y-3 rounded-lg bg-white p-5 font-mono">
        <p>Téglalap kerülete és területe</p>
        <p>
          a oldal:
          <input
            className="input ml-2 h-9 w-36 input-primary"
            min={0}
            step="any"
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
          />
        </p>
        <p>
          b oldal:
          <input
            className="input ml-2 h-9 w-36 input-primary"
            min={0}
            step="any"
            type="number"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
          />
        </p>
        {a > 0 && b > 0 ? (
          <div>
            <p>Kerület: {kerület}</p>
            <p>Terület: {terület}</p>
          </div>
        ) : (
          <p className="text-red-500">Az oldal(ak) hossza nem lehet nulla!</p>
        )}
      </div>
    </div>
  );
}
