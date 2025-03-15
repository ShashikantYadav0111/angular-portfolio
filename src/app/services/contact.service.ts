import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Query } from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firestore:Firestore) { }
  
  async addQuery(query:Query){
    const queryCollection = collection(this.firestore,'queries');
    await addDoc(queryCollection,query);
    console.log("Item Added");
  }
  
}