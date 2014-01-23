# Cordova Boilerplate

*The Cordova Boilerplate combines the power of a Single Page Application framework (Durandal JS) wrapped in a mobile development framework (Cordova) to deliver rich web applications to mobile devices in form of a native application.*

This is a sample application consisting of the following integrated tools and frameworks to help you get started to quickly build a mobile application:
- Cordova
-	Durandal JS
  - jQuery
  - Knockout
  - RequireJS
  - Bootstrap
-	FastClick
-	Less

The application consists of a few showcases of Cordova and Durandal functionalities. First three options – Vibrate, Get Coordinates and Show Device Info – demonstrate how Cordova is used to access device specific functions. Note that the device must be able to support the operation to perform the function.

The last option – Go to Next Screen – shows how Durandal is used to navigate and transition between different screens in the application. Tapping the “Go to Next Screen” button will take you to a new “pin” screen. Entering four random digits on the pin screen will take you back to the main screen. 

## Setting up the Environment for Cordova

1. Install NodeJS http://nodejs.org/

2. Install Cordova using Node Package Manager. Run ‘npm install –g cordova’ http://cordova.apache.org/#download 

3. Clone this project to your local directory and you are ready to make changes and build your application. If using Sublime Text editor, you can open the *CordovaBoilerplate.sublime-project*.

4. (Optional) I would suggest setting up a server (ex. IIS) to serve the application in your favourite browser for easy debugging and development. Simply point your web server to the '.\www' folder in the project.

## Building your application

### For Android Devices

1. Install Java JDK http://www.oracle.com/technetwork/java/javase/downloads/index.html 
  a. Run the installer
  b. Go to [ Control Panel -> System -> Advanced -> Environment Variables… ] and create a new System Variable “JAVA_HOME” to your Java installation (ex. C:\Program Files\Java\jdk1.7.0_51)
  c. Add “%JAVA_HOME%\bin” to PATH Environment Variable

2. Install Apache Ant http://ant.apache.org/bindownload.cgi 
  a. Unzip the binary to C:\Program Files (x86)\Apache Ant\
  b. Create a new System Variable in 
  c. Add Ant to PATH Environment Variable 

3. Install Android SDK http://developer.android.com/sdk/index.html 
  a. Unzip the binary to C:\Program Files\Android SDK\
  b. Run Android SDK Manager and install default packages

4. Add Android platform to Cordova. Run ‘cordova platform add android’

5. Build your application for Windows 8. Run ‘cordova build android’

**Note**: If you would like to install your application to a Samsung device, please download and install Samsung drivers first at http://www.samsung.com/us/support/downloads 

### For iOS Devices

**Note**: You can build your application for iOS in one of two ways – using Cordova CLI on an Apple Mac computer or by uploading your source code to Adobe Build (see instructions here). Both methods require an Apple Developer license to build applications for iOS devices.

1. Make sure Cordova is installed on your Mac. The set up requirements are the same as for Windows outlined in the section above.

2. Install XCode from the App Store.

3. Add iOS platform to Cordova on the Mac. Run ‘cordova platform add ios’

4. Build your application for iOS. Run ‘cordova build ios’. This will create a new folder ‘.\platforms\ios’, which will contain an XCode project that you can deploy to your device. 

*Note that any changes made in this project may be overwritten the next time you issue the ‘cordova build ios’ command; therefore, all changes to your application should be made in ‘.\www’ folder and then built with ‘corodva build ios’ command. Only minor platform specific changes can be made in the XCode project itself. *

### For Windows 8 devices

**Note**: To build your application for Windows 8, you must have Windows 8 OS installed.

1. Add Windows 8 platform to Cordova. Run ‘cordova platform add windows8’

2. Build your application for Windows 8. Run ‘cordova build windows8’. This will generate a new Vistual Studio project with the contents of your application in ‘.\platforms\windows8’ folder.

*Note that any changes made in this project may be overwritten the next time you issue the ‘cordova build windows8’ command; therefore, all changes to your application should be made in ‘.\www’ folder and then built with ‘corodva build ios’ command. Only minor platform specific changes can be made in the Visual Studio project itself.*

### Using Adobe Build

Adobe Build is a Cloud service offered by Adobe that can build your Cordova/Phonegap application for you targeting multiple platforms at the same time, including iOS, Android, Windows Phone 7, WebOS, Blackberry OS and Symbian OS

1. Login to Adobe Build at https://build.phonegap.com/) using a GitHub account or sign up for a new Adobe Cloud account.

2. Add a new application. Select the “private” tab and click “Upload a .zip file”. 

3. Zip up and upload the ‘.\www’ folder of your application. Adobe Build will automatically start building your application for all available platforms. When done, simply download and install the desired package file.

## Working with the Boilerplate Project

You can start adding new screens to your application right away by adding new “views” to the ‘.\app\views’ folder and their corresponding “view-models” to the ‘.\app\viewmodels’ folder. Then, add a route to your new screen in the ‘.\app\viewmodels\shell.js’ file.

**index.html**
This is the main entry point to your application. It contains the basic HTML structure of your Single Page Application, where all other screens are injected. 
This page loads the ‘require.js’ file, which in turn loads all other dependencies and the rest of the application. The ‘data-main=”app/main”’ attribute tells Require JS, where the configuration is. In this case, it is in the “.\app\main.js” file.

**app\main.js**
This file consists of the Require JS configuration, which loads other JavaScript libraries and dependencies required for this application, as well as the main Durandal module “durandal/app”, which defines, configures and starts the Durandal framework.
Note how Durandal first starts the app and then sets the root of the application to ‘viewmodels/shell’.
Here we are also activating the FastClick library, which removes the 300ms delay when a link is tapped on a touchscreen device. 
 
Finally, we are also overriding the default “window.alert” function once Cordova has finished loading to use native alert pop-ups of the device throughout the application. This way, if you were to use the JavaScript “alert()” function in the application, a native device pop-up will appear instead of a browser one.

**app\viewmodels\shell.js**
As shown in the previous section, this is the root of your application. All routes for our application are defined here, which allow you to navigate between different screens. 
Also, any HTML content placed in ‘.\app\views\shell.html’ will be added to each of your screens.

**css\less**
The application has been set up to use Less style sheets. To compile Less style sheets, download and install WinLess and add the '.\css\' folder to WinLess. Then, uncheck all files that WinLess will compile and minify, **except** boot.less
*boot.less* should be the only file checked to compile by WinLess. This file imports all other Less style sheets. During the compilation process, it will automatically import and compile other style sheets that are imported through boot.less
 
If you’re adding a new screen to this application and have some screen-specific styling that you’d like to apply:

1. Create a new Less file in the ‘.\css\less\’ folder

2. Add another line to the boot.less file to import it. Ex: “@import ‘less\\test’

3. Open WinLess from the task bar and click Refresh Folder

4. Uncheck the checkbox next to your new Less file. Then minimize WinLess.