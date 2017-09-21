function takeANumber(array, name){
    array.push(name)
    var position = array.length ;
    return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(array){

    if (array.length > 0){
        var name = array.shift()
        return `Currently serving ${name}`
    }
    return "There is nobody waiting to be served!"
}
