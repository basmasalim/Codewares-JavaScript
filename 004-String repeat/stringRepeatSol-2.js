function repeatStr (n, s) {
    let newString = '';
    for(let i=0; i< n; i++){
        newString += s;
    }
    return newString
}

console.log(repeatStr(6,'h'));