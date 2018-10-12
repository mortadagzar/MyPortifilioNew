<script >

   var threekhan=document.getElementById("threekhan");
var immortada=document.getElementById("immortada");
var logo=document.getElementById("logo");
var ypos = window.pageYOffset;
logo.style.animation="animation4 1s ease-in-out 1";
immortada.style.animation="animation3 1s ease-in-out 1";
  threekhan.style.animation="animation2 1s ease-in-out 1";
   logo.style.animation="animation4 4s ease-in-out 1";
  
   

alert("hjk");























  
  if (window.screen.width<=500 && window.screen.height <=800){
document.getElementById('mortadakhan').style.background=("orange");}
{
 ;
}
  if (window.screen.width<=667 && window.screen.height <=375){
document.getElementById('mortada').style.left=("59px");}
{
 ;
}
 if (window.screen.width<=736 && window.screen.height <=414){
document.getElementById('mortada').style.left=("123px");}
{
 ;
}






document.getElementById("prog1").animate([
  // keyframes
  { width: '75%' }, 
  { width: '67%' }
], { 
  // timing options
  duration: 400,
  iterations: Infinity

});
document.getElementById("prog2").animate([
  // keyframes
  { width: '70%' }, 
  { width: '87%' }
], { 
  // timing options
  duration: 400,
  iterations: Infinity
});
document.getElementById("prog3").animate([
  // keyframes
  { width: '74%' }, 
  { width: '68%' }
], { 
  // timing options
  duration: 400,
  iterations: Infinity
});
document.getElementById("prog4").animate([
  // keyframes
  { width: '80%' }, 
  { width: '87%' }
], { 
  // timing options
  duration: 600,
  iterations: Infinity
});
document.getElementById("prog5").animate([
  // keyframes
  { width: '89%' }, 
  { width: '80%' }
], { 
  // timing options
  duration: 600,
  iterations: Infinity
});








$(window).scroll(function() {


    $('.animation-test').each(function(){

        var imagePoos = $(this).offset().top;

        var topOfWindoow = $(window).scrollTop();

        if (imagePoos < topOfWindoow+400) {
            $(this).addClass("slideRight");
        }

    });

});




</script>















