'use strict';

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { dialogflow } from 'actions-on-google';

const WELCOME_INTENT = 'Default Welcome Intent';
const FALLBACK_INTENT = 'Default Fallback Intent';
const BOOK_TABLE_INTENT = 'book.table';
const WHO_AM_I_INTENT = 'who.am.i';
const GOODBYE_INTENT = 'Goodbye';

const app = dialogflow();

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const events = db.collection('events');

app.intent(WELCOME_INTENT, (conv) => {
  conv.ask("I am Lleida Hack restaurant's asistant. How can I help you?");
});

app.intent(FALLBACK_INTENT, (conv) => {
  conv.ask("I didn't undertand you, can you reapeat it please?");
});

app.intent(WHO_AM_I_INTENT, (conv) => {
  // conv.ask("My name is William, I am Lleida Hack restaurant's asistant.");
});

app.intent(GOODBYE_INTENT, (conv) => {
  conv.close("Bye! Have a nice day");
});

app.intent(BOOK_TABLE_INTENT, (conv, params) => {
  // TODO: Store the reservation
  conv.ask(`Okey! I'll reservate a table for ${params.numPeople} people at ${params.date} . See you!`);
});



exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);