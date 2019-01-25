import { API_KEY } from './firebase.api.key';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: API_KEY,
    authDomain: "provacastella-83f36.firebaseapp.com",
    databaseURL: "https://provacastella-83f36.firebaseio.com",
    projectId: "provacastella-83f36",
    storageBucket: "provacastella-83f36.appspot.com",
    messagingSenderId: "145592827206"
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
