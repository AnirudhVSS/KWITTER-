//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
      if(childKey != "purpose") {
         
//Start code
firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id, message_data);
nAME= message_data['name'];
mESSAGE=message_data['message'];
lIKE=message_data['like'];
name_tag="<h4>" + nAME + "<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>" + mESSAGE + "</h4>";
like_tag="<button class='btn btn-warning' id= " + firebase_message_id + " value= " + lIKE + " onclick='update_like(this.id)'>";
like_img="<span class='glyphicon glyphicon-thumbs-up'>LIKE: " + lIKE + "</span></button><hr>";
row=name_tag + message_tag + like_tag + like_img;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
var u_name=localStorage.getItem("username");
var room_name=localStorage.getItem("ROOM_NAME");
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("ROOM_NAME");
      window.location= "index.html";
}

function send(){
      var m=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
         name:u_name,
         message:m,
         like:0   
      });
      document.getElementById("message").value=" ";
}
 function update_like(child){
 console.log("child" + child);
 var button_id = child;
 var likes = document.getElementById(button_id).value;
 var new_likes = Number(likes) +1;
 console.log(new_likes);
 firebase.database().ref(room_name).child(child).update({
       like:new_likes
 });
}