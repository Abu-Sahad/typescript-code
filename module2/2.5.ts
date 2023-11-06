{

    //Function with generics 


    const createArray=(param:string):string[]=>{
        return [param]
    }



    const createArrayGeneric=<T>(param:T):T[]=>{
        return [param]
    }



    const resGeneric=createArrayGeneric<string>('bangladesh')
 
    type User={id:number;name:string}

    const resGenericObj=createArrayGeneric<User>({id:2222,name:'abu sahad'})








    const createArrayWithTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{
        return [param1,param2]
    }



    const res10=createArrayWithTuple<string,number>('bangladesh',2222)
 
    type User1={id:number;name:string}

    const addCourseToStudent=<T>(student:T)=>{
        const course='Next level Web Development'
        return{
            ...student,
            course
        }
    }


    const student1=addCourseToStudent({name:'abu Sahad',email:'sahad@gmail.com',devType:'NLWD'})


}

