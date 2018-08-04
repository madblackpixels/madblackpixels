// getting img from static
export function media_fileURL(file_path) {
    try{
        const sourceFile = require('../common');

        return sourceFile.hostname.slice(0, -4) + file_path;

    } catch (e) {
        console.log(e);
    }
}