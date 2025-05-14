type employee = {
    employeeName: string,
    emplooyeAge: number,
    employeeGender: string,
}


type employeeOficce = {
    DEPARTMENT: string,
    employeeID: number


}
type final = employee & employeeOficce;
let jonathan: final = {
    employeeName: "jonathan william",
    emplooyeAge: 27,
    employeeGender: "male",
    DEPARTMENT: "medical billing",
    employeeID: 23
}






