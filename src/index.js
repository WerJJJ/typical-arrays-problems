
exports.min = function min (array) {
  if (array != '' && array != undefined){
  let min = array[0];
  for (let i = 1; i < array.length; i++){
    if ( array[i] < min ){
      min = array[i];
    }
  }
  return min;
  }
  return 0
}

exports.max = function max (array) {
  if (array != '' && array != undefined){
  let max = array[0];
  for (let i = 1; i < array.length; i++){
    if (array[i] > max){
      max = array[i];
    }
  }
  return max;
  }else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array != '' && array != undefined){
    let sum = 0
    let avg;
    for (let i = 0; i < array.length; i++){
      sum += array[i];
    }
    avg = sum / array.length;
  
    return avg;
  }else{
    return 0;
  }
}
