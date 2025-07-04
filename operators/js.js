var a,b,c,sum,mean;
a = 10;
b = "11";
c = 6;
sum = a+b+c;
mean = sum/2;
console.log(mean);
alert(mean);

comp = (a==b) // True: because their values are the same
comp2 = (a===b) // False: because their types are diferent
                // === compare if the value and type are the same

dif = a != c; // False
dif2 = a !== c; // True

minorGreat = a >= b;
//minorGreat2 = a >== b; // does not exists

// Ternary operator
var age, elector;
age = 27;
elector = (age >= 18) ? "Yes, elector" : "Not, not elector"

// Logic operators: && - and; || - or; ! - not
n = !(age > 18 && age < 25)
alert(n)