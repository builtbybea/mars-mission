﻿interface ImageOfTheDay {
    url: string;
}

const apiUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

export async function getImageOfTheDay(): Promise<ImageOfTheDay>  {
    const apiResponse = await fetch(apiUrl);
    return await apiResponse.json();
}


    