export function Haiku(line1, line2, line3){
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
}

Haiku.prototype.syllableCheck = function () {
  let prefix = ["re", "pre", "un", "im", "non", "dis", "de", "down", "ex", "il", "in", "ir", "out", "post", "pro", "sub", "trans", "up", "mis", "co", "con", "com", "tri", "di", "dif"];
  let suffix = ["ness", "ly", "es", "er", "ed", "ing", "ful", "ment", "ion", "age", "al", "ance", "ence", "dom", "or", "hood", "ism", "ist", "ity", "ty", "ry", "ship", "able", "en", "ese", "ic", "ish", "ide", "ive", "less", "ous", "ate", "ify", "ise", "ize", "ward", "ys", "able"];
  // let doubleConsonants =  ["bb","cc","dd","ff","gg","hh","jj","kk","ll","mm","nn","pp","qq","rr","ss","tt","vv","ww","xx","zz"];
  let lineArray = this.line1.split(" ");
  let lineArray2 = [];
  let lineArray3 = [];
  let lineArray4 = [];
  let finalArray = [];
  for (let i = 0; i < lineArray.length; i++) {
    let check = false;
    prefix.forEach(function(element){
      if(lineArray[i].substring(0, element.length) === element){
        let part = lineArray[i].slice(0, element.length);
        let part2 = lineArray[i].slice(element.length, lineArray[i].length);
        finalArray.push(part);
        lineArray2.push(part2);
        check = true;
      }
    });
    if(check === false){
      lineArray2.push(lineArray[i]);
    }
  }
  for (let j = 0; j < lineArray2.length; j++) {
    let check = false;
    suffix.forEach(function(element){
      if(lineArray2[j].substring(lineArray2[j].length-element.length, lineArray2[j].length) === element){
        let part = lineArray2[j].slice(0, lineArray2[j].length-element.length);
        let part2 = lineArray2[j].slice(lineArray2[j].length-element.length, lineArray2[j].length);
        finalArray.push(part2);
        lineArray3.push(part);
        check = true;
      }
    });
    if(check === false){
      lineArray3.push(lineArray2[j]);
    }
  }
  for (let l = 0; l < lineArray3.length; l++) {
    let check = false;
    if(/["ckle"]/.test(lineArray3[l])){
      let indexTwo = lineArray3[l].search(/["ckle"]/);
      console.log(indexTwo);
      let part = lineArray3[l].slice(0, indexTwo+2)
      let part2 = lineArray3[l].slice(indexTwo+2, lineArray3[l].length);
      finalArray.push(part);
      finalArray.push(part2);
      check = true;
    }
    if(check === false){
      lineArray4.push(lineArray3[l]);
    }
  }
  for (let k = 0; k < lineArray4.length; k++) {
    // let check = false;
    let index = lineArray4[k].search(/[b-df-hj-np-tv-z][b-dfgj-np-tv-z]/);
    // console.log(index);
    let part = lineArray4[k].slice(0, index+1)
    let part2 = lineArray4[k].slice(index+1, lineArray4[k].length);
    finalArray.push(part);
    finalArray.push(part2);
  }

  // lineArray3.forEach(function(element){
  //   finalArray.push(element);
  // });
  console.log(finalArray);
  return finalArray.length;
};
