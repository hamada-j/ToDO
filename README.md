![ScreenShot](https://github.com/hamada-j/ToDO/blob/feeature_dev/Images/app.png)
<img align="left" src="./images/app.png" width=200 >

# Todo-in-Fire app with Angular, Angular-Material, AngularFire2, and Firebase.

Here is a fine To DO app built with
**Angular v9** framework and backend in
**Firebase**
with
**OAuth**authentication and database.
| ![ScreenShot](images/auth.png)| ![ScreenShot](images/login.png)|

## Demo

![ScreenShot](images/todo.png)
Try the demo at <a href="https://todo-in-fire.web.app/" target="_blank">https://todo-in-fire.web.app/</a>.

## Stack FAN (Firebase Angular NodeJS)

- Angular 9, CLI, AngularFire2
- Firebase
- RxJS
- SASS
- Typescript

#### Clone the app

```shell
$ git clone https://github.com/hamada-j/ToDO.git
```

#### Install package dependencies,

```shell
$ cd ToDO
$ npm install
```

#### Start the dev server in `localhost:4200`

```shell
$ npm start
```

## Deploy to Firebase

![ScreenShot](images/db.png)

#### Prerequisites

- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Enable authentication providers for your Firebase project.
- Create a Database in Firebase project.

#### Configure

Edit `.firebaserc` in the project root:

```json
{
  "projects": {
    "default": "id_of_your_project"
  }
}
```

Edit the firebase configuration in `src/environments` with specific info from Firebase

```typescript
export const environment = {
  production: true,
  firebase: {
    apiKey: "XXXXXXXX",
    authDomain: "todo-in-fire.XXXXX.com",
    databaseURL: "https://todo-in-fire.XXXX.com",
    projectId: "todo-in-fire",
    storageBucket: "todo-in-fire.XXXX.com",
    messagingSenderId: "XXXX",
    appId: "XXXXX",
    measurementId: "XXXXX",
  },
};
```

#### Install firebase-tools

```shell
$ npm install -g firebase-tools
```

#### Build and deploy the app

```shell
$ npm run build
$ firebase login
$ firebase init
$ --->select hosting<---
$ --->dist<---
$ No ---> single page
$ No ---> overwrite index.html
$ firebase deploy
```

## Commands

|`npm start`|Start development server @ `localhost:4200`|
|`npm run build`|build the application to `./dist`|
|`npm run lint`|Lint `.ts` files|
