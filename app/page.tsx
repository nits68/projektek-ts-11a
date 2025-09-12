import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md">
        <Image src="globe.svg" alt="Globe" width={100} height={100} />
        <h1 className="text-2xl font-bold mt-2">Hello World!</h1>
      </div>
    </main>
  );
}

// const Home = () => {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
//       <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md">
//         <Image src="globe.svg" alt="Globe" width="100" height="100" />
//         <h1 className="text-2xl font-bold mt-2">Hello World!</h1>
//       </div>
//     </main>
//   );
// };
// export default Home;
