var search = document.getElementById("search")
var genre = document.getElementById('genre')
var list;
var select = document.getElementById('breeds');
var display = document.getElementById('disp');
var list = document.getElementById('list');


var API_KEY = "nK8OO1nHUcWgb55BdZx";
var FD_ENDPOINT = "newaccount161108.freshdesk.com";

var PATH = "/api/v2/tickets";
var url =  "https://" + FD_ENDPOINT + ".freshdesk.com"+ PATH;
// url= `https://newaccount161108.freshdesk.com/api/v2/tickets/
//${API_KEY}:XsendImmediately:true`

 url = 'https://newaccount1611087277669.freshdesk.com/api/v2/tickets';
let username = API_KEY;
let password = 'X';
let imm = true;

let headers = new Headers();


headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

response = fetch(url, {method:'GET', headers: headers })   
        
       
response.then( (data) => {
  return data.json()})
.then(json => console.log(json))
.catch((error) =>{

console.log(error)});
 

var body = {
  'email': 'email@yourdomain.com',
  'subject': 'Ticket subject',
  'description': 'Ticket description.',
  'status': 2,
  'priority': 1,
  'custom_fields[department]':'IT'
}


function parseJSON(response) {
return response.json()
}


fetch('https://newaccount1611087277669.freshdesk.com/api/v2/tickets', {
  method: "POST",
  body: JSON.stringify(body),
  headers: {"Content-type": "application/json; charset=UTF-8"}//application/json
})
.then(response => response.json()) 
.then(json => console.log(json))
.catch(err => console.log(err));
 


// Request.auth({
//   user: API_KEY,
//   pass: "X",
//   sendImmediately: true
// })
// .end(function(response){
//     console.log(response.body)
//     console.log("Response Status : " +response.status)
//     if(response.status != 200){
//       console.log("X-Request-Id :" + response.headers['x-request-id']);
//     }
//   });

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function New(id) {
    document.getElementById(id).classList.toggle("show");
    alert(document.getElementById(id).value);
  }
  
 
  // Close the dropdown if the user clicks outside of it
 window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            alert(document.getElementById(id).value);
          openDropdown.classList.remove('show');
        }
      }
    }
  }
search.addEventListener("click",function(){

    // list = fetch(`https://binaryjazz.us/wp-json/genrenator/v1/genre/`)
 
list.then((alldogs) => { 
    
   return  alldogs.json();
  
}).then((alldogs) => {
    
    let data = alldogs;
    
 
   genre.value = data;
 

    
 
})
.catch((error) => {
    console.log(error)
})
  
    // random = fetch(`https://binaryjazz.us/wp-json/genrenator/v1/story/20`)
  
    random.then((music) => {
          return(music.json())
       })       
    .then((music) =>{
  
    let val = ""
   
    for (let t=0;t<20;t++){
         val = val + `${music[t]}<br>`
         var li = document.createElement('li')
         var textnode = document.createTextNode(`${music[t]}`);
   
         li.appendChild(textnode);
       
        document.getElementById('list').appendChild(li)
    }
    
    
     })
   
  
    .catch((error) => {
        console.log(error)

    })
    

});
