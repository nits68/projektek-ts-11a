export type AlignOptions = {
    label: string; // pi.: Top
    value: string; // Tailwind classname: "items-start"
}

export default function FlexboxDemo() {

  // Függőleges igazítás 
  const verticalAlign: AlignOptions[] = [
    {label: "Top", value: "items-start"},
    {label: "Center", value: "items-center"},
    {label: "Bottom", value: "items-end"},
  ];

  return (
    <div className="flex h-100 flex-wrap items-center justify-center bg-yellow-100 gap-4">
      <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-blue-400 text-3xl font-bold text-white1 shadow-xl">
        1
      </div>
      <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-blue-400 text-3xl font-bold text-white shadow-xl">
        3
      </div>
      <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-blue-400 text-3xl font-bold text-white shadow-xl">
        3
      </div>
      <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-blue-400 text-3xl font-bold text-white shadow-xl">
        4
      </div>
      <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-blue-400 text-3xl font-bold text-white shadow-xl">
        5
      </div>
      <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-blue-400 text-3xl font-bold text-white shadow-xl">
        6
      </div>
       <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-blue-400 text-3xl font-bold text-white shadow-xl">
        7
      </div>
       <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-blue-400 text-3xl font-bold text-white shadow-xl">
        8
      </div>
       <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-blue-400 text-3xl font-bold text-white shadow-xl">
        9
      </div>
    </div>
  );
}
