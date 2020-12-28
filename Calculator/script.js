
function make_new(element, className, id,value) {
    var new_element = document.createElement(element)
    new_element.setAttribute('class', className)
    new_element.setAttribute('id', id)
    new_element.setAttribute('value', value)
    if(element==="button")
        new_element.innerText= value
    return new_element
    }

var ctn = make_new('div', 'container-fluid', 'ctn')
document.body.append(ctn)

var hd = make_new('div', 'row heading', 'hd')
ctn.append(hd)
hd.innerText = "CALCULATOR"


var result=make_new('div','row','result')
ctn.append(result)
result.innerText= "Result"


var bdr = make_new('div', 'col-4', 'bdr')
result.append(bdr)

var displayd = make_new('div', 'col-7 bg-text p-16 result', 'displayd')
result.append(displayd)
var display = make_new('input', 'form-control col-9 bg-secondary p-16 result', 'display',0)
display.setAttribute('type','text')
displayd.append(display)
display.value=''

// var res = make_new('div', 'col-1 bg-warning', 'res','0')
// result.append(res)
// res.innerText = '0'
// store_result=parseFloat(res.innerText)
// console.log(store_result)

var blankrow = make_new('div', 'row', 'blankrow')
ctn.append(blankrow)
var blankcol = make_new('div', 'col-12 bg-text p-3', 'blankcol')
blankrow.append(blankcol)

var btnrow1 = make_new('div', 'row', 'btnrow1')
ctn.append(btnrow1)

var border = make_new('div', 'col-3 bg-text', 'border')
btnrow1.append(border)

var b1 = make_new('div', 'col-1 bg-text', 'b1')
var btn1=make_new('button','btn btn-primary','btn1',1)
btnrow1.append(b1,btn1);
addEvent(btn1)

var b2 = make_new('div', 'col-1 bg-text', 'b2')
var btn2=make_new('button','btn btn-primary','btn2','2')
btnrow1.append(b2,btn2);
addEvent(btn2)

var b3 = make_new('div', 'col-1 bg-text', 'b3')
var btn3=make_new('button','btn btn-primary','btn3','3')
btnrow1.append(b3,btn3);
addEvent(btn3)


var bplus = make_new('div', 'col-1 bg-text', 'b+')
var btnplus=make_new('button','btn btn-primary','btnplus','+')
btnrow1.append(bplus,btnplus);
addOperatorEvent(btnplus)

var btnrow2 = make_new('div', 'row', 'btnrow2')
ctn.append(btnrow2)

var border2 = make_new('div', 'col-3 bg-text', 'border2')
btnrow2.append(border2)

var b4 = make_new('div', 'col-1 bg-text', 'b4')
var btn4=make_new('button','btn btn-primary','btn4','4')
btnrow2.append(b4,btn4);
addEvent(btn4)

var b5 = make_new('div', 'col-1 bg-text', 'b5')
var btn5=make_new('button','btn btn-primary','btn5','5')
btnrow2.append(b5,btn5);
addEvent(btn5)

var b6 = make_new('div', 'col-1 bg-text', 'b6')
var btn6=make_new('button','btn btn-primary','btn6','6')
btnrow2.append(b6,btn6);
addEvent(btn6)

var bminus = make_new('div', 'col-1 bg-text', 'b-')
var btnminus=make_new('button','btn btn-primary','btnminus','-')
btnrow2.append(bminus,btnminus);
addOperatorEvent(btnminus)


var btnrow3 = make_new('div', 'row', 'btnrow3')
ctn.append(btnrow3)

var border3 = make_new('div', 'col-3 bg-text', 'border3')
btnrow3.append(border3)

var b7 = make_new('div', 'col-1 bg-text', 'b7')
var btn7=make_new('button','btn btn-primary','btn7','7')
btnrow3.append(b7,btn7);
addEvent(btn7)

var b8 = make_new('div', 'col-1 bg-text', 'b8')
var btn8=make_new('button','btn btn-primary','btn8','8')
btnrow3.append(b8,btn8);

addEvent(btn8)

var b9= make_new('div', 'col-1 bg-text', 'b9')
var btn9=make_new('button','btn btn-primary','btn9','9')
btnrow3.append(b9,btn9);

addEvent(btn9)
var bmul = make_new('div', 'col-1 bg-text', 'bmul')
var btnmul=make_new('button','btn btn-primary','btnmul','*')
btnrow3.append(bmul,btnmul);
addOperatorEvent(btnmul)


var btnrow4 = make_new('div', 'row', 'btnrow4')
ctn.append(btnrow4)

var border4 = make_new('div', 'col-3 bg-text', 'border4')
btnrow4.append(border4)

var b0 = make_new('div', 'col-1 bg-text', 'b0')
var btn0=make_new('button','btn btn-primary','btn0','0')
btnrow4.append(b0,btn0);

addEvent(btn0)

var bdot = make_new('div', 'col-1 bg-text', 'bdot')
var btndot=make_new('button','btn btn-primary','btndot','.')
btnrow4.append(bdot,btndot);
addEvent(btndot)

var beq= make_new('div', 'col-1 bg-text', 'beq')
var btneq=make_new('button','btn btn-primary','btneq','=')
btnrow4.append(beq,btneq);
addOperatorEvent(btneq)

var bdiv = make_new('div', 'col-1 bg-text', 'bdiv')
var btndiv=make_new('button','btn btn-primary','btndiv','/')
btnrow4.append(bdiv,btndiv);
addOperatorEvent(btndiv)

var btnrow5 = make_new('div', 'row', 'btnrow5')
ctn.append(btnrow5)

var border5 = make_new('div', 'col-3 bg-text', 'border5')
btnrow5.append(border5)

var bclr = make_new('div', 'col-1 bg-text', 'bclr')
var btnclr=make_new('button','btn btn-primary','btnclr','C')
btnrow5.append(bclr,btnclr);
addEvent(btnclr)

var bM = make_new('div', 'col-1 bg-text', 'bM')
var btnM=make_new('button','btn btn-primary','btnM','M+')
btnrow5.append(bM,btnM);
addEvent(btnM)

var bMm= make_new('div', 'col-1 bg-text', 'bMm')
var btnMm=make_new('button','btn btn-primary','btnMm','M-')
btnrow5.append(bMm,btnMm);
addEvent(btnMm)

var bMC= make_new('div', 'col-1 bg-text', 'bMC')
var btnMC=make_new('button','btn btn-primary','btnMC',"MC")
btnrow5.append(bMC,btnMC);
addEvent(btnMC)

var btnrow6 = make_new('div', 'row', 'btnrow6')
ctn.append(btnrow6)

var border6 = make_new('div', 'col-3 bg-text', 'border6')
btnrow6.append(border6)

var bmod = make_new('div', 'col-1 bg-text', 'bmod')
var btnmod=make_new('button','btn btn-primary','btnmod','%')
btnrow6.append(bmod,btnmod);
addOperatorEvent(btnmod)

var bMR = make_new('div', 'col-1 bg-text', 'bMR')
var btnMR=make_new('button','btn btn-primary','btnMR','MR')
btnrow6.append(bMR,btnMR);
addEvent(btnMR)
sessionStorage.setItem('m+',0)




 function addEvent(element){
    
document.querySelector('#'+element.id).addEventListener("click",function(event){
     event.preventDefault();
     let val=0;
   switch(element.value){
    case 'C':
     display.value='';
     store_result=0
        break;
    case 'M+':
        let read=  sessionStorage.getItem('m+')
        val = parseFloat(display.value)
        read+=val
        sessionStorage.setItem('m+', read)
        console.log('M+:'+ read)
        display.value='';
         break;
    case 'M-':
        let data= sessionStorage.getItem('m+')
        val = parseFloat(display.value)
        data-=val
        sessionStorage.setItem('m+',data)
        console.log(data)

         break;
    case 'MR':
        let dat= sessionStorage.getItem('m+')
        display.value=dat
        console.log(dat)
    
         break;
    
         case'MC':
         sessionStorage.setItem('m+',0)
         display.value='';
          break;

        break;

     default:
        display.value+=element.value
      
         break;

}

});
}
function evaluate(textval){
    var res = parseFloat(textval);
    console.log( 'Evaluated'+ res,typeof(res))
return (res)
}

function addOperatorEvent(element)
{
    document.querySelector('#'+element.id).addEventListener("click",function(event){
        event.preventDefault();
    var entry=[]

   
    console.log(display.value)
    
     
    switch (element.value){
       case '+':
        display.value= display.value+element.value       

        break;
        case '-':
            display.value= display.value+element.value       
   
           break;
           case '*':
            display.value= display.value+element.value       
   
           break;
           case '/':
            display.value= display.value+element.value       
   
           break;
           case '%':
            display.value= display.value+element.value       
   
           break;
        
        case '=':
        /*Decipher the Equation statement */
        entry=eval( display.value)
        display.value=entry
        console.log(entry) 
        break;  

        default:
             break;

    }
 
});

}

display.addEventListener('keypress',function(event){
    event.preventDefault()
    console.log(event.key,event.keyCode)
  
    if ((event.keyCode>=47) && (event.keyCode<58))// || (event.keyCode==42)|| (event.keyCode==43)|| (event.keyCode==45) )
    display.value+=event.key
    else 
    alert("Please input a number")
   

});