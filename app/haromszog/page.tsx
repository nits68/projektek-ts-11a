'use client';

import { useState } from 'react';

function ezMegszerkeszthető(a: number, b: number, c: number) {
  return a + b > c && a + c > b && c + b > a;
}

function ezDerékszögű(a: number, b: number, c: number) {
  const oldalak: number[] = [a, b, c];
  oldalak.sort();
  const ao: number = oldalak[0];
  const bo: number = oldalak[1];
  const co: number = oldalak[2];

  return Math.pow(ao, 2) + Math.pow(bo, 2) == Math.pow(co, 2);
}

function kerület(a: number, b: number, c: number) {
  return a + b + c;
}

function területDerékszög(a: number, b: number) {
  return (a * b) / 2;
}

function területHeron(a: number, b: number, c: number) {
  const s: number = kerület(a, b, c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

export default function HaromszogPage() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const [c, setC] = useState(5);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex w-100 flex-col gap-y-5 rounded-lg bg-white p-5 shadow-lg">
        <h1 className="text-2xl font-bold">Háromszög területe és kerülete</h1>
        <p>
          a =
          <input
            min={1}
            type="number"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
            className="input input-primary"
          />
        </p>
        <p>
          b =
          <input
            min={1}
            type="number"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value))}
            className="input input-primary"
          />
        </p>
        <p>
          c =
          <input
            min={1}
            type="number"
            value={c}
            onChange={(e) => setC(parseInt(e.target.value))}
            className="input input-primary"
          />
        </p>
      </div>
    </div>
  );
}
