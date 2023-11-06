{
    //Generic with Interface
    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T
    }
    type PoorLaptop={
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<PoorLaptop> = {
        name: 'sahad',
        computer: {
            brand: 'Dell',
            model: 'A-1234sr',
            releaseYear: 2013
        },
        smartWatch: {
            brand: 'Applo',
            model: 'a-10bb',
            display: 'OLED'
        }
    }


    interface appleWatch {
        brand: string;
        model: string;
        display: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    const richDeveloper: Developer<appleWatch> = {
        name: 'sahad sheikh',
        computer: {
            brand: 'Dell',
            model: 's-14225akh',
            releaseYear: 2014
        },
        smartWatch: {
            brand: 'Apple',
            model: 'watch 11',
            display: 'OLED',
            heartTrack: true,
            sleepTrack: true
        }
    }
    //
}