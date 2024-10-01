const accountId = 12345
let accountEmail = "mayank@google.com"
var accountPassword = "12345"
accountCity = "Jalandhar"
let accountState; // --> Prints as undefined

// accountId = 2 --> changing const is not allowed.
// console.log(accountId);

accountEmail = "mp@mp.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.table([accountEmail, accountPassword, accountCity, accountState])

/*
prefer using let instead of var 
because of block scope and functional scope issue.
*/

