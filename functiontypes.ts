let greet: string = "welcome to our website";
interface Logincredential {
    _username: string,
    _password: string
}

/*we can use either interefernce or type for mentioning type in typescript*/
// type Logincredential = {
//     _username: string,
//     _password: string
// }


let logincredential: Logincredential = {
    _username: "@janaharajan",
    _password: "Password@1234"
}

function returntype(greet: string, logincredential: Logincredential): void {
    console.log(`${greet} ${logincredential._username}`)
}
returntype(greet, logincredential)
