function curriedSum(numArgs){
  
  let numbers = [];
  
  const _curriedSum = function (){
    // console.log(numbers.length);
    // console.log(numArgs);
    if (numbers.length === numArgs){
      let total = 0;
      for(let i = 0; i < numbers.length; i++){
        total+=numbers[i];
      }
      return total;
    } else {
      // console.log(arguments[0]);
      // console.log('*****');
      numbers.push(arguments[0]);
      return _curriedSum;
      }
    }
return _curriedSum;

}
const sum = curriedSum(4);

console.log(sum(1)(2)(3)(4)());
