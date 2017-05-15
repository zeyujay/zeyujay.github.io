var add = function(){
    var counter = 0;
    var plus = function(){
      return counter+=1;
    }
    return plus;
}
var plus2 = add();
console.log(plus2());
console.log(plus2());
console.log(plus2());
