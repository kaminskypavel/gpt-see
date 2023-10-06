import robot from "robotjs";
import {Screen} from "robotjs"
import Jimp from "jimp";

export const getScreenSize = () => {
    return robot.getScreenSize();
}


export const captureScreen = () => {
    return robot.screen.capture();
}