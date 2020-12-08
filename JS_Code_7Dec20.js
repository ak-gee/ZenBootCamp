/*Do the below programs in anonymous function and IIFE
* Print odd numbers in an array
* Convert all the strings to title caps in a string array
* Sum of all numbers in an array
* Return all the prime numbers in an array
* Return all the palindromes in an array
* Return median of two sorted arrays of same size
* Remove duplicates from an array
* Rotate an array by k times and return the rotated array
*/


1./* Print odd numbers in an array*/
var res = function (arr){
let res1=[];
for (let i =0;i<arr.length;i++)
if (arr[i]%2!==0)
res1.push(arr[i]);
return res1;
}
result = res([1,2,3,5,7,8]);
console.log("Anonymous fn to print odd numbers in array :",result);
/*___________________________________________________________________*/
(function (arr){let res=[];
for (let i = 0;i<arr.length;i++)
{
    if (arr[i]%2!==0)
    res.push(arr[i]);
}
console.log("iife fn to print odd numbers in array :",res)  })([1,2,3,4,5,6,7,8,9,11]);

/*___________________________________________________________________*/

/* Convert all the strings to title caps in a string array*/

var str_title = function (arr){
 arr = arr.toLowerCase().split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  return arr.join(' ');
}

result= str_title("hi, i like strings More than numbers");
/*My practice*/
/*
console.log(result);
let a = "ABCDE";
let b ="";
b=a[0].charAt(0).toUpperCase()+a.slice(1).toLowerCase();
console.log(a,b);
*/

/*______________________________________________________*/
(function(arr){
    let temp="";
    arr = arr.toLowerCase().split(' ');
    for (let i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    temp = arr.join(' ');
    console.log(temp);
    return temp;
    
})("aLL is wEllE or Not");
/*______________________________________________________*/


/*3* Sum of all numbers in an array*/
var sum = function(arr){
    let sum = 0;
    for (let i=0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    return sum;
}
/*___________________________________________________________________*/
let arr=[1,2,3,4,5];
console.log(sum(arr));

(function(arr){
    let sum = 0;
    for (let i=0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    console.log(sum);
    return sum;
    
})(arr);

/*______________________________________________________________*/
/*4 Return all the prime numbers in an array*/
var res=function(arr){
    let prime=[];
    let flag =true;
   
    for (let i=0;i<arr.length;i++)
    {
        if (arr[i]===1) {
                console.log(i,arr[i]);
                flag=false;
                
                
            }
            else if ((arr[i]===2)||(arr[i]===3)) {
                 flag=true;
                 
                
            }
        for (let j =2; j<=parseInt(arr[i]/2); j++)
        {
            //console.log(arr[i],i,j);
            
            
            if ((arr[i]%j===0))
            {
                
                flag=false;
                break;
                
                
            
            }
            else   {
                 flag=true;
                 
                
            }
            
        }
        if (flag === true){
            console.log(arr[i]);
             prime.push(arr[i]);
        }
           
    }
    
    console.log(prime);
    return prime;
}
res([2,2,1,4,5,6,7,8,9,10,3,13,14]);
/*__________________________________________________________________*/
/*4 Return all the prime numbers in an array*/
(function(arr){
    let prime=[];
    let flag =true;
   
    for (let i=0;i<arr.length;i++)
    {
        if (arr[i]===1) {
                
                flag=false;
                
                
            }
            else if ((arr[i]===2)||(arr[i]===3)) {
                 flag=true;
                 
                
            }
        for (let j =2; j<=parseInt(arr[i]/2); j++)
        {
            //console.log(arr[i],i,j);
            
            
            if ((arr[i]%j===0))
            {
                
                flag=false;
                break;
                
                
            
            }
            else   {
                 flag=true;
                 
                
            }
            
        }
        if (flag === true){
            //console.log(arr[i]);
             prime.push(arr[i]);
        }
           
    }
    
    console.log(prime);
    return prime;
}) ([2,2,1,4,5,6,7,8,9,10,3,13,14]);
/*______________________________________________*/

/*Return all the palindromes in an array*/
/*
var a = "abbA";
var b = a.split('').reverse().join('').toLowerCase();
var c =a.toLowerCase();
console.log(a,b,c);
if (c===b)
console.log("Palindrome");
else
console.log("Not a Palindrome");
*/

var res= function(str){
    var temp = str.split(" ");
    var res=[];
    //console.log(temp,temp.length);
    for (let i =0;i<temp.length;i++)
    {
        var tempres=temp[i].split('').reverse().join('').toLowerCase();
        var ant = temp[i].toLowerCase();
        
        if (tempres===ant)
        {
        //console.log(tempres,ant,"  Palindrome");
        res.push(temp[i]);
        }
        else
        {
        //console.log(tempres,ant,"  Not a Palindrome");
        }
            
        
        }
        console.log(res);
        return res;
}
res("Abba was I ere I saw Elba");

/*______________________________________________*/

(function(str){
    var temp = str.split(" ");
    var res=[];
    //console.log(temp,temp.length);
    for (let i =0;i<temp.length;i++)
    {
        var tempres=temp[i].split('').reverse().join('').toLowerCase();
        var ant = temp[i].toLowerCase();
        
        if (tempres===ant)
        {
        //console.log(tempres,ant,"  Palindrome");
        res.push(temp[i]);
        }
        else
        {
        //console.log(tempres,ant,"  Not a Palindrome");
        }
            
        
        }
        console.log(res);
        return res;
})("Abba was I ere I saw Elba");









/*______________________________________________*/

/*Return array without duplicates*/

var res=function(arr){
   let result=[];
   let present={};
  for (let i =0;i<arr.length;i++)
  {
      if (!(arr[i] in present))
      { 
          result.push(arr[i]);
          present[arr[i]]=true;
      }
  }
  return result;
}
arr=[1,2,3,4,5,2,3,4,6];
let result= res(arr);
console.log(result);
/*______________________________________________*/
(function(arr){
 
  let result=[];
   let present={};
  for (let i =0;i<arr.length;i++)
  {
      if (!(arr[i] in present))
      { 
          result.push(arr[i]);
          present[arr[i]]=true;
      }
      
  }
  console.log(result);
  return result;
})([1,2,3,4,5,2,3,4,6]);


/*Return median of two sorted arrays of same size*/

var median=function(arr1,arr2){
    let arr=[];
    let n=0;
    let m =0;
    let median=0;
    if (arr1.length!==arr2.length)
        return(undefined);
      arr=arr1.concat(arr2);  
      //console.log(arr);
      arr.sort(function(a, b){return a-b});
      //console.log(arr);
      let l =arr.length; 
      if (l%2===0)
      {
      m =l/2-1;
      n = m+1;
      }

   median = (arr[m]+arr[n])/2;
   console.log(median);
}

let arr1=[11,13];
let arr2=[5,6];
let res1=median(arr1,arr2);
//console.log(res1);
/*______________________________________________*/

(function(str){
    let arr=[];
    let n=0;
    let m =0;
    let median=0;
    if (arr1.length!==arr2.length)
        return(undefined);
      arr=arr1.concat(arr2);  
      
      arr.sort(function(a, b){return a-b});
      
      let l =arr.length; 
      if (l%2===0)
      {
      m =l/2-1;
      n = m+1;
      }

   median = (arr[m]+arr[n])/2;
   console.log(median);
})(arr1,arr2);

 



/*______________________________________________*/

/** Rotate an array by k times and return the rotated array*/

var rot=function(arr1,k){
    let arr=[];
    let n=0;
    let m =0;
    let median=0;
    if (k%arr1.length===0)
    {
    console.log(arr1);
    return(arr1);
    }
    else
    {
        for (let i=0;i<k;i++)
            arr1.push(arr1.shift());
    }
     
   console.log(arr1); 
    return arr1; 

  
}

let arr1=[11,13,1,2,3,4];
let res1=rot(arr1,2);
//console.log(res1);
/*______________________________________________*/
arr1=[11,13,1,2,3,4];
(function(arr1,k){
    let arr=[];
    let n=0;
    let m =0;
    let median=0;
    if (k%arr1.length===0)
    {
    console.log(arr1);
    return(arr1);
    }
    else
    {
        for (let i=0;i<k;i++)
            arr1.push(arr1.shift());
    }
     
   console.log(arr1); 
    return arr1; 

  
})(arr1,4);

 



/*______________________________________________*/
