// getting img from static
export function static_getImage(image_path) {
    try{
        const sourceFile = require('../common');

        return sourceFile.hostname.slice(0, -4) +
            '/static' + image_path;

    } catch (e) {
        console.log(e);
    }
}