{
    //Ternary operator|| optional chaining  operator& nullish coalescing operator

    const age: number = 18;
    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('not adult');
    }

    const isAdult = age >= 18 ? "adult" : 'not adult'
    console.log({ isAdult });


    //nullish operator
    //null/undefined---->decision making

    const isAuthenticated = '';

    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'
    console.log({ result1 }, { result2 });



    type User = {
        name: string,
        address: {
            city: string,
            road: string,
            presentAddress: string,
            permanentAddress?: string
        }
    }

    const value: User = {
        name: 'sahad',
        address: {
            city: 'sirajgong',
            road: '07',
            presentAddress: 'Gopinathpur'
        }
    }

    //nullish coalescing operator
    const permanentAddress = value?.address?.permanentAddress ?? 'no Permanent Address'
    console.log(permanentAddress);

}