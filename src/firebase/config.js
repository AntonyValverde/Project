import { initializeApp } from "firebase/app";
import "firebase/firestore";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6vSiH2z8cO-HhD04tpsaeYHG0YQNGzUE",
  authDomain: "mantenimientobuses-922ff.firebaseapp.com",
  projectId: "mantenimientobuses-922ff",
  storageBucket: "mantenimientobuses-922ff.appspot.com",
  messagingSenderId: "560401986689",
  appId: "1:560401986689:web:bd93f6f4139762e2678980"
};

const app = initializeApp(firebaseConfig);

export default firebaseConfig