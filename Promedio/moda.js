const lista1 = [
    1,
    2,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    3,
    6,
    9,
    0
];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;   
        }else{
            lista1Count[elemento] = 1;  
        }     
    }
);

console.log(lista1Count);