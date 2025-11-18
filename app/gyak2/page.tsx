"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function Gyakorlat2Page() {
  const [művelet, setMűvelet] = useState<string>("+");
  const [operandusok, setOperandusok] = useState<{ a: number; b: number }>({ a: 3, b: 4 });
  const [válasz, setVálasz] = useState("");

  function feladványClick() {
    const a: number = Math.floor(Math.random() * 9) + 1;
    const b: number = Math.floor(Math.random() * 9) + 1;
    setOperandusok({ a, b });
  }

  function értékelésClick() {
    let jóVálasz: number = 0;
    switch (művelet) {
      case "+":
        jóVálasz = operandusok.a + operandusok.b;
        break;
      case "*":
        jóVálasz = operandusok.a * operandusok.b;
        break;
      case "-":
        jóVálasz = operandusok.a - operandusok.b;
        break;
      case "/":
        jóVálasz = Math.trunc(operandusok.a / operandusok.b);
        break;
    }

    if (jóVálasz.toString() === válasz) {
        toast.success("Jó a válaszod! Jár a süti!")
    } else {
        toast.error("Ejnye-bejnye, ez most nem sikerült!")
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-200">
      <div className="w-xl rounded-2xl bg-white p-4 shadow-2xl">
        <h1 className="mb-5 text-center text-3xl">Aritmetikai műveletek gyakorlása</h1>
        <div className="flex items-center">
          <p className="text-2xl">Művelet:</p>
          <select
            className="select ml-4 text-2xl select-primary"
            value={művelet}
            onChange={(e) => setMűvelet(e.target.value)}
          >
            <option value="+">Összeadás</option>
            <option value="-">Kivonás</option>
            <option value="*">Szorzás</option>
            <option value="/">Osztás</option>
          </select>
        </div>
        <input
          className="btn m-5 mx-auto block btn-primary"
          type="button"
          value="Feladvány"
          onClick={feladványClick}
        />
        <div className="flex">
          <p className="text-2xl">Feladvány: </p>
          <span className="ml-4 text-2xl">
            {operandusok.a} {művelet} {operandusok.b} =
          </span>
          <input
            className="input ml-3 w-30 input-primary"
            type="text"
            onChange={(e) => setVálasz(e.target.value)}
          />
          <input
            className="btn ml-3 btn-primary"
            type="button"
            value="Értékelés"
            onClick={értékelésClick}
          />
        </div>
      </div>
    </div>
  );
}
