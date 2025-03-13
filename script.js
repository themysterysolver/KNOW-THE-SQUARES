var baord=Chessboard('board1');

class Game{
    constructor(){
        this.rank=['1','2','3','4','5','6','7','8'];
        this.file=['a','b','c','d','e','f','g','h'];
        this.score=0;

        this.listener=this.onSquareClick.bind(this);

        document.getElementById("board1").addEventListener("click",this.listener);
    }
    start(){
        this.key=this.randomGenerate();
        document.getElementById("positions").innerHTML=this.key;
        console.log(this.key);
    }
    onSquareClick(event){
        let sq=event.target.getAttribute("data-square");
        console.log(sq);
        if(this.key==sq){
            this.score++;
            this.start();
        }
    }
    randomGenerate(){
        return this.file[Math.floor(Math.random()*8)]+this.rank[Math.floor(Math.random()*8)];
    }
    removeIt(){
        document.getElementById("board1").removeEventListener("click",this.listener);
    }
}
function start(){
    document.getElementById("start").style.display="none";
    document.getElementById("right").style.display="block";
    let clock=document.getElementById("clock");
    let time=60;
    let game=new Game();
    game.start();
    const countdown=setInterval(()=>{
        if (time>0){
            time--;
            clock.innerHTML=time;
        }
        else{
            clearInterval(countdown);
            clock.innerHTML=`Game over!<br>Tiles/min:${game.score}`;
            game.removeIt();
            document.getElementById("restart").style.display="block";
        }
    },1000);
}
function refresh(){
    console.log("Prabha ruless!!")
    location.reload();
}