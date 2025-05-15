let weekday: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let i: number = 0;
/*In while conditional statement runs first and value gets increment or decrement*/
function whileloop(weekday: string[]): any {
    console.log("\n  while")

    while (i < 7) {
        console.log(`\n ${weekday[i]}`);
        i++;

    }
}
whileloop(weekday)

function dowhile(weekday: string[]): any {
    let i: number = 0;
    /*In do while value gets increment or decrement first and conditional statement runs */

    console.log("\n do while")
    do {
        console.log(`\n ${weekday[i]}`);
        i++;
    } while (i < 7);
}
dowhile(weekday)