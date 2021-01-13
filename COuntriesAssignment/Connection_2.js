
function make_new(element, className, id,value) {
    var new_element = document.createElement(element)
    new_element.setAttribute('class', className)
    new_element.setAttribute('id', id)
    new_element.setAttribute('value', value)
    if(element==="button")
        new_element.innerText= value
    return new_element
    }
    var ctn, hd, cardDeck1;
    var ul,l1,l2,l3, textnode;
   
    var card = [], img=[],cardbody=[],h5=[],src= [],a = [],button=[],cardtext=[],cardfoot=[];
        
    var callout=[],callouthdr=[],closebtn=[],calloutcont=[],cop=[];

    var btn = [],node=[],list=[];
    function createBase(){
    ctn = make_new('div','container-fluid','contain','')
    document.body.append(ctn)
    hd = make_new('div', 'row heading', 'hd')
    ctn.append(hd)
    hd.innerText = "Countries of The Earth"
    hd.style.fontSize = '3rem'
    hd.setAttribute('text-align','center')


       
   }
   function createCardDeck(data,n){   
 
      
    card[n] =  make_new('div','card','','')
    card[n].classList.add('mt-5');
    img[n] = document.createElement('img');    // Create an <img> element.
    img[n].classList.add('card-img-top');
    img[n].classList.add('img-fluid');

    img[n].src = data[n].flag; 
    cardbody[n] =  make_new('div','card-body','','')
    cardtext[n] =  make_new('p','card-text','','')
   

    cardDeck1.append(card[n]);
    card[n].append(img[n])
    card[n].append(cardbody[n])
    cardbody[n].append(cardtext[n])
    
     ul = document.createElement('ul')
    cardtext[n].append(ul);

     l1 = document.createElement('li')
    ul.append(l1);
    

     textnode = document.createTextNode("Country: "+data[n].name); 
    l1.style.listStyle = "None";
    l1.style.fontSize = "0.8rem";
    l1.appendChild(textnode)

     l2 = document.createElement('li')
    ul.append(l2);
    textnode = document.createTextNode("Capital: "+data[n].capital);
    l2.style.listStyle = "None"; 
    l2.style.fontSize = "0.6rem";
    l2.appendChild(textnode)

     l3 = document.createElement('li')
    ul.append(l3);
    textnode = document.createTextNode(`Lat: ${data[n].latlng[0]} , Long: ${data[n].latlng[1]}`); 
    l3.style.listStyle = "None"; 
    l3.style.fontSize = "0.6rem";
    l3.appendChild(textnode)

     
    }

    
    createBase(); 

var div=document.createElement('div')
document.body.append(div)

var blankrow = make_new('div', 'row', 'blankrow')
div.append(blankrow)
var blankcol = make_new('div', 'col-12 bg-text p-3', 'blankcol')
blankrow.append(blankcol)

var btnrow1 = make_new('div', 'row', 'btnrow1')
div.append(btnrow1)

//Step 1create a request variable that issues the http request
//by creating an instance of xmlhttprequest -->


var p = new Promise((resolve,reject) => {
    var request = new XMLHttpRequest(); 

    // Step2 Open a connection -->
    request.open('GET','https://restcountries.eu/rest/v2/all',true)
    
    //send the request -->
    request.send();
    
    //Load the response when its ready -->     
    request.onload = function(){
 
        var data = JSON.parse(this.response); 
     
        for (let i = 0;i < data.length;i++){
    

 if (i%6===0)
{
    cardDeck1 = make_new('div','card-deck','cardDeck1','');
    ctn.append(cardDeck1);
}

createCardDeck(data,i)
if (data.length>100) resolve(data);
        else reject("Data incorrect");

}
}

});
p.then((result1) => {
    console.log("Displayed on Page")

})
.catch((err) => {
    console.log(err)
});

