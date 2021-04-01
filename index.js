// Add your functions here
function map(srcArray, func){
    let newArray = []
    for(let i = 0; i < srcArray.length; i++){
    newArray.push(func(srcArray[i]))
    }
    return newArray
};

function reduce(srcArray, func, start=0){
     let total = (!!start) ? start : srcArray[0]
    let i = (!!start) ? 0 : 1
    for(; i < srcArray.length; i++){
        total = func(srcArray[i], total)
    }
    return total
}