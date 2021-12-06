function incrementString (strng) {
  // return incrementedString
    let x = (strng).replace( /^\D+/g, '');
   
      let len = x.length;

 
      str = strng.split(x);

   
      let number = Number(x) + 1 + '';

    
      while(number.length < len){
        number = '0' + number;
      }

  
      str = (str + number).split(',').join('');
      
      return str;
}