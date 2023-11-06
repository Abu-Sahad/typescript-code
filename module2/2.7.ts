{
    // generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = 'bike' | 'car' | "ship";
    type Owner2 = keyof Vehicle


    const user={
        name:'mr. Sahad',
        age:24,
        address:'mirpur-2'

    }

    



   const  getPropertyValue=<X,Y extends keyof X>(obj:X, key:Y ) =>{
        return obj[key]
    }
    const car={
        model:'toyo ta',
        year:200,
    }
   const  result1=getPropertyValue(car,'model')
//    obj['age'] 
}