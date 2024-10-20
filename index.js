const cornichon = 20;
const concombre = 20;
const aubergine = 40;

if (cornichon === concombre && concombre === aubergine) {
    console.log("Vos 3 variables sont les mêmes");
} else if (cornichon === concombre || cornichon === aubergine || concombre === aubergine) {
    console.log("2 de vos 3 variables sont égales");
} else {
    console.log("Toutes vos variables sont différentes");
}