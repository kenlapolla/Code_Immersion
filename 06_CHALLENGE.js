// Create a mad lib program


var madLibArray = {
    1:  "fun", 
    2:  "phone",
    3:  "family",
    4:  "Erma",
    5:  "fast",
    6:  "shirt",
    7:  "store",
    8:  "Atlanta",
    9:  "women",
    10: "strong",
    11: "leg"

};

var madLibStory = {
    1: "There are many",
    2: "ways to choose a",
    3: "to read.  First you could ask for recommendations from your friends and",
    4: "Just don't ask Aunt",
    5: "because she only reads",
    6: "books with",
    7: "-ripping goddesses on the cover.  If your friends and family are no help, try checking out the",
    8: "Review in The",
    9: "Times.   If the",
    10: "featured there too",
    11: "for your taste, try something a little more low-"
}
// console.log (typeof madLibArray);

function madLibOutput(madLibValues, madLibStoryValues) {
    var final_string = "";

    for (var key1 in madLibStoryValues){
        // console.log(key1, madLibStoryValues[key1]);
    
        final_string = final_string + (madLibStoryValues[key1] + " " + madLibValues[key1]) + " ";
        // for (var key2 in madLibValues) {
            
        //     final_string = final_string + (madLibStoryValues[key1] + " " + madLibValues[key2]) + "\n";
        //     // console.log(key2, madLibValues[key2]);
        //   }
    }
    
    // console.log(typeof newObject);
    // newObject.forEach(function(key,value) {
    //     console.log(key + ' = ' + value);
    // });
//    console.log(final_string);
   return final_string;
}

var madlib = madLibOutput(madLibArray, madLibStory);

document.getElementById('madlib').innerHTML = madlib;