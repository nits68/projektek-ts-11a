'use client';

import { useState } from 'react';
import { IncrementButton } from './IncrementButton';
import BackToMain from '@/components/BackToMain';

export default function CounterPage() {
  // let counter: number = 0;
  // useState egy React Hook, ami egy változót és egy függvényt ad vissza
  // a változó értékének beállítására
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex flex-col items-center justify-center gap-y-3 rounded-xl bg-white p-4 shadow-md">
        <h1 className="text-2xl font-semibold">Egyszerű számláló</h1>
        <p className="text-5xl font-bold text-red-700">{counter}</p>
        <IncrementButton onIncrement={() => setCounter((p) => p + 1)} />
        <BackToMain />
      </div>
    </div>
  );
}
