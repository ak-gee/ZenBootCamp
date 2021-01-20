var search = document.getElementById("search")
var table1 = document.getElementById('table1')
var newticket = document.getElementById('newticket');
var alltickets = document.getElementById('alltickets');
var tabid = document.getElementById('tabid');
var update = document.getElementById('update');
var delete1 = document.getElementById('delete1');


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
 /*

 
*/ 
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

  newticket.addEventListener("click",function(){
    var text = prompt("Enter subject,desciprtion,status,priority")
    body1 =text.split(',');
    let body2 = {
      'email':'email@yourdomain.com',
      'subject': body1[1],
      'description': body1[2],
      'status': body1[3],
      'priority':body1[4]
      
    }
 
    
    var body = {
      'email': 'email@yourdomain.com',
      'subject': 'Ticket subject',
      'description': 'Ticket description.',
      'status': 2,
      'priority': 1,
      
    }
    console.log(body,JSON.stringify(body))
    console.log(body2,JSON.stringify(body2))
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

  });
  update.addEventListener("click",function(){
    /*Update a Record */
  let body = {
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
   alert("PUT Method not allowed Error 405")
  console.log(json)
})
.catch(err => {
  console.log(err)
  alert(err)
});
 
  })
  delete1.addEventListener("click",function(){
    /*Delete a record */

fetch('https://newaccount1611087277669.freshdesk.com/api/v2/tickets/', {
  method: "DELETE",
  
  headers,//: {"Content-type": "application/json; charset=UTF-8"}//application/json
  credentials:"omit",
  mode:"cors",
  // body: JSON.stringify(body)
})
.then(response => response.json()) 
.then(json => {
  
  console.log(json)
  
  alert("DELETE Method not allowed Error 405")
})
.catch(err => {
  console.log(err)
  alert('error')});

  })
  alltickets.addEventListener("click",function(){
    response = fetch(url, {method:'GET', 
    headers: headers,
    credentials:"omit",
    mode:"cors" })   


    response.then( (data) => {
    // console.log( data.json())
    return data.json()})
    .then(json => {
      console.log(json)
      // console.log(json.length)

FillTable(json,json.length)})
    .catch((error) =>{

    console.log(error)
  alert(error)});

    });
     
  search.addEventListener("click",function(){
    response = fetch(url, {method:'GET', 
    headers: headers,
    credentials:"omit",
    mode:"cors" })   


    response.then( (data) => {
    // console.log( data.json())
    return data.json()})
    .then(json => {
      console.log(json)
      // console.log(json.length)

FillTable(json,json.length)})
    .catch((error) =>{

    console.log(error)
  alert(error)});

    });
     

    /*Function to Create New element*/
  function make_new(element, className, id,value) {
    var new_element = document.createElement(element)
    new_element.setAttribute('class', className)
    new_element.setAttribute('id', id)
    new_element.setAttribute('value', value)
    if(element==="button")
        new_element.innerText= value
    return new_element
    }

    var table= make_new('table','table','table')
    tabid.append(table)
    var idData=[ 'Ticket ID','Contact','Subject','Type','Date Time','Priority','Status']
    var fields=[ 'id','contact','subject','type','created_at','priority','status']

  function FillTable(tabledata,size){
    var tr = table.insertRow(-1)
      /*Make Column Names*/
    for(let i=0;i< idData.length;i++)
    {
      var th = make_new('th')
      th.innerHTML= idData[i]
      tr.appendChild(th)
    }
  
   
  /* FIll the Data*/
    for(let i=0;i<size;i++)
    {
        tr = table.insertRow(-1)
          for(let j=0;j<idData.length;j++)
          {
              var td= tr.insertCell(-1)
              td.innerHTML=tabledata[i][fields[j]]
              console.log(tabledata[i].id,[fields[j]],tabledata[i][fields[j]])
           
          }
      }
  
  } 
  
   
