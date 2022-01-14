const firebaseConfig = {
    apiKey: "AIzaSyB0B0z1M_pF_IdluLXiv-u3PtN5HOddckY",
    authDomain: "sre-project-733d3.firebaseapp.com",
    projectId: "sre-project-733d3",
    storageBucket: "sre-project-733d3.appspot.com",
    messagingSenderId: "689186804225",
    appId: "1:689186804225:web:6fb67efd6ce694e413e600",
    measurementId: "G-DWRX3QL7M4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//   initialize variables
const auth = firebase.auth()
const database = firebase.database()

// set up our register function
function register () {
    
}