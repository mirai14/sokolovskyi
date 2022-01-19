
function calc(){    
    
    let sumInput = +sInput.value;

    let deductionSingle = 12550;

    let sumOutput = 0;

    let sumTax = sumInput - deductionSingle;

    let arrSingle = [0, 9950, 40525, 86375, 164925, 209425, 523600, Infinity];

    let arrRate = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];

    if(sumTax <= 0){
        sumOutput = 0;
    }else {
        for (let i = 0; i < arrSingle.length; i++){
            let limit1 = arrSingle[i];
            let limit2 = arrSingle[i + 1];
            let rateTax = arrRate[i];
           
            if (sumTax > limit2){
                sumOutput = sumOutput + ((limit2 - limit1) * rateTax);
            }else{
                sumOutput = Math.round(sumOutput + ((sumTax - limit1) * rateTax));
                break
            }
        } 
    }

    sOutput.innerHTML = (`$ ${sumOutput}`);
}


