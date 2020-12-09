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
/*the following lines are useful for debugging*/
console.log(data);
console.log(data.length);
/*Day5 Assignment*/
/*Get all the countries from Asia continent /region using Filter function */
var Asian = data.filter(it=>{ return it.region==='Asia'});
console.log(Asian);
var name=Asian.forEach((item,index)=>{console.log(item.name);

});

/*Get all the countries with population of less than 2 lacs using Filter function*/
var Below_2_lakh = data.filter(ite=>{ return ite.population<200000});

console.log("Countries with Population Below 2 Lakhs: ");

var res = Below_2_lakh.forEach(item=>{console.log(item.name+" has :"+item.population)});
/*Print the following details name, capital, flag using forEach function */

var details = data.forEach((item,index)=>{console.log("Name: "+item.name+" ,Capital :"+item.capital+", Flag: "+item.flag);});

/*Print the total population of countries using reduce function */
var tot_population = data.reduce((sum,item)=>{return item.population+sum;},0);
console.log("Total Population: " +tot_population);

/* Print the country which use US Dollars as currency.*/
var temp = data.map((item)=>{ 
var res="";

		//console.log(item.name,item.currencies.length,item.currencies);
		for (let t in item.currencies)
		{
			if (item.currencies[t].code==='USD')
			
			res= res+"  "+ item.name;
	
		}
//console.log(res);
return res});

console.log("Following Countries Use USD " );
temp.forEach(item =>{ if (item!=="")
console.log(item);});



/*Day1 Assignment*/
/*DisplayFLags*/
console.log("Flag URLS: " );
for (let i = 0;i < data.length;i++){
	console.log(data[i].name+":"+data[i].flag);
}

}
