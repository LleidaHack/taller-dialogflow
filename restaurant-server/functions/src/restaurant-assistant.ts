import { dialogflow, DialogflowConversation } from "actions-on-google";

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { WELCOME_INTENT, FALLBACK_INTENT, WHO_AM_I_INTENT, GOODBYE_INTENT, BOOK_TABLE_INTENT } from "./intents";
import { Reservation } from "./models/reservation";

export class RestaurantAssistant {

  private db: FirebaseFirestore.Firestore;
  public app: any;

  constructor () {
    // Set default credentials
    admin.initializeApp(functions.config().firebase);
    
    // Initialize listener for dialogflow intents
    this.app = dialogflow();
    // Connect to firestore database
    this.db = admin.firestore();
  }

  // Set an event for each intent
  public mapIntent() {

    this.app.intent(WELCOME_INTENT, (conv: DialogflowConversation) => {
      conv.ask("Hola! Soy el asistente del Restaurante Lleida Hack. Como puedo ayudarte?");
    });
    
    this.app.intent(FALLBACK_INTENT, (conv: DialogflowConversation) => {
      conv.ask("No le he entendido, puede repetirlo, por favor?");
    });
    
    this.app.intent(WHO_AM_I_INTENT, (conv: DialogflowConversation) => {
      conv.ask("Mi nombre es Guillem, Como ya te he dicho antes soy el asistente del Restaurante Lleida Hack.");
    });
    
    this.app.intent(GOODBYE_INTENT, (conv: DialogflowConversation) => {
      conv.close("Adios, que tenga un buen día");
    });

    this.app.intent(BOOK_TABLE_INTENT, async (conv: DialogflowConversation, params: any) => {
      const reservation = new Reservation(params);
      try {
        // Store reservation to firestore and then ask
        await this.db.collection('events').add(reservation.toDocument());
        conv.ask(`Okey! I'll reservate a table for ${reservation.numPeople} people at ${reservation.date} . See you!`);
      }
      catch (err) {
        conv.ask("Restaurant is full that day. Try to make another reservation... Sorry about that.");
      }
    });    
  }
}

