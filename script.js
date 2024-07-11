function longest(s1, s2) {
    // your code
    let set = new Set(s1.split('').concat(s2.split('')));
        /*`Set` object is a collection of unique values*/
        //`Split` => splits both input strings into individual characters
        //`Concat` => links the resulting arrays in a chain
        //Adding all the characters to the `Set` object to avoid duplication
    return Array.from(set).sort().join('');
        //`Array.from` allows the `Set` object to be converted back to an array
        //`Sort` arranges the work in alphabetical order
        //Lastly, `join` joins the sorted array xters into 1 str   
  }
