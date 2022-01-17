
    function calc(){
        
        let mass = +mInput.value;
        let height = +hInput.value;

        if(height > 3){
            height = height / 100;
        }

        let bmi = mass / (height ** 2);

        bmi = Math.round(bmi * 10) / 10;

        resultbmi.innerHTML = bmi;

        if(bmi <= 16){
            conclusionbmi.innerHTML = (`Виражений дефіцит маси тіла`);
        } else if(bmi >= 16 && bmi <= 18.5){
            conclusionbmi.innerHTML = (`Недостатня (дефіцит) маса тіла`);
        } else if(bmi >= 18.5 && bmi <= 25){
            conclusionbmi.innerHTML = (`Норма`);
        } else if(bmi >= 25 && bmi <= 30){
            conclusionbmi.innerHTML = (`Надлишкова маса тіла (передожиріння)`);
        } else if(bmi >= 30 && bmi <= 35){
            conclusionbmi.innerHTML = (`Ожиріння 1 ступеня`);
        } else if(bmi >= 35 && bmi <= 40){
            conclusionbmi.innerHTML = (`Ожиріння 2 ступеня`);
        } else if(bmi >= 40){
            conclusionbmi.innerHTML = (`Ожиріння 3 ступеня`);
        } 
    }