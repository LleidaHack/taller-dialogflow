import { RestaurantAssistant } from "./restaurant-assistant";
import * as functions from 'firebase-functions';

const assistant = new RestaurantAssistant();
assistant.mapIntent();

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(assistant.app);