# Battlefield 2 Update Tool

## What it's doing?

I sometimes playing with my friends an old game - Battlefield 2. I'm also creating custom maps/mods or other things to make gameplay more fun.
It was hard to tell each other of my non-technical friends how to install new map or other addon and there was a few mistakes that interrupted our gameplay so I created this app to make my life a bit easier. It's basically install my "updates" with one click.

## How it exactly works?

1. Get Battlefield install directory from Windows Registry.
2. Checks is game's version matches 1.5 and basic mods are installed.
3. Connect to FTP server and compare files there with local files by size.
4. If some files are different or not exist - download it.

## Libraries used:

- Electron-packager - display UAC dialog window (if game is installed on C:// then admin permissions are required to modify files)
- Electron-windows-installer - create output as single .exe file without installation required
- Winreg - access to Windows Registry
- Basic-FTP - FTP connection
- Nodemon - live reload

## Screens

![Screenshot](/assets/screen.png)
