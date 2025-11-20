"use clent";

type TárgyItem = {
  tömeg: number;
  color: string;
};

type DobozItem = {
  sorszám: number;
  össztömeg: number;
  tárgyak: TárgyItem[];
};

function randomRgbColor(): string {
  const r = Math.floor(Math.random() * 256); // Random between 0-255
  const g = Math.floor(Math.random() * 256); // Random between 0-255
  const b = Math.floor(Math.random() * 256); // Random between 0-255
  return `rgb(${r},${g},${b})`;
}

function ösztömeg(tárgyak: number[]): number {
  let össz: number = 0;
  tárgyak.forEach((t) => (össz += t));
  return össz;
}

function dobozol(tárgyak: number[]): DobozItem[] {
  const dobozok: DobozItem[] = [];
  let aktDobozIndexe: number = 0;
  // with random color:
  dobozok.push({ sorszám: 1, össztömeg: 0, tárgyak: [] }); // Első üres dobozt létrehozom
  tárgyak.forEach((t) => {
    if (dobozok[aktDobozIndexe].össztömeg + t <= 20) {
      dobozok[aktDobozIndexe].össztömeg += t; // Ha még belefér az aztuális dobozba
      dobozok[aktDobozIndexe].tárgyak.push({ tömeg: t, color: randomRgbColor() });
    } else {
      // Új dobozt kellet nyitni a tárgy tárolásához
      const újTárgy: TárgyItem = { tömeg: t, color: randomRgbColor() };
      const újDoboz: DobozItem = { sorszám: dobozok.length + 1, össztömeg: t, tárgyak: [újTárgy] };
      dobozok.push(újDoboz);
      aktDobozIndexe++;
    }
  });
  return dobozok;
}
export default function SzallitasPage() {
  const tárgyak: number[] = [16, 8, 9, 4, 3, 2, 4, 7, 7, 12, 3, 5, 4, 3, 2];
  const összesTömeg = ösztömeg(tárgyak);
  const dobozok: DobozItem[] = dobozol(tárgyak);

  return (
    <div className="flex min-h-screen flex-col items-center space-y-6 bg-gray-200 p-6 text-gray-800">
      <h1 className="text-3xl font-bold">Szállítás</h1>

      <div className="w-full max-w-lg rounded-2xl bg-white p-2 shadow-md">
        <h2 className="font-bold">2. feladat</h2>
        <p>
          A tárgyak tömegének összege: <span className="font-bold">{összesTömeg}</span> kg
        </p>
      </div>

      <div className="w-full max-w-lg rounded-2xl bg-white p-2 shadow-md">
        <h2 className="font-bold">3. feladat</h2>
        <h2 className="font-bold">Dobozok telítettsége</h2>
        <div>
          {dobozok.map((e, i) => (
            <div key={i}>
              <div className="text-md flex justify-between">
                <span>{e.sorszám}.</span>
                <span>{e.össztömeg} kg</span>
              </div>
              <div className="flex h-3 rounded-full bg-blue-200 shadow-md">
                {dobozok[i].tárgyak.map((tárgy, i) => (
                  <div
                    className="h-3 rounded-full"
                    key={i}
                    style={{
                      width: `${(tárgy.tömeg / 20) * 100}%`,
                      backgroundColor: `${tárgy.color}`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
          <h2 className="font-bold">Dobozok száma: {dobozok.length} db</h2>
        </div>
      </div>
    </div>
  );
}
