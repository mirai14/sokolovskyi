
    // 3-1000 //

    for (let i = 3; i <= 1000; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                break;
            }
            if (j == i - 1) {
                console.log(i);
                break;
            }
        }
    } console.log(1000);
   
    console.log(``); console.log(``); console.log(``);
    
    n1k:
    for (let i = 3; i <= 1000; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0 && i !== 1000) continue n1k;
        }
        console.log(i);
    }



        