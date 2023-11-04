{
    //Interface, type vs interface

type User1={
    name:string;
    age:number;
};

type UserWithRole1=User1&{role:string};

const user1:UserWithRole1={
    name:'Sahad',
    age:100,
    role:'accociate manager'
}

//interface user korle uporer code ta aktu change hobe 
interface User2{
    name:string;
    age:number;
}
const user2:User2={
    name:'Sahad',
    age:100,
}
//interface 


interface UserRoll2 extends User2{
    role:string;
}

const user3:UserRoll2={
    name:'Sahad',
    age:100,
    role:'manager'
}
//js--->object , array-->object function--->object

type Roll1=number[];

interface Roll2{
    [index:number]:number
}
const rollNumber:Roll2=[1,2,3]

type Add1=(num1:number,num2:number)=>number

interface Add2{
    (num1:number,num2:number):number
}
const add:Add2=(num1,num2)=>num1+num2

    //
}