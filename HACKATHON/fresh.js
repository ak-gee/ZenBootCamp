var search = document.getElementById("search")
var table1 = document.getElementById('table1')
var list;
var select = document.getElementById('breeds');
var display = document.getElementById('disp');
var list = document.getElementById('list');


var API_KEY = "nK8OO1nHUcWgb55BdZx";

var url = 'http://newaccount1611087277669.freshdesk.com/api/v2/tickets';
var username = API_KEY;
var password = 'X';
var imm = true;

var headers = new Headers();

headers.append('content-Type',"application/json");
headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

 
/*Create a NEW Record */
var body = {
  'email': 'email@yourdomain.com',
  'subject': 'Ticket subject',
  'description': 'Ticket description.',
  'status': 2,
  'priority': 1,
  
}


function parseJSON(response) {
return response.json()
}
 
fetch('https://newaccount1611087277669.freshdesk.com/api/v2/tickets', {
  method: "POST",
  
  headers,
  credentials:"omit",
  mode:"cors",
  body: JSON.stringify(body)
})
.then(response => response.json()) 
.then(json => console.log(json))
.catch(err => {
  console.log(err)
  alert(error)
});
 
 

/*Update a Record */
var body = {
  'email': 'email@yourdomain.com',
  'subject': 'Ticket subject',
  'description': 'Ticket description.',
  'status': 2,
  'priority': 2,
  'id':13,
  
}

fetch('https://newaccount1611087277669.freshdesk.com/api/v2/tickets', {
  method: "PUT",
  
  headers,
  credentials:"omit",
  mode:"cors",
  body: JSON.stringify(body)
})
.then(response => response.json()) 
.then(json => {
  // alert(json[1])
  console.log(json[0].id)
})
.catch(err => {
  console.log(err)
  alert(error)
});
 

/*Delete a record */

fetch('https://newaccount1611087277669.freshdesk.com/api/v2/tickets/13', {
  method: "DELETE",
  
  headers,//: {"Content-type": "application/json; charset=UTF-8"}//application/json
  credentials:"omit",
  mode:"cors",
  // body: JSON.stringify(body)
})
.then(response => response.json()) 
.then(json => {
  
  console.log(json)
})
.catch(err => {
  console.log(err)
  alert('error')});



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
    response = fetch(url, {method:'GET', 
    headers: headers,
    credentials:"omit",
    mode:"cors" })   


    response.then( (data) => {
    // console.log( data.json())
    return data.json()})
    .then(json => console.log(json))
    .catch((error) =>{

    console.log(error)
  alert(error)});
    });
