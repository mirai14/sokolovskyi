
function innInfo(){

    let inputInn = inInn.value.split('');

    let info = {};    

    let sumCheck = (inputInn[0] * -1) + (inputInn[1] * 5) + (inputInn[2] * 7) + (inputInn[3] * 9) + (inputInn[4] * 4) + (inputInn[5] * 6)+ (inputInn[6] * 10) + (inputInn[7] * 5) + (inputInn[8] * 7);

        sumCheck = sumCheck % 11;

    let numberCheck = 0;
    
        if(sumCheck < 10){
            numberCheck = sumCheck;
        }else{
            numberCheck = sumCheck % 10;
        }

    if(inputInn[8] % 2 == 0){
        info['Sex'] = 'Жінка';
    }else{
        info['Sex'] = 'Чоловік';
    }
    
    let first5 = inputInn.slice(0, 5).join('');

    let birthDate = new Date(1899, 11, (31+(+first5)));

    let birthDateForm = [birthDate.getDate(), birthDate.getMonth() + 1, birthDate.getFullYear()];
        
    let birthDateResult = birthDateForm.join('.');
        info["Birthday"] = birthDateResult;
        
    let timeNow = new Date();
    
    let age = new Date().getFullYear() - birthDate.getFullYear(); 
        
        if(timeNow.getMonth() < birthDate.getMonth()) {
            age = age - 1;
        } else {
            if(timeNow.getDate() < birthDate.getDate()){
                age = age - 1;
            }
        }
        
    info["Age"] = age;

    if(inputInn.length != 10 || numberCheck != inputInn[9]){
        outInfo.innerHTML = ('Набраний номер не є дійсним');
    
    }else{
        outInfo.innerHTML = (`${info.Sex},
                              ${info.Birthday} року народження,
                              повних літ - ${info.Age}`);
    }

}







