# m.tix Revamped
Created By:
18220089 David Nathanio Gabriel Siahaan

This project is part of my Final Project as a graduation requirement of Institut Teknologi Bandung's Information System and Technology.
m.tix Revamped is a redesigned version of m.tix, which is an Online-Ticketing Application for Cinema XXI.
This is still a Minimum Viable Product (MVP), so not all features and pages have been implemented. However, this app gives a 
better representation of the design prototype I created in Figma.
For example, this app has a working filtering and searching function that is not possible to create in Figma.

## Requirements

- [Node.js LTS release](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) for installing dependencies and running the application.

> Only Node.js LTS releases (even-numbered) are recommended. As Node.js [officially states](https://nodejs.org/en/about/releases/), "Production applications should only use Active LTS or Maintenance LTS releases."

## Recommended Tools
- Expo Go for iOS and Android
  - 🤖 [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) - Android Lollipop (5) and greater.
  - 🍎 [iOS App Store](https://itunes.com/apps/exponent) - iOS 11 and greater.

## Installing Node.js

You can install Node by going to the [website directly](https://nodejs.org/en/) and clicking the side that says "Recommended For Most Users". This will guide you through the process.

Once Node has been installed, run the following on the command line to make sure
it's been installed correctly:

```
$ node -v
```

## Install Project Dependencies

Open terminal in project directory, or make sure that your terminal is already in the correct directory.

Now, run the following commands to install the project dependencies (note that
you'll need an internet connection to do so).

```
$ npm install
```

> The `cd` command above takes you into the project directory so you can install
> the correct dependencies. You should replace `Desktop/New-App` with the actual
> path to your unzipped project folder.

## [Optional] Log In to Expo

Verify that the installation was successful by running `npx expo whoami`. You're not logged in yet, so you will see "Not logged in". You can create an account by running `npx expo register` if you like, or if you have one already run `npx expo login`, but you also don't need an account to get started.

[You can learn more about Expo CLI here](https://docs.expo.io/get-started/installation/#installing-expo-cli)

## Running

To start your project, simply run: `npm start` inside of the project directory

### [Optional] Running in an emulator

You can run your app on your mobile device, on the iOS simulator (if you have
a Mac), or on the Android emulator. If you'd prefer to run your app on an
emulator, see the installation instructions below.

- [iOS Simulator](https://docs.expo.io/workflow/ios-simulator/)
- [Android Studio](https://docs.expo.io/workflow/android-studio-emulator/)

After installing and launching the emulator, and while in the command line, type `a` to launch on the Android emulator or `i` to launch on the IOS simulator. You can also press `w` to launch on web.
To do this, make sure that the Expo Go installed on your emulator is compatible with this project!

### Running on your Android or iOS Device

The fastest way to get up and running is to use the Expo Go app on your iOS or Android device. Expo Go allows you to open up apps that are being served through Expo CLI.

- 🤖 [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) - Android Lollipop (5) and greater.
- 🍎 [iOS App Store](https://itunes.com/apps/exponent) - iOS 11 and greater.

After installing, scan the barcode you see in the command line.

> If you are using custom packages, then there is a chance your app will not run on Expo Go. In that case, you need to [create your own build of the app](https://docs.expo.dev/build/setup/)

## File Structure

```
.
    ├── assets                 # Static assets like images and fonts.
    ├── config                 # JS representation of fonts, images, and more
    ├── screens                # React Native code for the screens built.
    ├── themes                 # JS representation of the theme
    ├── .gitignore             # List of files to ignore when comitting with Git
    ├── App.js                 # Entry point for the app
    ├── app.json               # Configuration file for the app, used by Expo
    ├── AppNavigator.js        # Code for the app's navigators
    ├── package.json           # The metadata for your project, including dependencies
    └── README.md              # This file.
```
