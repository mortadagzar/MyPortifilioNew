

function title1()
{

document.querySelector(".title1").style.opacity="1";

document.querySelector(".title1").style.transform="translateY(170%)";
}

function title1b()
{

document.querySelector(".title1").style.opacity="0";

document.querySelector(".title1").style.transform="translateY(5%)";
}






function title2()
{

document.querySelector(".title2").style.opacity="1";

document.querySelector(".title2").style.transform="translateY(170%)";
}

function title2b()
{

document.querySelector(".title2").style.opacity="0";

document.querySelector(".title2").style.transform="translateY(5%)";
}








function title3()
{

document.querySelector(".title3").style.opacity="1";

document.querySelector(".title3").style.transform="translateY(170%)";
}




function title3b()
{

document.querySelector(".title3").style.opacity="0";

document.querySelector(".title3").style.transform="translateY(5%)";
}








window.addEventListener("scroll", function(){
var scroll=window.pageYOffset;
console.log(scroll);





if(scroll>=670 ){

document.getElementById("fixed").classList.add('fixa');
document.getElementById("fixed").classList.remove('fixb');

}else{
  
 document.getElementById("fixed").classList.add('fixb');
document.getElementById("fixed").classList.remove('fixa');   
}










if(scroll>=570){


document.querySelector(".bardiv").style.display="block";
}
if(scroll>=600){

document.querySelector(".iphone-container").style.display="block";

 
}



if(scroll>=1400 && window.screen.width<=600){


document.querySelector(".talks1").style.animationName="talks";

}
if(scroll>=1700 && window.screen.width<=600){


document.querySelector(".talks2").style.animationName="talks";

}

if(scroll>=2060 && window.screen.width<=600){

document.querySelector(".talks3").style.animationName="talks";

}





if(scroll>=1000 && window.screen.width>=600){

document.querySelector(".talks1").style.animationName="talks";
document.querySelector(".talks2").style.animationName="talks";
document.querySelector(".talks3").style.animationName="talks";
}



if(scroll>=2460 && window.screen.width<=600){
document.querySelector(".proj1").style.display="block";
document.querySelector(".proj1").style.animationName="proj1";

}

if(scroll>=2680 && window.screen.width<=600){
document.querySelector(".proj2").style.display="block";
document.querySelector(".proj2").style.animationName="proj1";

}
if(scroll>=3020 && window.screen.width<=600){
document.querySelector(".proj3").style.display="block";
document.querySelector(".proj3").style.animationName="proj1";

}
if(scroll>=1300 && window.screen.width>=600){
document.querySelector(".proj3").style.display="block";
document.querySelector(".proj3").style.animationName="proj1";
document.querySelector(".proj2").style.display="block";
document.querySelector(".proj2").style.animationName="proj1";
document.querySelector(".proj1").style.display="block";
document.querySelector(".proj1").style.animationName="proj1";
}


if(scroll>=4000 && window.screen.width<=600){
document.querySelector("#twitterc").style.display="block";

document.querySelector("#linkedinc").style.display="block";
document.querySelector("#youtubec").style.display="block";
document.querySelector("#facebookc").style.display="block";
}


if(scroll>=2411 && window.screen.width>=600){
document.querySelector("#twitterc").style.display="block";

document.querySelector("#linkedinc").style.display="block";
document.querySelector("#youtubec").style.display="block";
document.querySelector("#facebookc").style.display="block";
}














});























function mylink(){
document.getElementById("linkedinc").style.borderWidth="5px";
document.getElementById("linkedin").style.transform="scale(2)";
document.getElementById("linkedinc").style.backgroundColor="white";
document.getElementById("linkedin").style.color="orange";
}

 function mylinkb(){
document.getElementById("linkedinc").style.borderWidth="0px";
document.getElementById("linkedin").style.transform="scale(1)";
document.getElementById("linkedinc").style.backgroundColor="orange";
document.getElementById("linkedin").style.color="white";

}


 function mytube(){
document.getElementById("youtubec").style.borderWidth="5px";
document.getElementById("youtube").style.transform="scale(2)";
document.getElementById("youtubec").style.backgroundColor="white";
document.getElementById("youtube").style.color="orange";
}

 function mytubeb(){
document.getElementById("youtubec").style.borderWidth="0px";
document.getElementById("youtube").style.transform="scale(1)";
document.getElementById("youtubec").style.backgroundColor="orange";
document.getElementById("youtube").style.color="white";

}
















 function myTwitter(){
document.getElementById("twitterc").style.borderWidth="5px";
document.getElementById("twitter").style.transform="scale(2)";
document.getElementById("twitterc").style.backgroundColor="white";
document.getElementById("twitter").style.color="orange";
}

 function myTwitterb(){
document.getElementById("twitterc").style.borderWidth="0px";
document.getElementById("twitter").style.transform="scale(1)";
document.getElementById("twitterc").style.backgroundColor="orange";
document.getElementById("twitter").style.color="white";

}




myTwitter();



 function myFace(){
document.getElementById("facebookc").style.borderWidth="5px";
document.getElementById("facebook").style.transform="scale(2)";
document.getElementById("facebookc").style.backgroundColor="white";
document.getElementById("facebook").style.color="orange";
}

 function myFaceb(){
document.getElementById("facebookc").style.borderWidth="0px";
document.getElementById("facebook").style.transform="scale(1)";
document.getElementById("facebookc").style.backgroundColor="orange";
document.getElementById("facebook").style.color="white";

}



