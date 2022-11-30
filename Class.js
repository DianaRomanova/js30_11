class User {
    email;
    firstName;
    lastName;
    phone;
    isAuthorized = false;

    constructor(params){
        this.email = params.email;
        this.firstName = params. firstName;
        this.firstName = params. lastName;
        this.phone = params. phone;

    }
}
//console.log(User);
function authorize(){
    this.isAuthorized = true;
}

function logout(){
    this.isAuthorized = false;
}
console.log(User);
