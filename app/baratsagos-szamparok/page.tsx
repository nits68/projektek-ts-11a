// Baratságos számpárokat tároló objektum típusának a definiálása
// Objektum mezői: "a" és "b", típusaik: number
type PárItem = {a: number, b: number}

function osztókÖsszeg(n: number): number {
    if (n <= 1) return 0;
    let összeg: number = 1;
    for (let e = 2; e * e < n; e++) {
        if (n % e == 0) összeg += e;
        const osztó_pár: number  = n / e;
        if (osztó_pár != e) összeg += osztó_pár
    }
    return összeg;
}

// Az n paraméter a párok darabszámát határozza meg: Az első n darab pár
// "a" és "b" barárságos pár, ha a == osztókÖsszeg(b) és b == osztókÖsszeg(a)
function barárságosSzámpárokKeresése(count: number): PárItem[] {
    const bariPárok: PárItem[] = []
    let a: number = 2;
    while (bariPárok.length < count) {
        const b: number = osztókÖsszeg(a);
        if (b > a && a == osztókÖsszeg(b)) bariPárok.push({a, b}) 
        a++;
    }
    return bariPárok;
}

export default function BaratsagosSzamparokPage() {
  // Object array létrehozása a párok tárolására
  return (
    <div></div>
  )
}