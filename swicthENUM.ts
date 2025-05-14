enum day {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
}
let yourchoice: any = day.monday;
switch (yourchoice) {

    case day.monday:
        console.log("monday");
        break;

    case day.tuesday:
        console.log("tuesday");
        break;

    case day.wednesday:
        console.log("wednesday");
        break;

    case day.thursday:
        console.log("thursday");
        break;

    case day.friday:
        console.log("friday");
        break;

    case day.saturday:
        console.log("saturday");
        break;

    case day.sunday:
        console.log("sunday");
        break;

}