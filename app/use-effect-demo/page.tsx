'use client';

import { useEffect, useState } from 'react';

export default function UseEffectDemo() {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   alert('Oldal betöltve!');
  // }, []);

  // useEffect(() => {
  //   alert('Oldal renderelve!');
  // });

  useEffect(() => {
    if (name && age) {
      setMessage(`Szia ${name}, Te ${age} éves vagy!`);
    } else if (name) {
      setMessage(`Szia ${name}! Adjad meg az élekorodat is!`);
    } else {
      setMessage(`Beítrad, hogy ${age} éves vagy. Add meg a neved is!`);
    }
  }, [name, age]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-100 space-y-4 rounded-2xl bg-white p-8 text-center shadow-xl">
        <h1>useEffect demo page</h1>
        <p className="text-2xl text-gray-700">{message}</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-primary"
          type="text"
          placeholder="Kérem a neved!"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value == '' ? '' : Number(e.target.value))}
          className="input input-primary"
          type="number"
          placeholder="Életkorod..."
        />
      </div>
    </main>
  );
}
