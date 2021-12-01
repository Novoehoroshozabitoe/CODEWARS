function list(names){
  //your code here
  const len = names.length;
  let newNames = "";
  for (i=0; i<len; i++) {
    newNames += names[i].name;
    if ( i<len-2 ) newNames += ", "
      else if ( i<len-1 ) newNames += " & "
  }
  return newNames;
}
