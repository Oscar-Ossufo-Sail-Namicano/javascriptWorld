/*
    var - for varaiables tha may change it's value
          var has global escope
    let - unchangeble variable's value
          has local escope
    const - unchangeble nor in global neither in local escope
*/

var a = 2;


const b = 5;

let c = 7

{
    let c = 8; // this change is valide only is this block
    var a = 1; // This change is global
    const b = 6; // Change not allowed
}

/*
let c = 8; // this change is not allowed in the same scope 
var a = 1; // This change is global, allowed
const b = 6; // Change not allowed
*/
alert(a, b, c);