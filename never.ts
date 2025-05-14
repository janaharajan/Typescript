// For a function to return never, it must either:

//     Throw an exception.

//     Enter an infinite loop.

//     Cause a non-returning condition (e.g., calling a function that never returns).
let displayerror = (): never => {
    throw new Error("never type");

}

// displayerror()
let infiniteLoop = (): never => {
    let i = 0
    while (true) {
        console.log("This will loop forever");
    } i++;


}

// Call the function to start the infinite loop
infiniteLoop();  // This will keep printing the message indefinitely



function suma(i = 0): never {
    if (100 < 0) {
        console.log("jai")
    }
    throw new Error("eeeee");


}
