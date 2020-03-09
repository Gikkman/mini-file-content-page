let elem: HTMLElement | null;

export function updateContent(s: string) {
    if(!elem) elem = document.getElementById('content');
    if(elem === null) return;

    elem.innerText = s;
}