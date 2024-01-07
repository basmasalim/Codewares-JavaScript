//initial value 0
//loop trought the array 
//cheack if the sheep === true , increase the initial value + 1


function countSheeps(sheep) {
    let counter = 0;
    sheep.map((m) =>{
        if(m === true) counter++;

    })
    return counter;
}

