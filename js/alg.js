function factorial(n){
    let total = 1;
    for(i=1; i<=n; i++){
        total=i*total;
    }
    return console.log(total);
}

factorial(4);


function hasUniqueChars(cadena) {
    let charSet = new Set();
    for (let i = 0; i < cadena.length; i++) {
        if (charSet.has(cadena[i])) {
            return console.log("false");
        }
        charSet.add(cadena[i]);
    }
    return console.log("true");
}

hasUniqueChars("hoola");