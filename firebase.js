import firebase from 'firebase';
import 'firebase/firestore';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const firestoreSettings = {
	timestampsInSnapshots: true
};
firestore.settings(firestoreSettings);
export default firestore;