//Step 1create a request variable that issues the http request
//by creating an instance of xmlhttprequest
console.log("Debug");
var request = new XMLHttpRequest();


//Step2 Open a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true)

//send the request
request.send();
//Load the response when its ready
request.onload = function(){
	var data = JSON.parse(this.response);
/*the following lines are useful for debugging
console.log(data);
console.log(data.length);*/
for (let i = 0;i < data.length;i++)
	console.log(data[i].name+":"+data[i].flag);
}