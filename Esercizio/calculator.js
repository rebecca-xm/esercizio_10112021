// try {
//     Block of code to try
//   }
//   catch(err) {
//     Block of code to handle errors
//   }

function minimalCalc(numbers) {
    try {
        if (numbers.length === 1) throw "Errore: hai passato un solo valore"
        if (numbers.length === 0) throw "Errore: nessun parametro passato alla funzione"

        const sum = () => numbers.reduce((acc, num) => acc + num);              // ADDIZIONE
        const sub = () => numbers.reduce((acc, num) => acc - num);              // SOTTRAZIONE
        const mul = () => numbers.reduce((acc, num) => acc * num);              // MOLTIPLICAZIONE
        const div = () => numbers.reduce((acc, num) => acc / num);              // DIVISIONE
        const pow = () => numbers.map(num => Math.pow(num, 2));                 // POTENZA
        const sqrt = () => numbers.map(num => Math.sqrt(num));                  // RADICE QUADRATA
        const cbrt = () => numbers.map(num => Math.cbrt(num));                  // RADICE CUBICA

        return {
            sum: sum(),
            sub: sub(),
            mul: mul(),
            div: div(),
            pow: pow(),
            sqrt: sqrt(),
            cbrt: cbrt(),
        }
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Hai fatto la tua scelta");
    }
}
