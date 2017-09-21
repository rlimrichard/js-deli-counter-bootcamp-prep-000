function takeANumber(array, name){
    array.push(name)
    var position = array.length ;
    return `Welcome, ${name}. You are number ${position} in line.`
}
