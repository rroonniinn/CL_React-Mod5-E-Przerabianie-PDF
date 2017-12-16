document.addEventListener('DOMContentLoaded', function(){

// **************************************************************
// ******** 1.00 Operacje na tablicach  -->
// **************************************************************

// * ------------- 1.01 Programowanie funkcyjne ------------------- * //

console.group ('1.01 Programowanie funkcyjne');


// Funkcja przyjmująca inną funkcję jako argument jest funkcją wyższego rzędu
// Np. sort:

var arr = [4, 1, 6, 2];

function fn(a, b) {
    return a - b;
}
arr.sort(fn); 
console.log(arr);

// Dzięki temu możemy zmienić przekzywną do argumentu funkcję - tym samym zmieniając jej sposób działania np:

function fn2(a, b) {
    return a.length - b.length;
}

const arr2 = ['jaś','małgosia','staś','superłoś']
arr2.sort(fn2);
console.log ( arr2 );

// Poniżej przykład z materiałów - trochę go nie rozumiem. Rozkminiam
// Zróbmy to krok po kroku:

// 1. Zwykła funkcja:

function calc(arg1, arg2) {
    var numberA = parseInt(arg1, 10);
    var numberB = parseInt(arg2, 10);
    console.log ("Calc", arg1, arg2 );
}

calc(32, "45");

// 2. Dodaję do niej zdolność przyjęcia funkcji jako argumentu (taką funkcję często nazywa się callback)

function calc2(arg1, arg2, arg3funct) {
    var numberA = parseInt(arg1, 10);
    var numberB = parseInt(arg2, 10);
    arg3funct(numberA, numberB);
}

function calcPrint(a,b) {
    console.log ("Calc Print", a , b);
}

function calcSum(a,b) {
    console.log ("Calc Sum", a + b);
}

calc2(32, "45", calcPrint);
calc2(32, "45", calcSum);


// Teraz kumam! To właśnie nazywa się ** Programowanie funkcyjne **
// Polega ono na opisywaniu problemu dzięki funkcjom i ich zagnieżdżaniu w sobie a nie jego ścisłym rozwiązaniu.

console.groupEnd();

// * ------------- 1.02 forEach() ------------------- * //

console.group ('1.02 forEach()');

// Metoda forEach() wykonuje przekazaną w parametrze funkcje dla każdego elementu tablicy.
// Funkcja ta może mieć opcjonalnie trzy parametry, które kolejno odzwierciedlają:
// * element tablicy (wartość) na którym obecnie jest wywoływana funkcja,
// * indeks na którym obecnie jest wywoływana funkcja,
// * tablicę na której jest wykonywana metoda forEach().

var arr = [1, 2, 3, 4];

function fnExample(element, index, array){
    console.log("fnExample ["+index+"]= "+element+" Tab: "+array);
}

function arrPower(element){
    console.log("arrPower ", element * element );
}

function arrMix(element, index){
    console.log("arrMix ", element * index );
}


arr.forEach(fnExample);
arr.forEach(arrPower);
arr.forEach(arrMix);

// to samo, ale deklarując funkcje bezpośrednio:

arr.forEach(function(a,b){
    console.log("arrMixInLine ", a * b );
});

// wykorzystanie parametru indeksu do zwrócenia zmodyfikowanych tylko elementów znajdujących się na nieparzystych miejscach (parzystych indexach) tablicy:

arr.forEach(function(ob,i){
    if (i%2===0) {
        console.log ("Parzysty - org: ",ob, "mod x2: ",ob * 2 );
    }

})


console.groupEnd();

// * ------------- 1.03 map() ------------------- * //

console.group ('1.03 map()');

// Metoda map() wykonuje przekazaną w parametrze funkcje dla każdego elementu tablicy a zwróconą przez nią wartość przypisuje do nowej tablicy o danym indeksie. Przekazywana funkcja może mieć trzy parametry, które kolejno odzwierciedlają:
// * element tablicy (wartość) na którym obecnie jest wywoływana funkcja,
// * indeks na którym obecnie jest wywoływana funkcja,
// * tablicę na której jest wykonywana metoda map().

const namesSup = ['John','Sten','Ann'];

function toUpper(el) {
    return el.toUpperCase();
}
console.log ( namesSup.map(toUpper) );

function mixRace(el,i) {
    i = parseInt(i,10)+1; 
    return i+'-'+el+'-'+i
}
console.log ( namesSup.map(mixRace) );

console.groupEnd();


// * ------------- 1.04 reduce() ------------------- * //

console.group ('1.04 reduce()');

// Metoda reduce() przyjmuje dwa parametry – pierwszy to funkcja, drugi (opcjonalny) to wartość początkowa,
// Metoda ta wykonuje operacje na poszczególnych elementach tablicy, zwracana wartość to wynik ostatniej operacji.

const tabliczka = [1,2,3,4,5];
const tabliczkaStr = ['John','Sten','Ann'];

function sumeczka (a,b) {
    return a + b;    
}
console.log ( tabliczka.reduce(sumeczka) ); 

function mnozniczka (a,b) {
    return a * b;    
}
console.log ( tabliczka.reduce(mnozniczka) ); 
console.log ( tabliczkaStr.reduce(sumeczka) ); 


console.groupEnd();

// **************************************************************
// ******** 2.00 Zmienne lokalne i globalne  -->
// **************************************************************

// * ------------- 2.01 IIFE ------------------- * //

console.group ('2.01 IIFE');

// ang. IIFE - Immediately Invoked Function Expression.

var x = 3;

(function (arg){
    var x = 5; 
    console.log(arg, x); // 3 5
    })(x);

// Inny przykład - kompletnie anonimowa:

(function() {
    console.log ( 'Sama się wywołuj i nie mam nazwy!!' );
})()



console.groupEnd();


// **************************************************************
// ******** 3.00 Arrow Functions  -->
// **************************************************************

// * ------------- 3.00 Arrow Functions ------------------- * //

console.group ('3.00 Arrow Functions');

// Funkcje z użyciem strzałek
// ( Arrow functions lub też czasem Fat arrow) to rozwiązanie, za pomocą którego możemy łatwo i szybko deklarować funkcje.
// Ale to nie jedyna zaleta Arrow functions.
// Dzięki temu likwidujemy również problem z wyrażeniem this przy tworzeniu funkcji w funkcjach.

// A Typowe wyrażenie funkcyjne:
{
let foo = function(a, b) {
    if(a > b) {
        return a; 
    }
        return b; 
    }
}
// A To samo jako funkcja strzałkowa

{
let foo = (a, b) => {
    if (a > b) {
        return a; 
    }
        return b;
    }

}    

// B Bez parametrów i jedna instrukcja

{
let foo = function () {
    return 1
    }    

    console.log ( foo() );
}

// B To samo jako funkcja strzałkowa

{
let foo = () => 1; 

console.log ( foo() );
}


// C Jeden parametr i jedna instrukcja w ciele

{
let foo = function(a){
    return 2 * a
}

console.log ( foo(10) );
}

// C To samo jako funkcja strzałkowa

{
    let foo = a => 2 * a;
    
console.log ( foo(15) );
}    

// D IIFE:

((a,b)=> console.log( a*b ))(1,2);

// E Przykład funkcji strzałkowej z funkcją map()
{

let arr = [1, 2, 3];
let newArr = arr.map(a => a * 2); 
console.log(newArr);

}    

// F Zapis tradycyjny 

{
let arr = [1, 2, 3, 4];

arr.forEach(function(ob,i){
    if (i%2===0) {
        console.log ("Parzysty - org: ",ob, "mod x2: ",ob * 2 );
    }
})

// F zapis strzałkowy

arr.forEach((ob,i) => {
    if (i%2===0) {
        console.log ("Parzysty - org: ",ob, "mod x2: ",ob * 2 );
    }
})


}

console.groupEnd();

// * ------------- 3.01 Arrow Functions & this ------------------- * //

console.group ('3.01 Arrow Functions & this');

// Spójrzmy na przygotowany przykład. Mamy tam obiekt Basket stworzony za pomocą konstruktora mającego dwie właściwości:
// prices – tablica przechowująca ceny,
// sum – zmienna liczbowa przechowująca sumę wszystkich cen.
// Następnie rozszerzyliśmy ten obiekt o metodę calculatePrices. Docelowo będzie ona obliczać sumę wszystkich cen i przypisywać do właściwości sum, ale na razie zobaczmy, na co wskazuje this.
// Dlaczego funkcja Basket jest zwykłą funkcją? Ponieważ funkcje strzałkowe nie mogą być konstruktorami!

// Widać w przykładzie niżej, że calculatePrices zwróciło cały obiekt (nie chcemy tego)

var Basket = function(prices) {
    
    // tablica przechowująca ceny 
    this.prices = prices;
    
    //zmienna liczbowa przechowująca sumę wszystkich cen 
    this.sum = 0;
    };
    
//dodajemy do prototypu metodę calculatePrices
Basket.prototype.calculatePrices = function() {
    console.log(this);
}
var basket = new Basket([9.99, 7.77]); 
basket.calculatePrices();

// Zmodyfikujmy teraz metodę calculatePrices w taki sposób, aby zliczała sumę wszystkich cen.
// Użyliśmy do tego dobrze nam znaną metodę forEach(). Po ponownym uruchomieniu skryptu w konsoli pojawi się napis 0? Dlaczego?

Basket.prototype.calculatePrices = function() {
    this.prices.forEach(function(element) {
        this.sum += element;
    });
    
    console.log(this.sum); 
}

var basket = new Basket([9.99, 7.77]); 
basket.calculatePrices();

// W momencie uruchomienia metody forEach(), której przekazaliśmy przez parametr funkcje, zmienił się nam kontekst.
// Zobaczmy, co pojawi się w konsoli po drobnej modyfikacji w naszym kodzie.

Basket.prototype.calculatePrices = function() {
    this.prices.forEach(function(element) {
        console.log ( this );
        this.sum += element;
    });
    
    // console.log(this.sum); 
}

var basket = new Basket([9.99, 7.77]); 
basket.calculatePrices();

// Wewnątrz funkcji – this wskazuje na całkiem inny obiekt – jest to obiekt globalny Window.
// Aby temu zapobiec, musielibyśmy przekazać w parametrze obiekt, na który ma wskazywać this wewnątrz funkcji.
// Z pomocą przychodzą nam Arrow Functions , które nie zmieniają kontekstu dla funkcji.

// Poniżej zmieniony kod dotyczący metody forEach(), do której przekazujemy funkcję strzałkową - arrow fuction.

Basket.prototype.calculatePrices = function() {
    this.prices.forEach(element => {
        console.log ( this );
        this.sum += element;
    });
    
    console.log(this.sum); 
}

var basket = new Basket([9.99, 7.77]); 
basket.calculatePrices();

// Można by to jeszcze uprościć usuwając conslo loga z 368 linijki 


Basket.prototype.calculatePrices = function() {
    this.prices.forEach(element => this.sum += element);
    console.log(this.sum); 
}

var basket = new Basket([9.99, 7.77]); 
basket.calculatePrices();

// This wewnątrz Arrow Functions wskazuje na ten sam obiekt this, który istnieje poza ciałem tej funkcji.
// To znaczy, że Arrow Functions są zawsze „związane” z najbliższym kontekstem, w którym zostały wywołane a to znaczy, że obiekt this nie jest tworzony bezpośrednio w Arrow functions.


console.groupEnd();

// * ------------- 4.00 Domyślne wartości parametrów ------------------- * //

console.group ('4.00 Domyślne wartości parametrów');

 let superZmiennaZDomyslnymi = ( a=10,b=5 ) => { console.log(a, b);}

 // Podane wszsytkie
 superZmiennaZDomyslnymi(20,30); // -> 20,30

 // Nie podane żadne:
 superZmiennaZDomyslnymi(); // -> 10,5


console.groupEnd();


}) 