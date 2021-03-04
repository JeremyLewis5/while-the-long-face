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

 function stringRepeater(str, num) {
     let string = str;
     let num1 = 4;
      while (string <= 10) {
        //console.log(string);  
        string = str * num1;
        
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