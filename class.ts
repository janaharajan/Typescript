class watchdetails {
    watchName: string;
    watchRate: number;
    watchavailabePlatform: string;
    constructor({ watchName, watchRate, watchavailabePlatform }: { watchName: string, watchRate: number, watchavailabePlatform: string }) {
        this.watchName = watchName;
        this.watchRate = watchRate;
        this.watchavailabePlatform = watchavailabePlatform;
    }

    get detail() {
        return console.log(`Requested watch brand is ${this.watchName} it is available in ${this.watchavailabePlatform} @ ${this.watchRate}$`);
    }

}
let titan = {
    watchName: "Titan",
    watchRate: 300,
    watchavailabePlatform: "TITAN showroom"
};
let watch1 = new watchdetails(titan);
console.log(watch1.detail)

