// 
type emp = {
    name: string,
    department: DEPARTMENT,
    empid: number

}
type emp_personaldetail = {
    diabaties: boolean,
    bloodpressure: boolean,
    height: number,
    wieght: number
}
enum DEPARTMENT {
    MECHANICAL = "Mechanical",
    FIRE_AND_SAFETY = "Fire and Safety",
    ELECTRICAL = "Electrical",
    ELECTRONICS = "Electronics",
    IT = "IT",
    CIVIL = "Civil"

}
type EMPLOYEE_DETAIL = emp_personaldetail & emp;
let surya: EMPLOYEE_DETAIL = {
    name: "SURYA",
    department: DEPARTMENT.ELECTRONICS,
    empid: 12,
    diabaties: false,
    bloodpressure: false,
    height: 198,
    wieght: 70

}
// console.log(typeof surya)
function bloodtest(emphealthdetail: EMPLOYEE_DETAIL) {
    if (emphealthdetail.bloodpressure == true) {
        return console.log(`${emphealthdetail.name} have blood pressure problem`);
    }
    else {
        return console.log(`${emphealthdetail.name} does not have blood pressure problem`);

    }
}
function diabaties(emphealthdetail: EMPLOYEE_DETAIL) {
    if (emphealthdetail.diabaties == true) {
        return console.log(`${emphealthdetail.name} have DIABATIES problem`);
    }
    else {
        return console.log(`${emphealthdetail.name} does not have DIABATIES problem`);

    }
}

function employeehealth(emphealthdetail: EMPLOYEE_DETAIL): void {
    console.log(`\n EMPPLOYEE NAME ${emphealthdetail.name} \n EMPPLOYEE ID : ${emphealthdetail.empid}`)
    bloodtest(emphealthdetail)
    diabaties(emphealthdetail)
}
employeehealth(surya)// Types definition
