//ex1
var animal = 'monkey'; 
var monkey = animal; 
var x= 15; 
var y =10; 
var chaine = 'y3ni?'; 
var boolean = false; 
var isTenEven = 10 % 2 === 0; 

//ex2


firstname="rayen";
lastname="zinoubi";
fullname=firstname+" "+lastname;


//ex3
var n=0; 

function counter() {
    n=n+1;
    return n;
}


counter(); 
counter(); 
counter();

//ex4
var monAge;                
console.log(monAge);       

monAge=25;       
console.log(monAge);

//undefined


//ex5
var nom="rayen";
var estConnecte=true;
var nombre=10;

console.log(typeof nom);       
console.log(typeof estConnecte);
console.log(typeof nombre);  


//ex6

function sumTwoNumbers(n1,n2){
    var s=n1+n2;
    return s ;

}
sumTwoNumbers(3, 4);


//ex7

function priceWithTax(price,tax){
     var taxAmount=price*(tax/100);
     var total=price+taxAmount;
     return total;

}
priceWithTax(100, 15); 
priceWithTax(80, 20); 


