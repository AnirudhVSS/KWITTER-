function addUser(){
    a= document.getElementById("USERNAME").value;
    localStorage.setItem("username", a);
    window.location= "kwitter_room.html";
    
}