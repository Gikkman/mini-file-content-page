# mini-file-content-page
Super small app for rendering the content of a text file in a neat web page

# Installation

Run `git clone https://github.com/Gikkman/mini-file-content-page.git`

Then `npm install --only=prod && npm run build`

# Setup

Replace the border images under `/public` to the images you want. Make sure the three images have the same height.

Then, open the `app-config.json` and edit the values. Set the port to the port you want to use, set the border names to match the name of the border images (file extension and all), and lastly set the location of the file to monitor.

# Usage

Run `npm run start`

Open a browser window to `localhost:{port}`. Make sure the browser window is at least as high as the height of the border images. You can also add a BrowserSource in OBS, and set the BrowserSource to watch that URL.

# Edit

The CSS is pretty bare bones, but you can easilly edit it if you use a OBS BrowserSource. 

* `#content` is the ID of the div with the text content.
* `.mid` is the class of the div with the middle border
* `.left` is the class of the div with the left border
* `.right` is the class of the div with the right border

Typically, you probably would probably want to start from the following:

`
#content {
    font-size: 24px;
    font-family: 'Segoe UI', sans-serif;
    font-weight: bold;

    color: black;
}
`