var baord=Chessboard('board1');

function start(){
    document.getElementById("start").style.display="none";
    document.getElementById("right").style.display="block";
    let clock=document.getElementById("clock");
    let time=3;
    const countdown=setInterval(()=>{
        if (time>0){
            time--;
            clock.innerHTML=time;
        }
        else{
            clearInterval(countdown);
            clock.innerHTML="Time's up!";
            document.getElementById("restart").style.display="block";
        }
    },1000);
}
function refresh(){
    console.log("Prabha ruless!!")
    location.reload();
}