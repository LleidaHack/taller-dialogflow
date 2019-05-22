import { API_KEY } from './firebase.api.key';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: API_KEY,
    authDomain: 'taller-chatbot-75f52.firebaseapp.com',
    databaseURL: 'https://taller-chatbot-75f52.firebaseio.com',
    projectId: 'taller-chatbot-75f52',
    storageBucket: 'taller-chatbot-75f52.appspot.com',
    messagingSenderId: '267696100400',
    appId: '1:267696100400:web:2d3a1374810e50d1'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
