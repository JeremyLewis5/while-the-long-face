function numberDoubler(num) {
     let outputNum = num;
     while (outputNum <= 100) {
         console.log('Output num:', outputNum);
         outputNum = outputNum * 2;
     }
     //console.log('Output num:', outputNum);
     return outputNum;
 }
 //console.log('Output num:', outputNum);

 function stringRepeater(str) {
     let string = str;
      while (string <= 10) {
        console.log(string);  
        string = string + string;

      }
     return string;
 }


function makeDivisible(x, y) {
    // Your code here
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};