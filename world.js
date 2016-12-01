window.onload = function(){ //To execute number 1 uncomment the code below Show Jamaica and the alert.
    document.getElementById("lookup").onclick = function() {looking();};
    
        function looking(){
            var xxhttp = new XMLHttpRequest(); //Ajax request
            var c = document.getElementById("country").value;
            
            xxhttp.onreadystatechange = function(){
            
            if (xxhttp.readyState === 4 && xxhttp.status === 200)
            {
               //alert(xxhttp.responseText);
               document.getElementById("result").innerHTML = xxhttp.responseText;
    
            }
           
       };
        xxhttp.open("GET","world.php?country=" +c, true);
        xxhttp.send();
    }



    
    
    document.getElementById("all").onclick = function() {Every();};
   // document.getElementById("lookup").onclick = function() {Every();};
    
     function Every(){
            //set up Ajax request
            var dhttp = new XMLHttpRequest();
            var c = document.getElementById("country").value;
            var a = document.getElementById("all").checked;
            var b = document.getElementById("lookup");
            
            dhttp.onreadystatechange = function() {
                if (dhttp.readyState === 4 && dhttp.status === 200){ 
                    a.addEventListener("click",function(){
                        b.addEventListener("click", function(){
                            document.getElementById("result").innerHTML = dhttp.responseText;
                            
                        });
                        
                         
                    });
                }
            };
            
             dhttp.open("GET","world.php?+all=true", true);
             dhttp.send();
             
            if (c == ""){
                document.getElementById("result").innerHTML = "Enter the Name of a Country Please!!!";
             }
             else{
                  var xxhttp = new XMLHttpRequest(); //Ajax request
                  var c = document.getElementById("country").value;
                  
                  xxhttp.onreadystatechange = function(){
                      if (xxhttp.readyState === 4 && xxhttp.status === 200){
                          alert(xxhttp.responseText);
                          document.getElementById("result").innerHTML = xxhttp.responseText;
                        }
                    };
                    xxhttp.open("GET","world.php?country=" +c, true);
                    xxhttp.send();
                }
                
     }        
        
}; //end of entire function
    
        