function calcularAreaTriangulo(base, altura) {
 
    let area = (base * altura) / 2;
    return area;
}

let base = 8;   
let altura = 6; 

let area = calcularAreaTriangulo(base, altura);

console.log(`A área do triângulo com base ${base} e altura ${altura} é: ${area}`);