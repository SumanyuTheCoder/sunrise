const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
//= loadImage("sunrise1.png");


function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
//bg = loadImage("sunrise2.png")
}

function setup(){
      
    
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(bg){
        background(bg)

    }
    //background(bg)
   
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
  
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJson = await response.json();
        console.log(responseJson.datetime);
        var datetime = responseJson.datetime;
       
    
      
    
    

    // write code slice the datetime
    var hour = datetime.slice(11, 13);
    console.log(hour);

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 00 && hour <= 17){
        //day image
        bg = loadImage("sunrise2.png");
        console.log("IF block");
    }else{
        bg = loadImage("sunrise1.png");
        console.log("else block");
    }
   

    //load the image in backgroundImg variable here

}
