function oddOrEven(array) {
  //enter code here
  return array.reduce(function(sum, item) {
   return sum + item
 }, 0) % 2 == 0 ? 'even' : 'odd';
}
