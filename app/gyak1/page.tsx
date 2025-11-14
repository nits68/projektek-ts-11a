"use client";

import { useState } from "react";
import toast from "react-hot-toast";

// Dinamikus legördülő lista
// Helyezzünk el az oldalon egy szöveges típusú inputot "Lista elem:" label-el!
// Az input alatt legyen egy "Hozzáad" parancsgomb
// A parancsgomb alatt egy legördülő lista (select-options)
// Induláskor "A kérem válasszon" (0) opció legyen látható, de ezt az opciót ne lehessen kiválasztani
// A "Hozzáad" parancsgombbal lehessen a legördülő listát bővíetni új opcióval
// Az opciókhoz tartozó értékek 0-tól N-ig egész számok
// A kiválasztott opcióhoz tartozó érték jelenjen meg a toast modul segítségével!

export default function Gyakorlás1Page() {
  const [txtInput, setTxtInput] = useState<string>("kilincs");
  const [lista, setLista] = useState<string[]>([]);

  function handleClick() {
    if (txtInput != "") {
      setLista((prev) => [...prev, txtInput]);
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="w-[90%] max-w-lg rounded-2xl bg-white p-5 shadow-xl">
        <h1 className="p-4 text-center text-3xl font-bold">Gyakorlás1</h1>
        <div>
          <label htmlFor="myinput">Lista elem:</label>
          <input
            className="input w-full input-primary"
            id="myinput"
            type="text"
            value={txtInput}
            onChange={(e) => setTxtInput(e.target.value)}
          />
        </div>
        <input
          className="btn m-2 mx-auto block btn-primary"
          type="button"
          value="Hozzáad"
          onClick={handleClick}
        />
        <select className="select select-primary" onChange={(e) => toast(e.target.value)}>
          <option disabled value="0">
            Kérem válasszaon
          </option>
          {lista.map((e, i) => (
            <option key={i} value={i + 1}>
              {e}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
