function display(){
  
    console.log("Happy Independence Day")
   
}/*calling settimeout one after another puts them into stack all at once and 
callsback from stack after 1 s ,so all get printed together, so no delay are coutndown effect. */
setTimeout(display,10000);
countdowntimer();
var temp = 10;
function countdowntimer(){

    var timeout;
    timeout=setTimeout(function(){
        console.log('10')/**also temp = temp-1 */

        timeout=setTimeout(function(){
            console.log('9')

            timeout=setTimeout(function(){                                  
                console.log('8')

                timeout = setTimeout(function(){
                    console.log('7')

                    timeout = setTimeout(function(){
                        console.log('6')

                        timeout = setTimeout(function(){
                            console.log('5')

                            timeout = setTimeout(function(){
                                console.log('4')

                                timeout = setTimeout(function(){
                                    console.log('3')

                                    timeout = setTimeout(function(){
                                        console.log('2')

                                        timeout = setTimeout(function(){
                                            console.log('1')
                    
                                        }, 1000);
                
                                    }, 1000);
            
                                }, 1000);
        
                            }, 1000);
    
                        }, 1000);


                    }, 1000);

                }, 1000);


            }, 1000);


        }, 1000);
    }, 1000);
}
