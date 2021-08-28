import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './config';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
export const auth = firebase.auth();
export const fb = firebase;
