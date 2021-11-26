function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180 / pi);
}        

function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * 180 / pi;
}



console.log(degrees_to_radians(33));
console.log(radians_to_degrees(0.333333333333333333333));