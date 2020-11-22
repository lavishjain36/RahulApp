//generate a random number 
var y=   Math.floor(Math.random()*100+1);

//time to guess the number by user
var guess=1;

document.getElementById("submitguess").onclick=function(){


    //user will enter one number
   var x= document.getElementById("guessField").value;


   if(x==y){
       alert("Congratulations!! you have got the number in " + guess + "Times.");
   }

   else if(x>y)
   {
       guess++;
       alert("Sorry!! Try a Smaller Number");
   }

   else{
       guess++;
       alert("Sorry!! Try a greater Number");
   }
}

