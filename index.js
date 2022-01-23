import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";
  const firebaseConfig = {
    apiKey: "AIzaSyB0B0z1M_pF_IdluLXiv-u3PtN5HOddckY",
    authDomain: "sre-project-733d3.firebaseapp.com",
    databaseURL: "https://sre-project-733d3-default-rtdb.firebaseio.com",
    projectId: "sre-project-733d3",
    storageBucket: "sre-project-733d3.appspot.com",
    messagingSenderId: "689186804225",
    appId: "1:689186804225:web:474247af9955db9213e600",
   
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getDatabase();
let Submit_btn = document.getElementById("Submit_btn");
Submit_btn.addEventListener("click", function(){
  let email = document.getElementById("email")
  let password = document.getElementById("password")
  let items = document.getElementById("items")
  createUserWithEmailAndPassword(auth, email.value, password.value,items.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user==>", user)
    set(ref(db, `users/${user.uid}`),{
    email: email.value,
    password: password.value,
    items:   items.value
    // ...
  });
  // OnValue(ref(db, `users/${user.uid}`),(data)=>{
  //   console.log("data===>",data.val())
  // })
  // get(ref(db, `users/${user.uid}`))
  // .then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });
  
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error==>", errorMessage)
    // ..
  });
});