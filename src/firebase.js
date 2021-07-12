import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD9_c47XYmuT0k4_vR5UKUnFB1IDXgICWc",
	authDomain: "amclone-df881.firebaseapp.com",
	projectId: "amclone-df881",
	storageBucket: "amclone-df881.appspot.com",
	messagingSenderId: "142153485576",
	appId: "1:142153485576:web:80e32d40d37d9c1e3af0bd",
	measurementId: "G-CHS5J9LGBS",
};
console.log(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
