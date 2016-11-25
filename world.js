window.onload = function(){ 
    
    document.getElementById("lookup").onclick = function() {looking();};
    
        function looking(){
            var xxhttp = new XMLHttpRequest(); //Ajax request
            var c = document.getElementById("country").value;
            
            xxhttp.onreadystatechange = function(){
            
            if (xxhttp.readyState === 4 && xxhttp.status === 200)
            {
                document.getElementById("result").innerHTML = xxhttp.responseText;
                //alert(xxhttp.responseText);
            }
       };
       
       //if ()
        
        //xxhttp.open('GET',"world.php?country=" +c, true);
        
         xxhttp.open('GET',"world.php?all=true", true);
         xxhttp.send();
             
            
        }
            
       
   
    
    
};