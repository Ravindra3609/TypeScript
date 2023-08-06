let variable = "hello";
variable = "hi";

let age = 18;
// age = "nine" error

let ageWithType : number = 22;
ageWithType = 18;


let testString : string
testString = "hello"


let testBoolean : boolean
testBoolean = false


let testStringOrNum : string | number
testStringOrNum = 97
testStringOrNum = "Ravindra"
// testStringOrNum=[] error

//ARRAY
let names = ["john" , "jane" , "tom"]
// names.push(3); err
names.push("Ravindra");


let numbers = [11,22,33]
// numbers.push(true); err
numbers.push(97);

let testStringArr : string[]
// testStringArr = [1,2,3]  err
testStringArr = ["one" , "two" , "three"];


let testNumArr : number[]
// testNumArr = [true , "hi" , 23]  err
testNumArr = [12,13,14]


let testStringOrNumArr : (string | number) []
testStringOrNumArr = [1,"two" , 3]


//OBJECTS
let user = {
    username : "john",
    age : 22,
    isAdmin : false
} 

user.username = "Ravindra"
user.age = 22
user.isAdmin = true
// user.phone = "+938223" err



let userObj : {
    username : string
    age : number
    isAdmin : boolean
};
userObj = {
    username : "Dinesh",
    age : 23,
    isAdmin : true,
    // phn : 33223;   err
}



let userObj2 : {
    username : string
    age : number
    isAdmin : boolean
    phone?: number
};
userObj2 = {
    username : "Dinesh",
    age : 23,
    isAdmin : true,
    phone : 33223
}



//ANY
let testAny;
testAny = 12
testAny= "HEllo"
testAny = true
testAny = [true]
testAny= {}

let testAnyArray : any[]
testAnyArray = [1,"two" , false , []];


//FUNCTIONS

let sayHi = () =>{
    console.log("Hi , Welcome");
}
// sayHi = "hi" err


let suncReturnString = () : string => {
    console.log("Hi")
    return "lama dev"
}


let multiple = (num : number) => {
    return num*2;
} 

let multiple2 = (num : number) : number => {
    return num*2;
}

let multiple3 = (num : number) : void => {
    // return num*2; err bcz we are returning
    //Do something except return
}

let sum = (num1 : number , num2 : number , another?:number) => {
    return num1+num2;
};
sum(2,3)


let func = (user : {username : string , age : number , phone? : string }) => [
    console.log(user.username),
]



// TYPE ALIASES
type UserType = {
    username : string,
    age : number,
    phone? : string
}
//Shortcut for the above TYPE ALIASES
let betterFunc = (user:UserType) => {
console.log(user.username)
}


type myFunc = (a:number , b:string) => void

let write : myFunc = (num , str) => {
    console.log(num + " times " + str)
}


type UserType2 = {
    username : string;
    age : number;
    phone? : string;
    theme : "dark" | "light"
}
const userWithTheme : UserType2 = {
    username : "John",
    age : 43,
    // theme : "pink"
    theme : "dark"
}



// INTERFACES
interface IUser {
    username : string;
    email : string;
    age : number;
}

interface IEmployee extends IUser {
    employeeId : number
}

const emp : IEmployee = {
    username : "tom",
    email : "tom@gmail.com",
    age : 22,
    employeeId : 1
}

const client : IUser = {
    username : "tom",
    email : "tom@gmail.com",
    age : 22,
    // employeeId : 1
}


// GENERICS

interface IAuthor {
    id : number,
    username : string
}

interface ICategory{
    id : number,
    title : string
}

interface IPost {
    id : number;
    title : string;
    desc : string;
    extra : IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
    id : number;
    title : string;
    desc : string;
    extra : T[]
}


const testMe : IPostBetter<string> = {
    id : 1,
    title : "post title",
    desc : "post desc",
    extra : ["str" , "str2"],
};


interface IPostEvenBetter<T extends object> {
    id : number,
    title : string,
    desc : string,
    extra : T[];
}


const testMe2 : IPostBetter<IAuthor> = {
    id : 1,
    title : "post title",
    desc : "post desc",
    extra : [{id : 1 , username : "Ravindra"}],
};



const testMe3 : IPostBetter<ICategory> = {
    id : 1,
    title : "post title",
    desc : "post desc",
    extra : [{id : 1 , title : "cat"}],
};