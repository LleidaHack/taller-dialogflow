import { dialogflow, DialogflowConversation } from "actions-on-google";

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { WELCOME_INTENT, FALLBACK_INTENT, WHO_AM_I_INTENT, BOOK_TABLE_INTENT } from "./intents";
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

  private randomize(possible: string[]): string {
    const index = Math.round(Math.random() * (possible.length - 1));
    return possible[index];
  }

  // Set an event for each intent
  public mapIntent() {

    this.app.intent(WELCOME_INTENT, (conv: any) => {
      conv.ask("Hola! Soy el asistente del Restaurante Lleida Hack. Como puedo ayudarte?");
    });
    
    this.app.intent(FALLBACK_INTENT, (conv: any) => {
      conv.ask(this.randomize([
        "No le he entendido, puede repetirlo, por favor?",
        "Ups, no he entendido a que te refieres.",
        "¿Disculpa?",
        "¿Decías?",
        "¿Podrías repetirlo, por favor?"
      ]));
    });
    
    this.app.intent(WHO_AM_I_INTENT, (conv: any) => {
      conv.ask(this.randomize([
        "Mi nombre es Guillem, Como ya te he dicho antes soy el asistente del Restaurante Lleida Hack.",
        "¿Porque te interesa tanto mi nombre?",
        "Ya no voy a decirtelo más.."
      ]));
    });
    

    this.app.intent(BOOK_TABLE_INTENT, async (conv: any, params: any) => {
      const reservation = new Reservation(params);
      try {
        // Store reservation to firestore and then ask
        await this.db.collection('events').add(reservation.toDocument());
        conv.close(this.randomize([
          `De acuerdo! Reservaré una mesa para ${reservation.numPeople} personas el dia ${new Date(reservation.date).getDate()}. Nos vemos!`,
          `Gracias por su reserva. Hasta el dia ${new Date(reservation.date).getDate()}`
        ]));
      }
      catch (err) {
        conv.ask(this.randomize([
          "El restaurante esta lleno para esta fecha. Prueve otro día gracias.",
          "Lo siento el restaurante està lleno. Pruebe con otro día"
        ]));
      }
    });    
  }
}

