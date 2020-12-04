import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDRL2-h7fHRwYIi3yLhUsuHO3YeMUeSssc',
  authDomain: 'movie-now-inosoftware.firebaseapp.com',
  projectId: 'movie-now-inosoftware',
  storageBucket: 'movie-now-inosoftware.appspot.com',
  messagingSenderId: '113030902291',
  appId: '1:113030902291:web:e6910c27d9775aaa2285e6',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
