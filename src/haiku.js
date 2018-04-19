class Haiku {
  constructor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  syllableCheck(line) {
    let lowerCase = line.toLowerCase();
    let syllableCounter = lowerCase.match(/[aeiouy]/g).length;
    let lineArray = lowerCase.split(" ");
    for (let i = 0; i < lineArray.length; i++) {
      if(lineArray[i].charAt(lineArray[i].length-1) === "e" && lineArray[i].charAt(lineArray[i].length-2) !== "l" && lineArray[i].match(/[aeiouy]/g).length > 1){
        syllableCounter--;
      }
      if(/[aeiouy][aeiouy][aeiouy]/.test(lineArray[i])){
        syllableCounter -= lineArray[i].match(/[aeiouy][aeiouy][aeiouy]/g).length;
      }
      if(/[aeiouy][aeiouy]/.test(lineArray[i])){
        syllableCounter -= lineArray[i].match(/[aeiouy][aeiouy]/g).length;
      }
      if(lineArray[i].includes("ia") === true && lineArray[i].includes("cia") === false){
        syllableCounter++;
      }
      if(lineArray[i].includes("io") === true && lineArray[i].includes("tio") === false && lineArray[i].includes("sio") === false){
        syllableCounter++;
      }
      if(lineArray[i].charAt(lineArray[i].length-1) === "e" && lineArray[i].charAt(lineArray[i].length-2) === "e"){
        syllableCounter++;
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
