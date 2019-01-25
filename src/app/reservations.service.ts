import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentChangeAction } from 'angularfire2/firestore';
import { Reservation } from './reservation';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private firestore: AngularFirestore) { }

  public reservationChanges(): Observable<Reservation[]> {
    return this.firestore.collection<Reservation>('events').snapshotChanges().pipe(
      map(actions => actions.map(a =>  a.payload.doc.data() as Reservation)));
  }
}
