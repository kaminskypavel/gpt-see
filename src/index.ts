import {dumpImage,captureScreen} from "./utils";

// Get mouse position.
const screenshot = captureScreen();
dumpImage("./out/screenshot.png", screenshot);


console.log("Hello World!");