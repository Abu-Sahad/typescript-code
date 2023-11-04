{


    //types alias in typescript


    type student={
        name:string,
        age:number,
        gender:string,
        contractNumber?:string,
        address:string
    }

    const student1:student={

        name:'sahad',
        age:25,
        gender:'male',
        contractNumber:'017000000',
        address:'dhaka'

    }

    const student2:student={

        name:'Mir',
        age:40,
        gender:'male',
        address:'dhaka'

    }

    type UserName=string
    type IsAdmin=boolean
    const userName:UserName='persian'
    const isAdmin:IsAdmin=true

  type Add=(num1:number,num2:number)=>number

    const add:Add=(num1,num2)=>num1+num2
}