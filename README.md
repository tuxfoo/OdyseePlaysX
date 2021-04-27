# Odysee Plays X

> (inspired by [TwitchPlaysPokemon])

Connect to Odysee websocket and sends inputs to a program and stream it, TwitchPlaysPokemon style. Should support linux/windows/mac.

### In Action

Pokemon on Windows

![](http://zippy.gfycat.com/ActiveLankyHorsemouse.gif)

Pokemon Red running in a Ubuntu 13.10 VM

![](http://i.imgur.com/aLSO6MK.gif)

### Caveats

On Windows, the program has to be *focused* in order to send keyboard inputs so you won't be able to use your computer at the same time (unless you run the program in a virtual machine).

On linux I could not get the inputs to forward to the selected window with xdotool, so it had to be active. You can see if it works for you by uncommenting the xdotool command in server.js and commenting out the other one.

## Installation

- Install [Node.js] (check that you can run node/npm)
- Clone the repo: `git clone https://github.com/tuxfoo/OdyseePlaysX`
- Install `node_modules` in the created folder: `npm install`
- If Linux: install [xdotool](http://www.semicomplete.com/projects/xdotool/): `apt-get install xdotool`
- If Windows: install [python] and [python win32] (with corresponding versions)

## Setup

- Start the program you are going to be sending keys to: (VisualBoyAdvance, Notepad)
- Append environment variables or modify `config.js` if you need to change the options: `CLAIM_ID=claimidhere npm start`
- Run the server with `npm start`

---

### Config

- change the claim id in the websocket URL in server.js
- change the program name in config.js


### Misc

*https://github.com/hzoo/ChatPlays/ used MutationObservers in the browser*

Using IRC lets you get all the messages; you can't always get all messages through the browser (quickly or consistently) so this is a better approach overall as others have done.

### Method

- Connect to IRC
- Use regex to match for certain commands
- Print out username/message
- Hook up to a program/emulator
    - if on windows: probably uses the **win32** api (window has to take focus)
    - otherwise: **xdotool**
- Stream it with [OBS](https://obsproject.com)

### Contributions

Feel free to give suggestions or report bugs!

[node.js]:http://nodejs.org
[python win32]:https://github.com/mhammond/pywin32/releases
[python]:http://www.python.org/
[TwitchPlaysPokemon]:http://twitch.tv/TwitchPlaysPokemon
