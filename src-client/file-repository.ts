import { FileResponse } from "../src-shared/file-response";

export function getFileContent( callback: (err?: Error, data?: string) => void) {
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