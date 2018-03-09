//Team acDC
//Carol Pan & Donia Tung
//SoftDev2 pd7
//K#11 -- Objectification
//2018-03-09


var svg = document.getElementById("vimage");
var clearSVG = document.getElementById("clear");

var drawDot = function(){
    var newthing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newthing.setAttribute("cx", 0);
    newthing.setAttribute("cy", 0);
    newthing.setAttribute("r", 30);
    newthing.setAttribute("fill", "red");
    newthing.setAttribute("stroke", "black");
    newthing.addEventListener("click", change);
    return newthing
}

function ballObj(){
    this.x= 0;
    this.y= 0;
    this.color= "red";
    this.radius= "30";
    this.element= drawDot()
    this.display= function(){svg.appendChild(this.element)}
    this.remove= function(){svg.removeChild(this.element);}
    this.getX= function(){return this.x},
    this.getY= function(){return this.y;},
    this.plusX = Math.random()*5;
    this.plusY = Math.random()*5;
    this.getR= function(){return this.radius;},
    this.getColor= function(){return this.color;},
    this.changeX= function(newX){this.x=newX;
				 this.element.setAttribute("cx", this.x);},
    this.changeY= function(newY){this.y=newY;
				 this.element.setAttribute("cy", this.y);},
    this.changeColor= function(){this.color = "green";
				 this.element.setAttribute("fill", "green");}
    this.move = function(){this.changeX(this.x+this.plusX;)
    }
}


var clicked = function(e){
    e.preventDefault();
    if (e.target == this){
	var dot = new ballObj();
	dot.changeX( e.offsetX);
	dot.changeY( e.offsetY);
	//console.log(dot);
	dot.display();
	
    };
};

var change = function(e){
    e.preventDefault();
    //this.changeColor();
    this.setAttribute("fill", "green");
    this.addEventListener("click", newbie)
};

var newbie = function(e){
    svg.removeChild(this);
    var dot = new ballObj();
    dot.changeX(Math.random()*500);
    dot.changeY(Math.random()*500);
    dot.display();
};

var clear = function(e){
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
};

svg.addEventListener("click", clicked);
clearSVG.addEventListener("click", clear);
