var watchdetails = /** @class */ (function () {
    function watchdetails(_a) {
        var watchName = _a.watchName, watchRate = _a.watchRate, watchavailabePlatform = _a.watchavailabePlatform;
        this.watchName = watchName;
        this.watchRate = watchRate;
        this.watchavailabePlatform = watchavailabePlatform;
    }
    Object.defineProperty(watchdetails.prototype, "detail", {
        get: function () {
            return console.log("Requested watch brand is ".concat(this.watchName, " it is available in ").concat(this.watchavailabePlatform, " @ ").concat(this.watchRate, "$"));
        },
        enumerable: false,
        configurable: true
    });
    return watchdetails;
}());
var titan = {
    watchName: "Titan",
    watchRate: 300,
    watchavailabePlatform: "TITAN showroom"
};
var watch1 = new watchdetails(titan);
console.log(watch1.detail);
