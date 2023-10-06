import robot from "robotjs";

export const getScreenSize = () => {
    return robot.getScreenSize();
}

export const captureScreen = () => {
    return robot.screen.capture();
}