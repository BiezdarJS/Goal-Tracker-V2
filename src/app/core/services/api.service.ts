import { inject, Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { DatabaseReference, get, ref } from '@angular/fire/database';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private db = inject(AngularFireDatabase); // Injecting the database instance

  constructor() {}

  getData<T>(endpoint: string): Observable<T> {
    // Get a reference to a node in your Realtime Database
    const dbRef: DatabaseReference = ref(this.db.database, endpoint);

    // Use the `get()` method, which returns a promise
    return from(
      get(dbRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            return snapshot.val(); // Return the value of the snapshot
          } else {
            throw new Error('No data available'); // Handle case where no data exists
          }
        })
        .catch((error) => {
          throw error; // Handle any errors
        })
    );
  }

}
