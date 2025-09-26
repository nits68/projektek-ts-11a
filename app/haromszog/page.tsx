'use client';

import { useState } from 'react';

function ezMegszerkeszthető(a: number, b: number, c: number): boolean {
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

function területDerékszög(a: number, b: number, c: number) {
  const oldalak: number[] = [a, b, c];
  oldalak.sort();
  return (oldalak[0] * oldalak[1]) / 2;
}

function területHeron(a: number, b: number, c: number) {
  const s: number = kerület(a, b, c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

export default function HaromszogPage() {
  const [A, setA] = useState('3');
  const [B, setB] = useState('4');
  const [C, setC] = useState('5');

  let ker: number = NaN;
  let ter: number = NaN;

  const a: number = parseFloat(A);
  const b: number = parseFloat(B);
  const c: number = parseFloat(C);

  let hiba: string | undefined = undefined; // feltételezzük, hogy nincs hiba (undefined)

  // Sikeres volt az átalakítás?
  if (
    isNaN(a) ||
    isNaN(b) ||
    isNaN(c) ||
    a.toString().length != A.length ||
    b.toString().length != B.length ||
    c.toString().length != C.length
  )
    hiba = 'Konverziós hiba';

  // Szerkeszthetőség ellenőrzés, ha nincs hiba:
  if (!hiba && !ezMegszerkeszthető(a, b, c)) hiba = 'Nem szerkeszthető';

  if (!hiba) {
    ker = kerület(a, b, c);
    if (ezDerékszögű(a, b, c)) {
      ter = területDerékszög(a, b, c);
    } else {
      ter = területHeron(a, b, c);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex w-100 flex-col gap-y-5 rounded-lg bg-white p-5 shadow-lg">
        <h1 className="text-2xl font-bold">Háromszög területe és kerülete</h1>
        <p>
          a =
          <input type="text" value={A} onChange={(e) => setA(e.target.value)} className="input input-primary" />
        </p>
        <p>
          b =
          <input type="text" value={B} onChange={(e) => setB(e.target.value)} className="input input-primary" />
        </p>
        <p>
          c =
          <input type="text" value={C} onChange={(e) => setC(e.target.value)} className="input input-primary" />
        </p>
        <div>
          {hiba ? (
            <h1>{hiba}</h1>
          ) : (
            <div>
              {ezDerékszögű(a, b, c) ? <h1>Derékszögű a háromszög</h1> : <h1>Általános háromszög</h1>}
              <h1>Kerület: {ker}</h1>
              <h1>Terület: {ter}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
