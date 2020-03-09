import { getFileContent } from "./file-repository";
import { updateContent } from "./content-update-service";

setVariablesFromImages();
setInterval( () => {
    getFileContent( apply )
}, 1000);

function apply(err?: Error, data?: string): void {
    if(err) return updateContent(err.message);
    else if(data) return updateContent(data);
    else updateContent("~ No content ~");
}

function setVariablesFromImages() {
    const img = new Image();
    img.onload = () => {
        const root = document.documentElement;
        root.style.setProperty('--width', img.width + "px");
        root.style.setProperty('--height', img.height + "px");
    }
    img.src = "/border-left.png";
}