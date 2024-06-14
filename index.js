
document.addEventListener("DOMContentLoaded", function()
{

function updatedice()
{


var rand1=Math.floor(Math.random()*6)+1;
var string1="./images/num"+rand1+".png";
document.querySelector(".image1").setAttribute("src",string1);

var rand2=Math.floor(Math.random()*6)+1;
var string2="./images/num"+rand2+".png";
document.querySelector(".image2").setAttribute("src",string2);

if(rand1>rand2)
    {
        document.querySelector("h1").innerHTML="Player 1 wins &#129395;";
    }
else if(rand1===rand2)
{
    document.querySelector("h1").innerHTML="It's a TIE &#128516;";
}
else
{
    document.querySelector("h1").innerHTML="Player 2 wins &#129395;"
}
}

document.querySelector(".btn").addEventListener("click",updatedice);
});
