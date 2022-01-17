
    let secret = Math.random();
    secret = secret * 100;
    secret = Math.floor(secret);
    secret = secret + 1;

    let i = 10;

    function game(){
        

            if(i < 1){
                return;
            }
        
            let option = +numberInput.value;

            if(secret == option){
                main.innerHTML = (`${option}`);
                number.innerHTML = (`Ваш варіант ${option} - вірний. Гра закінчена!`);
                i=0;
                return;
            } else if(secret > option){
                number.innerHTML = (`Ваш варіант ${option} - менший за моє число`);
            } else {
                number.innerHTML = (`Ваш варіант ${option} - більший за моє число`);
            }

            i--;

            attempt.innerHTML = (`${i}`);

            if(i < 1){
                main.innerHTML = (`${secret}`);
                number.innerHTML = 'Ви не вгадали. Гра закінчена!';

            }

    }

