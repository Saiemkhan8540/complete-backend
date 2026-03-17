
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: "your_public_key",
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: "https://ik.imagekit.io/your_id"
});

async function uploadFile(buffer) {

    const result = await imagekit.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    });

    return result;
}

module.exports = uploadFile;








// const ImageKit = require("imagekit");

// const imagekit = new ImageKit({
//     publicKey: "your_public_key",
//     privateKey: "your_private_key",
//     urlEndpoint: "https://ik.imagekit.io/your_id"
// });

// async function uploadFile(buffer) {

//     const result = await imagekit.upload({
//         file: buffer,
//         fileName: "image.jpg"
//     });

//     return result;
// }

// module.exports = uploadFile;








//youtube ka code hai

// const ImageKit = require("@imagekit/nodejs");




// const imagekit = new ImageKit({

//     privatekey: "private_kcvS+5HAd8+62dlCljfdneGNmrc="
// })


// async function uploadFile(buffer) {

//     const result = await imagekit.files.upload({
//         file: buffer.toString("base64"),
//         fileName: "image.jpg"
//     })

//     return result;
// }

// module.exports = uploadFile;