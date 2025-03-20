function calcularAreaCirculo(raio) {
    const pi = Math.PI; 
    return pi * Math.pow(raio, 2); 
}

function calcularPerimetroCirculo(raio) {
    const pi = Math.PI; 
    return 2 * pi * raio; 
}

let raio = 5; 

let area = calcularAreaCirculo(raio);
let perimetro = calcularPerimetroCirculo(raio);

console.log(`Raio do círculo: ${raio}`);
console.log(`Área do círculo: ${area.toFixed(2)}`); 
console.log(`Perímetro (Circunferência) do círculo: ${perimetro.toFixed(2)}`);
