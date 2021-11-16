
    // 3-1000 //

    n1k:
    for (let i = 3; i <= 1000; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0 && i !== 1000) continue n1k;
        }
        console.log(i);
    }

        