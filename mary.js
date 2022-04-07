let c = document.getElementById("c")
let ctx = c.getContext("2d")
c.width = window.innerWidth
c.height = window.innerHeight
let dropX = []
let dropY = []


function makeDrop(event){
    dropX = []
    dropY = []
    dropX.push(event.clientX)
    dropY.push(event.clientY)
    console.log(dropX, dropY);
    
} 
let dropInterval = setInterval(function(){
    ctx.clearRect(0,0,c.width,c.height)
    ctx.beginPath();
    ctx.arc(dropX[0], dropY[0] + 40, 9, 0, 2*Math.PI)
    ctx.fillStyle = "#bb0a1e"
    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(dropX[0] - 9, dropY[0] + 40)
    ctx.lineTo(dropX[0], dropY[0]);
    ctx.lineTo(dropX[0]+ 9, dropY[0] + 40)
    ctx.fill()
    if(dropY.length > 0){
        dropY[0] += 10
                }
                console.log(dropY[0]);
},50)