import { getFileContent } from "./file-repository";
import { updateContent } from "./content-update-service";

setInterval( () => {
    getFileContent( apply )
}, 1000);

function apply(err?: Error, data?: string): void {
    if(err) return updateContent(err.message);
    else if(data) return updateContent(data);
    else updateContent("~ No content ~");
}