# twitch-overlay
Front-end overlay for FISTTeam stream channel on Twitch.tv.

## Usable pieces
Any HTML file can be used as an overlay component. The following are descriptions of the initial file options:

- `index.html` - The full overlay layout in one file. This is useful for development to preview all components together, or if streaming a game narrower than 16:9.
- `under.html` - The background components. This contains everything that can layer under the video feed in OBS.
- `over.html` - The overlapping components. This contians everything that should layer over the edge of the video (if the game is in 16:9).

We might consider breaking up the components further into additional HTML files for more granular control within OBS proper.

## Changing text
As of now, all on-screen text contents are controlled by the local file `text.json`. (Specifically, the header text, footer text, and couch names.) Ideally we'd have a page somewhere to allow editing this more easily on the fly, but for now we must edit this via the file in the repo itself at https://github.com/samanthamed/twitch-overlay/blob/master/text.json. A general Github account accessible by the entire group might be useful if we want more people to have access to edit this.

## Changing stylesheets
This was designed to support additional stylesheets in the future via URL parameters. To start out with, there are default styles (`default.css`) and `no-bg.css`, which is a test file matching the default styles, but with the background gradient removed. To preview this, use this URL format:

https://samanthamed.github.io/twitch-overlay/?style=no-bg

Any future stylesheets added to the styles folder can be used the same way. (For example, if we made a Christmas themed layout called xmas.css, we could switch to it at any time using `?style=xmas`.) The code enabling this exists in `script.js`.

All HTML files in the main branch of the repo will support this now and in the future. For example, see: https://samanthamed.github.io/twitch-overlay/under.html?style=no-bg
