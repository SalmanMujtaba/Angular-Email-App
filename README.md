# Angular 5-Email-Form

The Angular 5 application is crafted to send an email via a contact form. This could be used be easily integrated into anyone's website.

## Features:
* UI is based on [Material Design for Bootstrap!](https://mdbootstrap.com/angular)
* Google map integration.
* Angular 5 form validation and quirks.
* Firebase integration via (Cloud functions): Does not really require an explicit server like Node.js to send an email.
* Nodemailer
* Update#1: Latest version of firebase, that is 5.5.0, would work just as fine as the previous verions.

## Getting Started

You can simply run npm install and start the application. However, the configuration would be specific to my requirement. You'll need
to follow the steps below to tweak the page according to your needs.

### Prerequisites
#### Firebase Setup ####
* Setup a [firebase project](https://firebase.google.com/docs/web/setup). And save the code below in a text file.
```
var config = {
apiKey: "<API_KEY>",
authDomain: "<PROJECT_ID>.firebaseapp.com",
databaseURL: "https://<DATABASE_NAME>.firebaseio.com";,
storageBucket: "<BUCKET>.appspot.com",
messagingSenderId: "<SENDER_ID>",
};

```
* Go to this [link](https://firebase.google.com/pricing/) and upgrade your firebase project to Spark(free).
* Follow the [guide](https://firebase.google.com/docs/functions/get-started) to setup firebase project uptill(excluded):add the addMessage() function
* If you get an error related to firebase-admin go ahead and install this in functions folder.
* Also, install [nodemailer](https://nodemailer.com/about/). Make sure you're in functions directory.

```
cd functions
npm install firebase-admin
npm install nodemailer
```
* While going through the Firebase setup (firebase functions init) make sure to select Make sure to select the cloud functions options form the command line.

#### Environment ####
Not really a prerequisite, but it is related to the steps above
*Go to src/environments/environment.ts and copy the snippet(config) which you had saved previously. It should finally look like this:
```
export const environment = {
production: false,
firebase: {
apiKey: "AIzaSyD4XxkcB4ae9XmMj_ir3kQKTkifgaqR0GA",
authDomain: "login-540f1.firebaseapp.com",
databaseURL: "https://login-540f1.firebaseio.com",
projectId: "login-540f1",
storageBucket: "login-540f1.appspot.com",
messagingSenderId: "444457079657"
}
};
```
#### Google Map integration and Setup ####
* Get your google maps api key from [here](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key) and paste it here in app.module.ts
```
imports: [
AgmCoreModule.forRoot({
apiKey: 'your key here'
})
],
```
* Get your latitude and longitude and paste it in contact.component.ts :
```
public map: any = { lat: 35.330153, lng: -80.732529 };
```

### General Guidelines
#### Setup Sender's email address and password ####
```
firebase functions:config:set gmail.email="myusername@gmail.com" gmail.password="secretpassword"
```
* You should get a message that says Functions config updated. if all went well. You can check your Functions config by typing
```
firebase functions:config:get
```
It’ll return a .json-looking response with your current config.

#### Deploy function ####
* Send the function to firebase (command line)
```
firebase deploy
```
### Installing

Pull the project and do:

```
npm install
ng serve
```

### Update#1
* The firebase-admin and firebase-functions was updated for this project, to the latest versions. There is a slight change in how we access the **Realtime Database event** now. Please read the description related to **onWrite** from the link attached below.

```
"firebase-admin": "^6.0.0",
"firebase-functions": "^2.0.5"
```
https://firebase.google.com/docs/functions/beta-v1-diff#realtime-database

## Acknowledgments

* https://medium.com/@markgoho/create-a-contact-form-in-angular-using-cloud-functions-for-firebase-5e390bdf5600

## [Useful Link](https://www.linkedin.com/pulse/angular-5-email-form-salman-mujtaba/?published=t)

## Please go through the package.json files, and make sure you have the exact versions of the dependencies as mine. Hit me up for any queries!
