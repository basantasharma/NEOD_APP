// https://neod.bsg.com.np/api/different/pages

// https://neod.bsg.com.np/api/main/page



// https://neod.bsg.com.np/api/every/country/data/New%20ZeaLand


// https://neod.bsg.com.np/api/every/country/data/usa

// https://neod.bsg.com.np/api/every/country/data/UK

// https://neod.bsg.com.np/api/every/country/data/canada

// https://neod.bsg.com.np/api/every/country/data/Australia


export const onboardingData = async () => {
    try {
        const response = await fetch('https://neod.bsg.com.np/api/different/pages');
        const data = await response.json();
        return data?.onboarding;
    } catch (error) {
        throw new error("some error occured");
    }
}

export const mainPagedata = async () => {
    try {
        console.log("was here")
        const response = await fetch('https://neod.bsg.com.np/api/main/page');
        const data = await response.json();
        console.log(data, "from data")
        return data;
    } catch (error) {
        throw new error("some error occured");
    }
}

export const countryData = async (country) => {
    try {
        const response = await fetch(`https://neod.bsg.com.np/api/every/country/data/${country}`);
        const data = await response.json();
        return data?.Countries;
    } catch (error) {
        throw new error("some error occured");
    }
}