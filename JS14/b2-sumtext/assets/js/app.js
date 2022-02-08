
function sumtext(){

    let inputSum = inSum.value;

    let Units = {'0': 'гривень', '1': 'одна гривня', '2': 'дві гривні', '3': 'три гривні', '4': 'чотири гривні', '5': 'п’ять гривень', '6': 'шість гривень', '7': 'сім гривень', '8': 'вісім гривень', '9': 'дев’ять гривень'};
    
    let Teens = {'0': 'десять гривень', '1': 'одинадцять гривень', '2': 'дванадцять гривень', '3': 'тринадцять гривень', '4': 'чотирнадцять гривень', '5': 'п’ятнадцять гривень', '6': 'шістнадцять гривень', '7': 'сімнадцять гривень', '8': 'вісімнадцять гривень', '9': 'дев’ятнадцять гривень'};
    
    let Tens = {'2': 'двадцать', '3': 'тридцять', '4': 'сорок', '5': 'п’ятдесят', '6': 'шістдесят', '7': 'сімдесят', '8': 'вісімдесят', '9': 'дев’яносто'};
    
    let Hundreds = {'1': 'сто', '2': 'двісті', '3': 'триста', '4': 'чотириста', '5': 'п’ятсот', '6': 'шістсот', '7': 'сімсот', '8': 'вісімсот', '9': 'дев’ятсот'};

    let finalText = ' '

    if(inputSum.length == 1){
        finalText = Units[inputSum[0]];                               // 0-9

    }else if(inputSum.length == 2){
        if(inputSum[0] == 1){
            finalText = Teens[inputSum[1]];                           // 10-19
        }else{     
            finalText = Tens[inputSum[0]] + ' ' + Units[inputSum[1]]; // 20-99
        }
        
    }else if(inputSum.length == 3){
        if(inputSum[1] == 0){
            finalText = Hundreds[inputSum[0]] + ' ' + Units[inputSum[2]]; // 100-109, 200-209...900-909
        
        }else if(inputSum[1] == 1){
            finalText = Hundreds[inputSum[0]] + ' ' + Teens[inputSum[2]]; // 110-119, 210-219...910-919
            
        }else{
            finalText = Hundreds[inputSum[0]] + ' ' + Tens[inputSum[1]] + ' ' + Units[inputSum[2]]; // 120-199,220-299...920-999
        
        }

    }   

    outText.innerHTML = (`${finalText}`);
}





