
    // #A1 //
    let mass = +prompt(`Введите Ваш вес (кг)`);
    let heightsm = +prompt(`Введите Ваш рост (см)`);

    let heightm = heightsm / 100;
    
    let BMI = mass / (heightm ** 2);
    console.log(`Ваш индекс масы тела: ${BMI}`);

    if(BMI <= 16){
        console.log(`Выраженный дефицит массы тела`);
    } else if(BMI >= 16 && BMI <= 18.5){
        console.log(`Недостаточная (дефицит) масса тела`);
    } else if(BMI >= 18.5 && BMI <= 25){
        console.log(`Норма`);
    } else if(BMI >= 25 && BMI <= 30){
        console.log(`Избыточная масса тела (предожирение)`);
    } else if(BMI >= 30 && BMI <= 35){
        console.log(`Ожирение 1 степени`);
    } else if(BMI >= 35 && BMI <= 40){
        console.log(`Ожирение 2 степени`);
    } else if(BMI >= 40){
        console.log(`Ожирение 3 степени`);
    } 
    






