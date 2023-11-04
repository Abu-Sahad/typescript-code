{
    //spread operator
    //rest operator
    //destructuring


    //learning spread operator

    const bros1: string[] = ['Mir', 'Firoz', "Mizan",]
    const bros2: string[] = ['Pervez', 'Nahid', "Rahat",]

    // bros1.push(bros2) error asbe
    bros1.push(...bros2)
}

//object spread operator

const mentors1 = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan',

}
const mentors2 = {
    prisma: 'Firoz',
    next: 'Tonmoy',
    cloud: 'Nahid',
}
const mentorList = {
    ...mentors1,
    ...mentors2
}



//learn rest operator


const greetFriends=(...friends:string[])=>{
    // console.log(`hi ${friends1} ${friends2} ${friends3}`);
friends.forEach((friend:String)=>console.log(`hi ${friend}`))

    greetFriends('Abul','kabul','babul','ubul');
}