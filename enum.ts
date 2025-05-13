enum ROLE {
    admin,
    manager,
    employee,
    intern
}

interface employee {
    Name: string,
    age: number,
    role: ROLE,
    permission: PERMISSION

}
enum PERMISSION {
    READ,
    WRITE,
    READ_AND_WRITE,
    DELETE_ACCESS
}
let jana: employee = {
    Name: "Janaharajan",
    age: 25,
    role: ROLE.admin,
    permission: PERMISSION.READ_AND_WRITE
}

let arul: employee = {
    Name: "arul",
    age: 49,
    role: ROLE.manager,
    permission: PERMISSION.DELETE_ACCESS
}


function functionality(arul: employee): any {
    console.log(arul.permission)
}
functionality(arul);