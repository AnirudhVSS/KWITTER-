
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA0nudALo35VKzvR71HsdmBOhEWHQflF6o",
      authDomain: "kwitter-9d7dc.firebaseapp.com",
      projectId: "kwitter-9d7dc",
      databaseURL:"https://kwitter-9d7dc-default-rtdb.firebaseio.com/",
      storageBucket: "kwitter-9d7dc.appspot.com",
      messagingSenderId: "591997019377",
      appId: "1:591997019377:web:a3e23679ff8fcb4330f550"
                        };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id=" + Room_names + " onclick='direct_roomname(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("ROOM_NAME");
      window.location= "index.html";
}

var u_name=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="WELCOME " + u_name + ", ";

function addRoom(){
      var r_name=document.getElementById("room_name").value;
      localStorage.setItem("ROOM_NAME", r_name);
      firebase.database().ref("/").child(r_name).update({
            purpose:"ADDING ROOM NAME"
      });
      window.location="kwitter_page.html";
}
function direct_roomname(a){
console.log(a);
localStorage.setItem("ROOM_NAME", a);
window.location="kwitter_page.html";
}