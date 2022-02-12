
function cardInfo(){

    let inputCard = inCard.value;

        inputCard = inputCard.replace(/\s+/g, '');

    let checkCard = inputCard.split('').reverse().map(i => +i);

    let sum = 0;

    for(let i = 0; i < checkCard.length; i++){

        if(i % 2 == 0){
            sum = sum + checkCard[i];  
        }else{
            let double = checkCard[i] * 2;
            sum = sum + (double > 9 ? double - 9 : double); 
        } 
    }   
    
    let isCorrect = sum % 10 == 0;

    let visa = ['4'];
    let mastercard = ['51','52','53','54','55'];
    let maestro = ['5018','5020','5038','5893','6304','6759','6761','6762','6763','676770','676774'];

    if (isCorrect == true){

        if( visa.includes(inputCard.slice(0,1)) || visa.includes(inputCard.slice(0,4)) || visa.includes(inputCard.slice(0,6)) ){
            outInfo.innerHTML = (`Card (${inputCard}) is VISA`);

        }else if( mastercard.includes(inputCard.slice(0,2) || (inputCard.slice(0,4) >= 2221 && inputCard.slice(0,4) <= 2720)) ){
            outInfo.innerHTML = (`Card (${inputCard}) is MasterCard`);
        
        }else if( maestro.includes(inputCard.slice(0,4)) || maestro.includes(inputCard.slice(0,6)) ){
            outInfo.innerHTML = (`Card (${inputCard}) is Maestro`);

        }else{
            outInfo.innerHTML = (`Card (${inputCard}) does not apply to VISA / Mastercard / Maestro`);
        }
    }

    else{   
        outInfo.innerHTML = (`Card (${inputCard}) does not exist`);
    }
}
 
