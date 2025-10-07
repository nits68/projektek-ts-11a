// ez egy Server Side Rendered (SSR) oldal (nincs "use client")

type SearchParams = {
  a?: string;
  b?: string;
};

export default async function TeglalapPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  let a: number = params.a ? Number(params.a) : 3;
  let b: number = params.b ? Number(params.b) : 4;
  a = isNaN(a) ? 3 : a;
  b = isNaN(b) ? 4 : b;

  let terület: number | undefined = undefined;
  let kerület: number | undefined = undefined;

  if (a != 0 && b != 0) {
    terület = a * b;
    kerület = 2 * (a + b);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="flex w-100 flex-col rounded-lg bg-white p-6 font-mono text-lg shadow-lg">
        <form>
          <p>Téglalap kerülete és területe</p>
          <p>
            a oldal:
            <input
              className="input input-primary"
              defaultValue={a}
              min={0}
              name="a"
              placeholder="Kérem az oldal hosszát!"
              required
              step="any"
              type="number"
            />
          </p>
          <p>
            b oldal:
            <input
              className="input input-primary"
              defaultValue={b}
              min={0}
              name="b"
              placeholder="Kérem az oldal hosszát!"
              required
              step="any"
              type="number"
            />
          </p>
          {a == 0 || b == 0 ? (
            <div>
              <p className="text-red-500">Az oldal(ak) hossza nem lehet nulla!</p>
            </div>
          ) : (
            <div>
              <p>Kerület: {kerület}</p>
              <p>Terület: {terület}</p>
            </div>
          )}

          {/* Példák egyágú elágazásra: */}

          {a > 0 && b > 0 && (
            <div>
              <p>Kerület: {kerület}</p>
              <p>Terület: {terület}</p>
            </div>
          )}

          {(a == 0 || b == 0) && (
            <div>
              <p className="text-red-500">Az oldal(ak) hossza nem lehet nulla!</p>
            </div>
          )}

          <button className="hidden" type="submit"></button>
        </form>
      </div>
    </div>
  );
}
