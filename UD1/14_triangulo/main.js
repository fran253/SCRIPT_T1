function tipotriangulo(a, b, c) {
    if ( a<=0 || b<=0 || c<=0) {
        return "Los lados deben ser mayores que cero";
    }

    if ( a==b && b==c ) {
        return "Equilatero.";
    } else if ( a==b || b==c || a==c) {
        return "Isósceles.";
    } else {
        return "Escaleno.";
    }
}



console.log(tipotriangulo(1, 2, 3));
console.log(tipotriangulo(4, 7, 10));
console.log(tipotriangulo(5, 5, 5));
console.log(tipotriangulo(5, 5, 7));
console.log(tipotriangulo(5, 5, -7));