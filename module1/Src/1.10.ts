{

    //Union and intersection types

    type FrontDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'

    type FullDeveloper = 'frontDeveloper' | 'expertDeveloper'

    type Developer = FrontDeveloper | FullDeveloper


    const newDeveloper: FrontDeveloper = 'fakibazDeveloper'


    type User = {
        name: string;
        email?: string;
        gender: "male" | "female";
        bloodGroup?: "O+" | "A+" | "Ab+"
    }

    const user1: User = {
        name: 'sahad',
        email: 'sahad@gmail.com',
        gender: "male",
        bloodGroup: "A+"

    }


    type FrontendDeveloper={
        skills:string[],
        designation1:'frontend Developer'
    }
    type BackendDeveloper={
        skills:string[],
        designation2:'backend Developer'
    }

type FullStackDeveloper=FrontendDeveloper&BackendDeveloper

const fullstackdeveloper:FullStackDeveloper={
    skills:['html','express','JavaScript'],
    designation1:'frontend Developer',
    designation2:'backend Developer'
}


}