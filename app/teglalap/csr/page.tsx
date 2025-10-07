'use client';

import { useState } from 'react';

export default function TeglalapClientPage() {
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState(4);

  const kerület = 2 * (a + b);
  const terület = a * b;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex w-100 flex-col gap-y-3 rounded-lg bg-white p-5 font-mono shadow-lg0">
        <p>Téglalap kerülete és területe</p>
        <p>
          a oldal:
          <input
            type="number"
            min={0}
            step="any"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="input ml-2 h-9 w-36 input-primary" 
          />
        </p>
        <p>
          b oldal:
          <input
            type="number"
            min={0}
            step="any"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
            className="input ml-2 h-9 w-36 input-primary"
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
