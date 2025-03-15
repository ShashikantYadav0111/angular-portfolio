import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "shashikant-portfolio", appId: "1:425726758998:web:691feafe13831cda576bf7", storageBucket: "shashikant-portfolio.firebasestorage.app", apiKey: "AIzaSyCyfQOrBQ3-YSt79YaZb_gUjlKAsqMIW8U", authDomain: "shashikant-portfolio.firebaseapp.com", messagingSenderId: "425726758998" })), provideFirestore(() => getFirestore())]
};
