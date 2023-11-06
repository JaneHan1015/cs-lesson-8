import path from "path";
import fs from "fs";
import sharp from "sharp";

//Purpose
//Img down scaler

// 1. read img
let imgPath = "./testImage.jpg"
if (fs.existsSync(imgPath) == true) {
    if (path.extname(imgPath) == ".jpg")
    sharp(imgPath).jpeg({
        quality: 10
    })
    .toFile("./fixed.jpg")
}
// 2. process
// 3. save to img
