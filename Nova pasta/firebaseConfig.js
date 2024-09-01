// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTnej7ipAdAFjJLcJ4StXLAusfKT6OXhI",
  authDomain: "adm-bsid.firebaseapp.com",
  projectId: "adm-bsid",
  storageBucket: "adm-bsid.appspot.com",
  messagingSenderId: ""53043063533",
  appId: "1:53043063533:web:997d2ba80652d2f31cbae4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };