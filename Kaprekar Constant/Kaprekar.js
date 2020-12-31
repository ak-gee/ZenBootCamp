
   var count = 0;
   const Kaprekar = 6174;
   var asc=0,desc=0,asc_s=0,desc_s=0;
   var iter;
   var diff = 6174;

function Kaprekar_Or_Not(number_to_check){
     
  
    var curr;  
 
      var stringit =  number_to_check.toString().split('')
    //  console.log('String version of num: '+stringit)

    var data = stringit.map(curr => +curr)
    // console.log('integer version of string array: '+ data)

    asc = data.slice(); /* Deep copy as in JS copy by reference by default */
    asc.sort()
    desc = data.sort(function(a,b){return(b-a)})


    // console.log('sorted asc  version of string array: '+ asc)
    // console.log('sorted desc  version of string array: '+ desc)

    

    /*_____________________array of int to number______________________ */
    var i = asc.length;;
    var sum = 0;
     asc_s = convert_to_number(asc);
    // console.log(asc_s)
     desc_s = convert_to_number(desc);
    // console.log(desc_s)

    var diff = desc_s-asc_s;
     
        console.log(count,number_to_check,asc_s, desc_s,diff,count)
      
        if (iter === true){
      
            count = 0;
        } 
        else{ 
            count= count + 1; 
         
        }
        var tabledata= [count,number_to_check,asc_s, desc_s,diff,count] 
     
        FillTable(tabledata)
      
      
  if (diff !== Kaprekar)
    {  
        console.log('Inside diff check,before calling Kaprekar function :' + diff, count)
        let temp = Kaprekar_Or_Not(diff);
    }

    return count;

}
   function convert_to_number(arr)
    { 
        var it = arr.length;
        let x = 0;
        var sum = 0;
       
        while ( it > 0)
    {
        // console.log(`Map : Element is , length is ${arr[x]} ${it}`)
        sum = sum + (arr[x] * Math.pow(10, (it -1)));
        // console.log(sum,(arr[x] * Math.pow(10, (it -1))) )
        it = it - 1;
        x = x + 1;
    }
        return sum;
    }


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
var idData = ['Iteration','Number','Smallest(Ascending)','Largest(Descending)','Difference','Count']
    window.onload = start()
    

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

    function start()
    {

        var foundation = make_new('div','style1','','')
        document.body.appendChild(foundation)
        foundation.innerText = 'KAPREKAR CONSTANT 6174'
    

        var numinp = make_new('div','style4','numinp','')
        numinp.innerHTML = "Enter a 4 digit number"
        // var numlab =  make_new('div','labelstyle','numlab','Enter a 4 digit number')
        var number = make_new('input','text textstyle','number','')


        
        var subdispl = make_new('div','style2','','')
        var submit = make_new('button','btn btn-primary button','submit','CHECK')
        submit.innerText = "CHECK"
        // submit.setAttribute('click','Kaprekar_Or_Not(number.value)')

        var clear = make_new('button','btn btn-primary button','clear','CLEAR')
        clear.innerText = "CLEAR TABLE"

        var tableholder = make_new('div','style3','','')
        tableholder.innerText = "View Kaprekar's Magic"

        var table = make_new('table','table','table','')

        var output1 = make_new('div','divstyle','output1','')
        var outputcount = make_new('label','labelstyle','outputcount','')
        outputcount.innerHTML= `Kaprekar's Constant is reached in ${count} iterations`/*${count} iterations*/
        
        foundation.appendChild(numinp)
        foundation.appendChild(subdispl)
        foundation.appendChild(tableholder)
        foundation.appendChild(output1)
        
        // numinp.append(numlab,number)
        numinp.append(number)
        
        subdispl.appendChild(submit)
        subdispl.appendChild(clear)
        tableholder.appendChild(table)
        output1.appendChild(outputcount)

        MakeColumnNames()

        document.querySelector('#'+'submit').addEventListener('click',function(event){
            event.preventDefault();
            
            var enter = document.getElementById('number').value
            count = 0;
          
            
            check(+enter)
            console.log('Number in text box'+enter)
        });
/*      //Another way of button click event for practice
        var getid = document.getElementById('number');
        getid.onclick = function(event){
            event.preventDefault();

            var enter = document.getElementById('number').value
             check(enter)
            console.log(enter)
        }
*/
        
        document.querySelector('#'+'clear').addEventListener('click',function(event){
            event.preventDefault();
           
            var enter = document.getElementById('number').value
        
            ClearTable();
     
        });
        

    }

    function check(enter){
        if (enter === 6174){
            
            iter = true;
         
        }
        else(iter = false)
        var answer = Kaprekar_Or_Not(enter);
        console.log(answer)
        outputcount.innerHTML= `Kaprekar's Constant is reached in ${answer} iterations`/*${count} iterations*/


    
    }

    function FillTable(tabledata)
  {
            var table = document.getElementById('table')
           tr = table.insertRow(-1)
          for(let j=0;j<idData.length;j++)
          {
              var td= tr.insertCell(-1);
              if (tabledata[j]===Kaprekar)
              {
 
                td.style.color = 'white'
                td.style.backgroundColor  = 'green'
            }
              td.innerHTML=tabledata[j];
        
    } 
    

  }
function ClearTable()
{
         
        var x = document.getElementById("table").rows.length; 
        if (x>=2)
        {
          
             for (let i=x-1;i>=1;i--)
             document.getElementById("table").deleteRow(i); 
           
           
       }
       document.getElementById('number').value = ''
}