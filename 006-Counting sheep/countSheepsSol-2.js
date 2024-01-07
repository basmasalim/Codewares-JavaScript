function countSheeps(sheep){
    let index = 0;

    for(let i = 0; i < sheep.length; i ++){
        if(sheep[i] == true){
            index++;
        }
    }
    return index ;
}
console.log(countSheeps([true,true,true, false, true,false,false]));