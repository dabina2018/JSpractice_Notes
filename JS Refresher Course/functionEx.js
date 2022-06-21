function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
    // The purpose of this function is to build a sentence using given inputs

    var result = "";
    result += "The " + myAdjective + " " + myNoun + " "  + myVerb + " " + "to the store " + myAdverb

    return result;
}
// input goes here
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"))