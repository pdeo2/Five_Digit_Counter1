var content=document.getElementById('disply');
var curr=document.querySelectorAll('.counti .present');
var next=document.querySelectorAll('.counti .next');
var val=document.getElementById('valuer');
var count=0;
var interval;
console.log(range);
function myFunction(){
    var range=parseInt(content.value);

    if(isNaN(range)){
        window.alert("Please Enter a no");
        clearInterval(interval);
        return;
    }

    //resetNumbers(curr, next,5);
     interval=setInterval(function(){
    if(count==range){
        window.alert("Time Over")
        clearInterval(interval);
        count=0;

        return;
    }

    animateo(curr,next,4)
     count++;},1000);


     



}


function resetNumbers(curr,next,end){
    for(var i=0; i<end; ++i) {
        curr[i].innerText = 0;
        next[i].innerText = 1;
}
}









function animateo(curr,next,index){
    let current=curr[index];
    let nextno=next[index];
    console.log(nextno);   
    if(current.innerText==9){
        animateo(curr,next,index-1);
    }
nextno.classList.add("animate");
setTimeout(function(){
       
 current.innerText=nextno.innerText;
    nextno.classList.remove('animate');
    nextno.innerText =parseInt(nextno.innerText) + 1;
   if(nextno.innerText>9){
      nextno.innerText=0;
    }
},500);
}