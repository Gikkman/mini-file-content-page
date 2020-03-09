import { FileResponse } from "../src-shared/file-response";
import { updateVar } from "./css-variable-from-image";

setVariablesFromImages();
setInterval( () => {
    getFileContent( apply )
}, 1000);

function apply(err?: string, data?: string): void {
    if(err) return updateContent(err);
    else if(data) return updateContent(data);
    else updateContent("~ No content ~");
}

function setVariablesFromImages() {
    updateVar('/border-left.png', '--width-left');
    updateVar('/border-right.png', '--width-right');
    updateVar('/border-mid.png', '--width-mid', '--height');
}

function getFileContent( callback: (err?: string, data?: string) => void) {
    fetch('/file')
        .then( (res: Response) => {
            return res.json();
        })
        .then( (res: FileResponse) => {
            if(res.err) callback(res.err);
            else if(res.data) callback(undefined, res.data);
            else callback();
        })
        .catch( (reason: any) => {
            callback();
        });
}

function updateContent(s: string) {
    const elem = document.getElementById('content');
    if(elem === null || elem.parentElement === null) return;

    elem.innerText = s;
    elem.parentElement.style.display = 'flex';
}