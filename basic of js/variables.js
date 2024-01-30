const accountId = 144553
let accountEmail = "sam@sam.org"
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState;

// accountId = 2 // not allowed
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

accountEmail = "sam@sam.in"
accountPassword = "212121212345"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])