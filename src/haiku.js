class Haiku {
  constructor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  syllableCheck(line) {

    let syllableCounter = line.match(/[aeiouy]/g).length;
    let lineArray = line.split(" ");
    for (let i = 0; i < lineArray.length; i++) {
      if(lineArray[i].charAt(0) === "y"){
        syllableCounter--;
      }
      if(lineArray[i].charAt(lineArray[i].length-1) === "e" && lineArray[i].charAt(lineArray[i].length-2) !== "l"){
        syllableCounter--;
      }
    }
    console.log(syllableCounter);
    return syllableCounter;

  }

  haikuCheck() {
    let line1Count = this.syllableCheck(this.line1);
    let line2Count = this.syllableCheck(this.line2);
    let line3Count = this.syllableCheck(this.line3);
    if(line1Count === 5 && line2Count === 7 && line3Count ===5){
      return true;
    } else{
      return false;
    }
  }
}

export {Haiku}
