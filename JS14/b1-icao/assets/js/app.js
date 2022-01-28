
function icao(){

    let inputCode = inCode.value;

    let transCode = inputCode.toLowerCase().split('');

    let arrCode = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];

    let arrIcao = ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu', ' ', 'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Niner', 'point'];

    let resultCode = [];

    for(let i = 0; i < transCode.length; i++){

        for(let j = 0; j < arrCode.length; j++){
            if(transCode[i] == arrCode[j]){
            resultCode.push(arrIcao[j]);    
            break
            }
        }
    }

    let finalCode = resultCode.join(' ');

    outCode.innerHTML = (`${finalCode}`);

}








