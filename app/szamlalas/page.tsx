"use clint";

type StatItem = {
  óra: number;
  áthaladók: number; // áthaladók száma
};

function szumÁthaladások(mérések: number[]): number {
  let összeg: number = 0;
  mérések.forEach((e) => {
    if (e != -1) összeg += e;
  });
  return összeg;
}

function áthaladóKerékpárosok(mérések: number[], óra: number): number {
  const startIndex = (óra - 6) * 4;
  let összeg: number = 0;
  for (let i = startIndex; i < startIndex + 4; i++) {
    if (mérések[i] != -1) összeg += mérések[i];
  }
  return összeg;
}

function maxNegyedóraIndexe(mérések: number[]): number {
  let maximumIndexe = 0; // A legelsőt kinevezzük legnagyobbank
  for (let i = 1; i < mérések.length; i++) {
    if (mérések[i] > mérések[maximumIndexe]) maximumIndexe = i;
  }
  return maximumIndexe;
}

function időpont(index: number): string {
  const időPercben = 6 * 60 + 15 + index * 15;
  const óra = Math.floor(időPercben / 60);
  const perc = időPercben % 60;
  return `${óra}:${perc}`;
}

export default function SzamlalasPage() {
  const mérések: number[] = [36, 48, 39, -1, 30, 43, -1, 76, 67, 82, 73, 75, 64, 73, 69, 63];
  const összesÁthaladás: number = szumÁthaladások(mérések);

  const stat: StatItem[] = [];
  for (let óra = 6; óra <= 9; óra++) {
    stat.push({ óra, áthaladók: áthaladóKerékpárosok(mérések, óra) });
  }

  const áthaladókTömb: number[] = stat.map((e) => e.áthaladók);
  const maxÁthaladás = Math.max(...áthaladókTömb);

  const maxIndex = maxNegyedóraIndexe(mérések);

  const idő: string = időpont(maxIndex);

  return (
    <div className="flex min-h-screen flex-col items-center space-y-6 bg-gray-200 p-6 text-gray-800">
      <h1 className="text-3xl font-bold">Forgalomszámlálás</h1>

      <div className="w-full max-w-lg rounded-2xl bg-white p-2 shadow-md">
        <h2 className="font-bold">2. feladat</h2>
        <p>
          Összesen <span className="font-bold">{összesÁthaladás}</span> kerékpáros számoltak.
        </p>
      </div>

      <div className="w-full max-w-lg rounded-2xl bg-white p-2 shadow-md">
        <h2 className="font-bold">3. feladat</h2>
        <h2 className="font-bold">Óránkénti mérések</h2>
        <div>
          {stat.map((e) => (
            <div key={e.óra}>
              <div className="text-md flex justify-between">
                <span>{e.óra}:00</span>
                <span>{e.áthaladók} fő</span>
              </div>
              <div className="h-3 rounded-full bg-blue-200 shadow-md">
                <div
                  className="h-3 rounded-full bg-blue-600"
                  style={{ width: `${(e.áthaladók / maxÁthaladás) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-lg rounded-2xl bg-white p-2 shadow-md">
        <h2 className="font-bold">4. feladat</h2>
        <p>
          Az áthaladók maximális száma: <span className="font-bold">{mérések[maxIndex]}</span>;
          rögzítés időpontja: <span className="font-bold">{idő}</span>.
        </p>
      </div>
    </div>
  );
}
