import Jimp from "jimp";
import fs from "node:fs";
import path from "node:path";
import robot from "robotjs";

export const mkdirp = (path: string) => {
    fs.mkdirSync(path, {recursive: true});
}

function convertToImage(robotScreenPic) {
    const image = new Jimp(robotScreenPic.width, robotScreenPic.height);
    let pos = 0;
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
        image.bitmap.data[idx + 2] = robotScreenPic.image.readUInt8(pos++);
        image.bitmap.data[idx + 1] = robotScreenPic.image.readUInt8(pos++);
        image.bitmap.data[idx + 0] = robotScreenPic.image.readUInt8(pos++);
        image.bitmap.data[idx + 3] = robotScreenPic.image.readUInt8(pos++);
    });
    return image
}

export const dumpImage = async (outPath: string, image: robot.Bitmap) => {
    const dir = path.dirname(outPath);
    mkdirp(dir);
    const jimpImage = convertToImage(image);
    jimpImage.write(outPath);
}