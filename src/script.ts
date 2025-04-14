// number
// let a:number = 12
// console.log(a)

// Boolean
// let isLoggedIn:boolean | undefined
// console.log("Before assigning",isLoggedIn)
// isLoggedIn = true
// console.log("After assigning",isLoggedIn)

// String 
// let fName:string = "Dinesh"
// console.log(fName)

// array 
// let mixedArr:(number | string)[] = [1,2,3,4,5, 'dinsh', "chandani"]
// console.log(mixedArr)


// Tuples - it is the arr but it is strictly defining that only this values will come not too much not less
// let tupleExample:[number, string] = [22, "Chandani"]
// console.log(tupleExample)


// string enum 
// enum Role {
//     adamin = "Dinesh", 
//     user = 10, 
//     // it is not recommended to use the mixed enums as it will throw an error for the reverse mapping
// }

// console.log(Role[10])
// console.log(Role["Dinesh"]) //thow an error


// Union type
// let a:number | string = "dinesh"
// console.log("before union type", a)
// a= 12;
// console.log("after union type", a)

// Any type
// let a:any = "dinesh"
// console.log("any type", a)
// a = true
// console.log("any type", a)

// Unknown type
// let a:unknown = "dinesh"
// console.log(a)
// a = 12
// console.log(a)


// literal type 
// let color:"red"
// color = "red"
// console.log("before",color)
// color = "green" // gave an error
// console.log(color)

// Object type
// let developer:{
//     skills:string[],
//     name: string,
//     age?:number //optional
// }

// developer = {
//     skills:["javascript", "nodeJs"],
//     name:"Dinesh"
// }

// Type Alias (Custom type)
// type buttonSize =  "big" |"small" | "medium"
// let myBTNSIZE:buttonSize = "small"
// console.log(myBTNSIZE)

// complex example
// type myGroup={
//     name:string,
//     friendNames: string[],
//     anyPlans?:string[]
// }
// let newGroup:myGroup={
//     name:"abc",
//     friendNames:["abc","pqr"],
// }
// console.log(newGroup)


// function type 
// let greet = (name:string)=> `welcome, ${name} `
// console.log(greet("dinesh"))

// Interference means the typeScript will guess the data type of the given nuber

/* Intersection Types (two or more alias types)- 
    Inteersection types means the type that allows to use combine two or more types into single with the help of the "&" sign
*/

// type employeeName = {
//     name:string
// }
// type employeeId = {
//     id: number
// }
// type employeeDetails = employeeName & employeeId
// const newEmployee:employeeDetails = {
//     name:"dinesh",
//     id:101
// }
// console.log(newEmployee)



/* 
    Interfaces - The interfaces tell us what properties & types an object should have. OR An interfaces defines the shape or structure of the object 
*/

// interface employee{
//     name:string,
//     age?:number,
//     id:string,
// }

// interface salaryStatus{
//     payment:number,
//     perks?: string
// }

// interface getEmoployeeDetails extends Pick<employee, "name">,salaryStatus{
//     isHappy: boolean
// }
// const Newemployee:getEmoployeeDetails = {
//     name:"DC",
//     payment: 30000,
//     isHappy: false
// }
// console.log(Newemployee)

// class
// class BottleFactory{
// constructor(public name:string, public shape: string){
//     this.name = name;
//     this.shape = shape
// }

// read(){
//     console.log(`Bottle name is ${this.name} and the shape is ${this.shape}`)
// }
// }
// const cirulcarBottle = new BottleFactory("melton", "ciruclar")
// console.log(cirulcarBottle)

// accessModifiers
// public - anyone can access
// private - access only upto the class
// protected - access to the class and also accessible in extends


class chargingPoint{
    constructor(public nameOfVeh: string, private price: number, protected isGood : string){
        this.nameOfVeh = nameOfVeh,
        this.price = price;
    }
    getBill(){
        console.log(`The vehicle is ${this.nameOfVeh} and the charging amount is ${this.price}`)
    }

    getReviews(){
        console.log(`the review is ${this.isGood} `)
    }

    
}

const newChargingPoint = new chargingPoint("activa", 1299, "not to good")
