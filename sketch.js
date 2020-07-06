var ball;
var database,pos;
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var refb=database.ref('ball/position')
    refb.on("value",reposition,showerror)
}
function reposition(data){
    pos=data.val()
    ball.x=pos.x
    ball.y=pos.y

}

function showerror(){
    console.log("there is an error")
}



function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    var refb=database.ref('ball/position')
    refb.set({
        x:pos.x+x,
        y:pos.y+y
    })
}