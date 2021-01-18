 /*Function to Create New element*/
 function make_new(element, className, id,value) {
    var new_element = document.createElement(element)
    new_element.setAttribute('class', className)
    new_element.setAttribute('id', id)
    new_element.setAttribute('value', value)
    if(element==="label")
        new_element.innerText= value
    return new_element
    }
    
ListWord=[
    ['apple','mango','kiwi','orange','help','life','success','introduction'],
    ['India','USA','Mexico','Indonesia','Brazil','Japan','Chile','Panama',]
]
const TOTALATTEMPTS =4;
function ChooseCategory(){


}

function RandomPick(){

}
function Word(enter){
     
    /*if enter == random pick */
    /*If equal return correct else give message*/
    Display('Correct!')
    /*else give message */
    Display('Wrong Guess!')
   
}
function ReadTextValue(enter){
    /*Check against the random value that was actually the correct answer */
    Word(enter)

}
function chooseWordLetter(){

}
function Letter(){
    /*checkif all filled*/
    AllFilled()       /*If yes */
        Word()
   
    CheckLetter()
    /*if present */
    SubtractFromRepo()
    /*Display in position */
    DisplayPositions()

    /*Allfilled */
 
}
var hd, contain,title,submit,enter,play,canvas,gamearea,footer,exp;
var he1,h2,btn1,btn2,clr,output;
var choice,check,canvas,context,canvas1;
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var list= [],hd,attempts=0;

btn1 = document.getElementById("btn1");


btn2 = document.getElementById("btn2");
clr = document.getElementById("clr");
sub = document.getElementById("sub");
canvas= document.getElementById("canvas");
canvasholder = document.getElementById("canvasholder");
 

sub.disabled = true;
enter = document.getElementById("enterval");
enter.value=""
hint = document.getElementById("hint");
output = document.getElementById("output");
output.value ="GUESS!"
answer = document.getElementById("answer");
answer.style.borderColor = "white"
answer.value=""

btn1.addEventListener('click', function () {
    choice = 1;
    btn2.disabled = true;
    sub.disabled = false;
    RandomChoose(choice)
   
});

btn2.addEventListener('click', function () {
    choice = 2;
    btn1.disabled = true;
    sub.disabled = false;
    RandomChoose(choice)
 
});
clr.addEventListener('click', function () {
    choice = 0;
    btn1.disabled = false;
    btn2.disabled = false;
    sub.disabled = true;
    enter.value="";
     
    context.clearRect(0, 0, canvas.width, canvas.height);  
    context.fillStyle = "white";
    console.log(canvas.width, canvas.height)
     
    answer.value = "";
    answer.style.borderColor = "white"
    output.value ="GUESS!"
    answer.style.backgroundColor = "white"

    attempts=0;
    MakeHuman();
     
});

var finalval;
sub.addEventListener('click', function () {
    if (enter.value !== ""){
        finalval = enter.value.toUpperCase()
        console.log(finalval)
        check(finalval);
    }
    else
        alert("Enter some value")
});
SetMainPageContents()
MakeAlphabets()
MakeHuman()

function MakeHang(){
    context = canvas.getContext('2d');    
    context.strokeStyle = "purple"
    context.lineWidth = 1;
    context.beginPath();    
    MakeLines(200,100, 200,5 );
    MakeLines(200,5, 62,5 );
    MakeLines(60,5,60,16 );
    /*Sad Face */
    context.beginPath();
    context.arc(60, 28, 3, 0, Math.PI * 1, true); 
    context.stroke();
}

function MakeHuman(){
    context = canvas.getContext('2d');    
    context.strokeStyle = "purple"
    context.lineWidth = 1;
    context.beginPath();    

    context.arc(60, 25, 10, 0, Math.PI * 2, true); 
    context.stroke();
    /*Happy Face */

    context.beginPath();
    context.arc(60, 26, 5, 0, Math.PI * 1, false); 
    context.stroke();

    /*Eyes */
   
    context.beginPath();    

    context.arc(55, 22, 2, 0, Math.PI * 2, true); 
    context.stroke();

    context.beginPath();    
  
    context.arc(65, 22, 2, 0, Math.PI * 2, true); 
    context.stroke();

    MakeLines(60,36,60,70);
    MakeLines(60, 46, 100, 50);

    MakeLines(60, 46, 20, 50);
    MakeLines(60, 70, 100, 100);
    MakeLines(60, 70, 20, 100);
    
}
function MakeLines(fromx,fromy,tox,toy){
    context.strokeStyle = "purple"
    context.lineWidth = 0.5;
    context.moveTo(fromx, fromy); 
    context.lineTo( tox, toy);
    context.stroke();

}
function MakeAlphabets(){
    ltr = document.getElementById("alphabetBtns");
    card = make_new('ul','','alphabet','')

 
    for (let i =0;i < alphabet.length;i++){
        list[i] = make_new('li','letter','letter','')
        list[i].classList.add("btn-primary")
        list[i].style.backgroundColor = "gray";//	#FFB6C1";//"#EE82EE";
        list[i].style.borderColor = "white"
        
        list[i].innerHTML = alphabet[i];
        list[i].value = alphabet[i];
        // console.log(alphabet[i],list[i].value)
       
        alphabetBtns.append(card)
        card.append(list[i])
        list[i].addEventListener('click',function(){
        // console.log(list[i].innerHTML)
        
        enter.value =enter.value+list[i].innerHTML
        // console.log(enter.value)
        })
       
    }
    

}
var word;
function RandomChoose(choice){
    let UpperCaseList;
    UpperCaseList = ListWord[choice-1].map(a => a.toUpperCase())
    word = UpperCaseList[Math.floor(Math.random() * ListWord[choice-1].length)];
    hint.innerHTML = `HINT :It is ${word.length} letters long`
    // console.log(UpperCaseList,word)
}
function EraseHappyFace()
{
    context.beginPath();
    context.clearRect(60 - 5 - 1,25 - 4 - 1, 5 * 2 + 2, 5 * 2 + 2);
    context.closePath();
   
//now, erase the arc by clearing a rectangle that's slightly larger than the arc
 
// context.clearRect(x - radius - 1, y - radius - 1, radius * 2 + 2, radius * 2 + 2);
 
}

function check (finalval)
{
  
 
        attempts = attempts + 1;
        console.log('Checking')
        var n = (word===enter.value.toUpperCase())

        if (n)
        {
             
            output.value ="Correct!You Won"
            answer.value = word;
        }
        else if (attempts === TOTALATTEMPTS){
     
            output.value ="HANGMAN!"
            sub.disabled = true;
            EraseHappyFace()
            MakeHang()
            answer.value = 'Correct Answer is '+ word;
            answer.style.borderColor = "green"
            answer.style.backgroundColor = "green"
          
        }
        else{
             
            output.value = `${TOTALATTEMPTS - attempts} attempts left,Keep Trying` 
          
        }

       
       
     }

function SetMainPageContents(){
    hd = document.getElementById("hd")
    hd.innerHTML="THE HANGMAN GAME"
  

    he1 = document.getElementById("he1")
    he1.innerText="Guess words or countries,make a choice"
      he1.style.color="white"


}
 
function  MakeMainPage(){

hd = make_new('header','hd','','Hangman')
document.body.append(hd)
hd.innerText="HANGMAN"

gamearea = make_new('section','section','','Enter your guess')
document.body.append(gamearea)
gamearea.setAttribute('text-align','center')

play = make_new('div','container-fluid','contain','')
gamearea.append(play)

exp = make_new('div','p h3','exp','')
play.append(exp)
exp.innerHTML = "Guess the letters in the empty spaces"

enter = make_new('input','text','input','')
play.append(enter)

submit = make_new('input','btn btn-primary button','submit','SUBMIT')
play.append(submit)
submit.addEventListener("click",function(){
   word(enter)
 })
 
 canvasholder = make_new('canvas','canvas right','canvasholder','')
//  play.append(canvas)
 document.body.append(canvasholder)

available = make_new('section','left','avail','')
document.body.append(available)
available.innerHTML = "I AM HERE"
footer = make_new('footer','footer','contain','')
document.body.append(footer)
}
