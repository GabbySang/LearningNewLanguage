//Area of a triangle

var sidea = 3;
var sideb = 9;
var sidec = 7;
var s = (sidea + sideb + sidec)/2;
var area =  Math.sqrt(s*((s-sidea)*(s-sideb)*(s-sidec)));
console.log(area);


//Random integer in a preset range
rand = function(min, max) {
  if (min==null && max==null)
    return 0;

  if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };
 console.log(rand(10,1));
 console.log(rand(1,20));
 console.log(rand(9));
 console.log(rand());
