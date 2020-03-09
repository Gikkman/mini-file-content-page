export function updateVar(imgSrc: string, varWidth: string, varHeight?: string) {
    const img = new Image();
    img.onload = () => {
        const root = document.documentElement;
        root.style.setProperty(varWidth, img.width + "px");
        if(varHeight) root.style.setProperty(varHeight, img.height + "px");
    }
    img.src = imgSrc;
}