{


//destructuring
//object 
//array


const user={
    id:345,
    name:{
        firstName:'abu',
        middleName:'sahad',
        lastName:'sheikh',
    },
    contactNo:'0170000000',
    address:'dhaka',
}


const {
    contactNo,
    name:{middleName},

}=user;

}

//array destructuring

const myFriends=['sahad','riyad','sojib','hridoy','rony']

const [,,bestFriend,...rest]=myFriends


