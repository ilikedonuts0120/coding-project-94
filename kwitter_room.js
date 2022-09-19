
const firebaseConfig = {
      apiKey: "AIzaSyByR9AdyMtlheTmoDhWVs8ozxe6CtLfKYU",
      authDomain: "lets-chat-web-app-973fa.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-973fa-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-973fa",
      storageBucket: "lets-chat-web-app-973fa.appspot.com",
      messagingSenderId: "443692760082",
      appId: "1:443692760082:web:aecb36171096d67c536ccb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
