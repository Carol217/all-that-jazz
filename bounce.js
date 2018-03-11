//Team acDC
//Carol Pan & Donia Tung
//SoftDev2 pd7
//K#11 -- Objectification
//2018-03-09


var svg = document.getElementById("vimage");
var clearSVG = document.getElementById("clear");
var bouncers = [];
var frame = 0;

var drawDot = function(x,y){
    var newthing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newthing.setAttribute("cx", x);
    newthing.setAttribute("cy", y);
    newthing.setAttribute("r", 15);
    newthing.setAttribute("fill", "red");
    newthing.setAttribute("stroke", "black");
    return newthing
}

function ballObj(){
    this.x= Math.floor(Math.random()*440) + 20;
    this.y= Math.floor(Math.random()*440) + 20;
    this.color= "red";
    this.radius= "30";
    this.element= drawDot(this.x, this.y)
    this.display= function(){svg.appendChild(this.element);}
    this.remove= function(){svg.removeChild(this.element);}
    this.getX= function(){return this.x;},
    this.getY= function(){return this.y;},
    this.plusX = Math.floor(Math.random()*5) + 1;
    this.plusY = Math.floor(Math.random()*5) + 1;
    this.getR= function(){return this.radius;},
    this.getColor= function(){return this.color;},
    this.changeX= function(newX){this.x=newX;
				 this.element.setAttribute("cx", this.x);},
    this.changeY= function(newY){this.y=newY;
				 this.element.setAttribute("cy", this.y);},
    this.changeColor= function(newC){this.color = newC;
				 this.element.setAttribute("fill", newC);}
    this.move = function(){
	if (this.x < 15 || this.x > 485){
	    this.plusX *= -1;
	}
	if (this.y < 15 || this.y > 485){
	    this.plusY *= -1;
	}
	this.changeX(this.x + this.plusX);
	this.changeY(this.y + this.plusY);
    }
}

var bounce = function(){
    window.cancelAnimationFrame(frame)
    console.log(frame);
    for (ball in bouncers){
	//console.log(ball);
	bouncers[ball].move();
    }
    frame =window.requestAnimationFrame(bounce);
}

var clicked = function(e){
    e.preventDefault();
    window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(bounce);
    if (e.target == this){
	var dot = new ballObj();
	bouncers.push(dot);
	dot.display();	
    };
};

var clear = function(e){
    window.cancelAnimationFrame(frame);
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
};

svg.addEventListener("click", clicked);
clearSVG.addEventListener("click", clear);
