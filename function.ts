
let monkey: { animalName: string, animalsound: string } = {

    animalName: " MONKEY",
    animalsound: "krrrrrr"

}
let slur: { badword1: string } = {
    badword1: " onum theriyatha mannu #########"
}
function something(monkey: { animalName: string; animalsound: string }, slur: { badword1 }) {
    console.log(`${slur.badword1}`)
    // console.log(`macha oru quarter solan poda ${monkey.animalName}`);

}
// something(monkey, slur);
let test = (monkey: { animalName: string; animalsound: string }, slur: { badword1 }) => {
    console.log(`${slur.badword1}`)
    console.log(`macha oru quarter solan poda ${monkey.animalName}`);
}
test(monkey, slur);
