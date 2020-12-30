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
var form = make_new('form','','form','')
var contain = make_new('div','container-fluid p-3 style3','','')//style1
contain.innerHTML = "<strong><center><font-size=5rem>Client Details</center>"

/** Empty Rows between title and form entry */
var blank_1 = make_new('row','style2','blank_1','')
var allcoll = make_new('div','col-12 style2','blank','')

/*Form Entry */
var row_1 = make_new('row','p-3','row_1')
var inputs_1 = make_new('div','col-9','inputs_1','')


var inputs_2 = make_new('div','col-1','inputs_2','')//bg-info

/** Empty Rows between form and table entry */
var blank_2 = make_new('row','style2','blank_2','')
var allcoll2 = make_new('div','col-12 style2','blank2','Information Table')
allcoll2.innerHTML = 'Information Table'

var table_out = make_new('div','col-1','table_out','')
var fname =  make_new('div','form-group style3','fname','First Name')
var fnlab =  make_new('label','form-group label_style','fnlab','First Name')
var fninp = make_new('input','form-controls input_style','fninp','')

var lname =  make_new('div','form-group style3','lname','Last Name')
var lnlab =  make_new('label','form-group label_style','lnlab','Last Name')
var lninp = make_new('input','form-controls input_style','lninp','')

var add1 =  make_new('div','form-group style3','add1','Address')
add1.innerHTML="<strong>Address<br>"
var add1lab =  make_new('label','form-group label_style','add1lab','Address Line 1')
var add1inp = make_new('input','form-controls input_style','add1inp','')

var add2 =  make_new('div','form-group style3','add2','Address Line 2')
var add2lab =  make_new('label','form-group label_style','add2lab','Address Line 2')
var add2inp = make_new('input','form-controls input_style','add2inp','')

var pin =  make_new('div','form-group style3','pin','PIN Code')
var pinlab =  make_new('label','form-group label_style','pinlab','PIN Code')
var pininp = make_new('input','form-controls input_style','pininp','')



var country =  make_new('div','form-group style3','country','Country')
var countrylab =  make_new('label','form-group label_style','countrylab','Country')
var countryinp = make_new('input','form-controls input_style','countryinp','')

var state =  make_new('div','form-group style3','state','State')
var statelab =  make_new('label','form-group label_style','statelab','State')
var stateinp = make_new('input','form-controls input_style','stateinp','')

var gender = make_new('div','form-group style3','gender','Gender')
gender.innerHTML = 'Gender<br>'
var malelab =  make_new('label','form-controls','malelab','Male')
malelab.setAttribute('for','Male')

var male = make_new('input','form-controls radio_style','male','male')
male.setAttribute('type','radio')
male.setAttribute('name','Gender')
var female = make_new('input','form-controls radio_style','female','female')
female.setAttribute('type','radio')
female.setAttribute('name','Gender')
var femalelab =  make_new('label','form-controls','femalelab','Female')
femalelab.setAttribute('for','Female')

var food = make_new('div','form-group','food','food')
var foodlab =  make_new('label','form-group label_style','foodlab','Food Options')
var foodsel = make_new('SELECT','','foodsel','Choose FOod')
foodsel.setAttribute('id','foodsel')
foodsel.setAttribute('multiple','true')

var option = document.createElement("option");
 option.text = 'Pizza';
 foodsel.add(option);

 var option2 = document.createElement("option");
 option2.text = 'Dosa';
 foodsel.add(option2);

 var option3 = document.createElement("option");
 option3.text = 'Fried Rice';
 foodsel.add(option3);

 var option4 = document.createElement("option");
 option4.text = 'Vegan';
 foodsel.add(option4);

 var option5 = document.createElement("option");
 option5.text = 'Jain Style';
 foodsel.add(option5);

tt= make_new('div','tooltip','','')
var tts = make_new('span','tooltiptext','','Check this box if you would like to delete all the table data and have only the latest data in the')
tts.innerHTML = 'Check this box if you would like to delete all the table data and have only the latest data in the' 

var dellab =  make_new('label','form-group label_style','fnlab','Delete')
 dellab.innerHTML="Delete Existing Table Data"

var deleterow = make_new('input','form-controls input_style','delrow','')
deleterow.setAttribute('type','checkbox')

 var submit = make_new('input','btn btn-primary button','submit','SUBMIT')

 var idData = ['First Name','Last Name','Address Line 1','Address Line 2','PIN Code','Country','State','Gender','Food Options'];
 var table = make_new('table','table center','table')
 

document.body.append(form)
form.append(contain)
contain.appendChild(blank_1)
blank_1.appendChild(allcoll)
contain.appendChild(row_1)

row_1.append(inputs_1,inputs_2)


inputs_1.append(fname)
inputs_1.append(lname)
inputs_1.append(add1)
inputs_1.append(add2)
inputs_1.append(pin)
inputs_1.append(state)
inputs_1.append(country)
inputs_1.append(gender)
inputs_1.append(food)

fname.append(fnlab)
fname.append(fninp)
lname.append(lnlab,lninp)
add1.append(add1lab,add1inp)
add2.append(add2lab,add2inp)
pin.append(pinlab,pininp)
state.append(statelab,stateinp)
country.append(countrylab,countryinp)
gender.append(malelab,male)
gender.append(femalelab,female)
food.append(foodlab,foodsel)

tt.appendChild(tts)
inputs_2.append(tt,dellab,deleterow,submit)

document.querySelector('#'+'submit').addEventListener("click",function(event){
    event.preventDefault();

   SaveToTable(fninp.value,lninp.value,add1inp.value, add2inp.value,pininp.value,countryinp.value,stateinp.value,gender.value,foodsel);
});

contain.appendChild(blank_2)
blank_2.appendChild(allcoll2)

blank_2.appendChild(table_out)

table_out.append(table)
MakeColumnNames()
Start();

function Start(){

}
function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    console.log(select)
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }

  function getGender(){
    var elements = document.getElementsByName('Gender');
    var checkedButton;
    console.log(elements);
    elements.forEach(e => {
        if (e.checked) {
            //if radio button is checked, set sort style
            checkedButton = e.value;
        }
    });return checkedButton;
  }
function SaveToTable(fninp,lninp,add1inp, add2inp,pininp,countryinp,stateinp,gender,foodsel){

    let result = getSelectValues(foodsel)
    let mf = getGender(gender) 
    console.log(result.length)
    if (result.length==2)
    {
        let food = '';
            for (let i=0;i<result.length;i++){
                food = food +' '+ result[i] 
            }
 
        console.log(food,fninp,lninp,add1inp, add2inp,pininp,countryinp,stateinp,mf,food)
       
        var tabledata= [fninp,lninp,add1inp, add2inp,pininp,countryinp,stateinp,mf,food]
        // alert('saving')
        
        FillTable(tabledata)
    }
    else
      alert('Please choose 2 food options')
}

function MakeColumnNames()
{
  
    var tr = table.insertRow(-1)
    /*Make Column Names*/
    for(let i=0;i< idData.length;i++)
    {
      var th = make_new('th')
      th.innerHTML= idData[i]
      tr.appendChild(th)
    }

}
function FillTable(tabledata)
  {
    //  if (table.tr table.remove(table.childNodes[1]);
     var x = document.getElementById("table").rows.length; 
     if (x>=2)
     {
      // alert(x)
        if (delrow.checked == true)
        {
          alert('Deleting the table values')
          for (let i=x-1;i>=1;i--)
          document.getElementById("table").deleteRow(i); 
        }
        else
        {
          alert('Appending to the table')
        }
    }
 
           tr = table.insertRow(-1)
          for(let j=0;j<idData.length;j++)
          {
              var td= tr.insertCell(-1);
              td.innerHTML=tabledata[j];
        
    } 
    

  }