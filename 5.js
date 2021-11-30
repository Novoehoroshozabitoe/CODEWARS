const binaryArrayToNumber = arr => {
  // your code
   let out = 0, len = arr.length, bit = 1;

    while( len-- ) {

        out += arr[ len ] == "1" ? bit : 0;

        bit <<= 1;
    }
    return out;
};