interface fandetail {
    brandName: string,
    costofrate: number,
    availablestatus: boolean,
    discount?: boolean//have you noticed here we use ? if you dont mention ? we probabaly get an error
}
let crompton: fandetail = {
    brandName: "crompton",
    costofrate: 3000,
    availablestatus: true,
    // discount: true
    /*
    Type 'string' is not assignable to type 'boolean | undefined'.ts(2322)
    functionoptionalparameter.ts(5, 5): The expected type comes from property 'discount' which is declared here on type 'fandetail'
    (property) fandetail.discount?: boolean | undefined
    */
}
function tablefan(crompton: fandetail): void {
    console.log(crompton)
}
tablefan(crompton)
