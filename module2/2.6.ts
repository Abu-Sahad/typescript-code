{

    //Constraints in typescript


    const addCourseToStudent=<T extends{name:string;id:number;email:string}>(student:T)=>{
        const course='Next level Web Development'
        return{
            ...student,
            course
        }
    }


    const student1=addCourseToStudent({id:333,name:'abu Sahad',email:'sahad@gmail.com',devType:'NLWD'})

    const 
}