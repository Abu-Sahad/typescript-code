{
    // Introduction to generics

 

    // const rollNumber:number[]=[3,6,8];
    const rollNumbers: Array<number> = [3, 6, 8];

    // const mentors:string[]=['a','b','c','d'];
    const mentors: Array<string> = ['a', 'b', 'c', 'd'];

    // const boolArray:boolean[]=[true,false,true];
    const boolArray: Array<boolean> = [true, false, true];


    //
    //dynamic and reuseable
    type GenericArray<T> = Array<T>

    // const rollNumber:number[]=[3,6,8];
    const rollNumbers1: GenericArray<number> = [3, 6, 8];

    // const mentors:string[]=['a','b','c','d'];
    const mentors1: GenericArray<string> = ['a', 'b', 'c', 'd'];

    // const boolArray:boolean[]=[true,false,true];
    const boolArray1: GenericArray<boolean> = [true, false, true];
 
const user:GenericArray<{name:string,age:number}>=[
    {
        name:'sahad',
        age:25
    },
    {
        name:'abc',
        age:25
    }
]



//generic tuple

type GenericTuple<X,Y>=[X,Y]

const manus:GenericTuple<string,string>=['Mr.X','Mr.Y']

const UserWithID:GenericTuple<number,{name:string,email:string}>=[123,{name:'sahad',email:'sahad@gmail.com'}]
}