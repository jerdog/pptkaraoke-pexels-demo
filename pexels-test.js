require('dotenv').config()
const { PEXELS_API_KEY } = process.env.PEXELS_KEY
const PEXELS_API_URL = "https://api.pexels.com/v1/";

console.log(PEXELS_API_URL);
getRandomImage("ocean", data => {
    console.log(data);
});

function getRandomImage(query, photo) {
    const options = {
        url: PEXELS_API_URL + "curated?per_page=1&page=1",
        headers: {
          Authorization: PEXELS_API_KEY,
        },
    };
    
    if (query) {
        options.url += "&query=" + encodeURIComponent(query);
    }

    console.log(query);


    fetch(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(body);
            if (data && data.photos && data.photos.length > 0) {
                const photo = data.photos[0];
                callback(null, photo.src.original);
            } else {
                callback(new Error("No photos found"));
            }
        } else {
            callback(new Error("Failed to fetch photos from Pexels API"));
        }
    });
}

//     request(options, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         const data = JSON.parse(body);
//         if (data && data.photos && data.photos.length > 0) {
//         const photo = data.photos[0];
//         callback(null, photo.src.original);
//         } else {
//         callback(new Error("No photos found"));
//         }
//     } else {
//         callback(new Error("Failed to fetch photos from Pexels API"));
//     }
//     });
// }

module.exports = {
    getRandomImage: getRandomImage,
};