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
    //  let string = str;
    //  let num1 = 4;
    //   while (string <= 10) {
    //     //console.log(string);  
    //     string = str * num1;
        
    //   }
    //  return string;
let outputStr = str;
while(outputStr.length < 10) {
    outputStr += str;
    
} 
return outputStr



}




function makeDivisible(x, y) {
    let outputX = x;
    while(outputX % y !== 0){
        outputX ++
    }
return outputX
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};