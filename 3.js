function duplicateCount(text) {
    let nText = text.toLowerCase(); //this changes every character to lower case 
    let myObj = {}; // Declaring an empty object
    let counter = 0;
    for (let i = 0; i < nText.length; i++) {
    // assigning character as property and giving value 1 
        if (!myObj[nText[i]]){
            myObj[nText[i]] = 1;
        }//checking if character already added
        else if (myObj[nText[i]] < 2) {
            myObj[nText[i]] += 1;
            counter++;
        }
    }
    return counter;
}