//Never,unknown and nullable type

{

    //

    //nullable types
    const searchName = (value: string | null) => {
        if (value) {
            console.log('Searching');
        } else {
            console.log('There is nothing search');
        }

    }

    searchName(null);


    //unknown Typeof

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600
            console.log(`There speed is ${convertedSpeed} ms^-1`);
        }
        if (typeof value === 'string') {
            const [result, unit] = value.split(' ')
            const convertedSpeed = (parseFloat(result) * 1000) / 3600
            console.log(`There speed is ${convertedSpeed} ms^-1`);
            console.log(result);
        }
    }
    getSpeedInMeterPerSecond(`1000 kmh^-1`)



    //never type

const  throwError=(msg:string):never=>{
    throw new Error(msg)
}
throwError('muskil se error hogaye')

    //

}