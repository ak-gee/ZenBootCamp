

async function sendAPIRequest(searchText){
    let API_ID= "6307b76d";
    let API_KEY = "df4bd9b979d9f7e956d3994eb1d8866f"
    let response = await fetch(`https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${searchText}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    readAPIData(data)
}


let srch = document.getElementById('#'+'id1')
// alert(id1)
id1.addEventListener("click",() =>{
    console.log("Button pressed")
    let txt = document.getElementById('txt').value;
    if(txt==='')
    alert("Enter name of recipe to search")
    else
   
    sendAPIRequest(txt)
})
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
    var contain ,cardDeck1;
    var card = [], img=[],cardbody=[],h5=[],src= [],a = [],button=[],cardtext=[],cardfoot=[];
        
    var callout=[],callouthdr=[],closebtn=[],calloutcont=[],cop=[];

    var btn = [],node=[],list=[];

function createBase(){
     contain = make_new('div','container-fluid','','')
    document.body.append(contain)


     cardDeck1 = make_new('div','card-deck','','');
    
    contain.append(cardDeck1);
}
   
function createCardDeck(data,n){   
 
 
    card[n] =  make_new('div','card','','')
    img[n] = document.createElement('img');    // Create an <img> element.
    img[n].classList.add('card-img-top');
    img[n].src = `${data.hits[n].recipe.image}`; 
    cardbody[n] =  make_new('div','card-body','','')
    cardtext[n] =  make_new('p','card-text','','')
    cardfoot[n] = make_new('div','card-footer','','')

    h5[n] =  make_new('div','card-title','','')
    h5[n].innerText = `${data.hits[n].recipe.label}`
    src[n] = make_new('div','card-text','','') 
    src[n].innerText = `Source: ${data.hits[n].recipe.source}`
    var cal = data.hits[n].recipe.calories.toFixed(2)
    var mg = data.hits[n].recipe.totalNutrients.MG.quantity.toFixed(2)
    var ca = data.hits[n].recipe.totalNutrients.CA.quantity.toFixed(2)
    var k = data.hits[n].recipe.totalNutrients.K.quantity.toFixed(2)
    var p = data.hits[n].recipe.totalNutrients.P.quantity.toFixed(2)
    var fe = data.hits[n].recipe.totalNutrients.FE.quantity.toFixed(2)
   
    src[n].innerHTML = `Tag: ${data.hits[n].recipe.healthLabels}<br>
                        Source: ${data.hits[n].recipe.source}<br>
                        Calories:${cal} <br>                   
                        Nutrients in mg:<br>
                        Calcium ${ca} ,  Potassium ${k}, Magnesium ${mg},Phospohorus ${p}  and Iron ${fe}<br>` 
                       
                       
    cardDeck1.append(card[n]);
    card[n].append(img[n])
    card[n].append(cardbody[n])
    cardbody[n].append(h5[n])
    cardbody[n].append(src[n])
    cardbody[n].append(cardtext[n])
    a1 =  document.createElement('a');
    cardbody[n].append(a1)
    a1.setAttribute('target','__blank')
    a1.href = `${data.hits[n].recipe.url}`;
    a1.innerText="Recipe"

       
    node[n] = document.createTextNode(`Ingredients: ${data.hits[n].recipe.ingredientLines}`);

    cardbody[n].append(cardfoot[n]);
 

 
    btn[n] =  make_new('button','btn-primary','','Ingredients')
     cardfoot[n].append(btn[n])
 
    btn[n].addEventListener("click",function(){
    
        list[n] = `${data.hits[n].recipe.ingredientLines}`.split(',')//.join('\n')
        console.log(list[n][0],list[n][1],list[n].length)
    

       var l1 = [];
        var ul = document.createElement('ul')
        cardfoot[n].append(ul);
         for (let no = 0;no<list[n].length;no++)
         {
            l1[no] = document.createElement('li')
            ul.append(l1[no]);
            
            var textnode = document.createTextNode(list[n][no]); 
            // l1.style.listStyle = "None";
            l1[no].style.fontSize = "18px";
            l1[no].appendChild(textnode)
        }
        
 
    })



}


function readAPIData(data){
    let i = 4;
    createBase()
    /*Card decks */
    createCardDeck(data,0)

    createCardDeck(data,1)

    createBase()

    createCardDeck(data,2)
    createCardDeck(data,3)
/*Card decks */
/*
    createBase()
    
    createCardDeck(data,4)

    createCardDeck(data,5)

    createCardDeck(data,6)
   createCardDeck(data,7)
   */
    
}

/* Trial code for reference
fetch("https://api.edamam.com/search?q=chicken&app_id=6307b76d&app_key=df4bd9b979d9f7e956d3994eb1d8866f&from=0&to=3&calories=591-722&health=alcohol-free")
.then((result) => {
    // console.log(result.json());//this shows output as pendin
    return result.json();//this returns the data
})
.then((data) => {
    console.log(data)
})
.catch((err)=>  console.log(err));
*/