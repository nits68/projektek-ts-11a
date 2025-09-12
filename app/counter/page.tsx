'use client';

import { useState } from 'react';

// Saját komponens készítése (jellemzően a komponensek önálló fájlokban vannak)
type IncrementButtonProps = {
  onIncrement: () => void;
};

export const IncrementButton = ({ onIncrement }: IncrementButtonProps) => {
  return (
    <button
      className="cursor-pointer rounded-2xl border border-gray-300 bg-blue-300 px-3 py-1 font-medium shadow-xl transition active:scale-95 active:shadow-md"
      onClick={onIncrement}
    >
      Növelés
    </button>
  );
};

export default function CounterPage() {
  // let counter: number = 0;
  // useState egy React Hook, ami egy változót és egy függvényt ad vissza
  // a változó értékének beállítására
  const [counter, setCounter] = useState(100);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex flex-col items-center justify-center gap-y-3 rounded-xl bg-white p-4 shadow-md">
        <h1 className="text-2xl font-semibold">Egyszerű számláló</h1>
        <p className="text-5xl font-bold text-red-700">{counter}</p>
        <IncrementButton onIncrement={() => setCounter((prev) => prev + 10)} />
      </div>
    </div>
  );
}
