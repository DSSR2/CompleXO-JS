// NOUGHTS AND CROSSES GAME TEST YO 

// Define all the elements
var game = "ul.game",
gameSquare = "ul.game li.blank",
nought = "ul.game li.nought",
cross = "ul.game li.cross";

function activate(pos){
	var list = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
	for(let i=0; i<list.length; i++){
		document.getElementById(list[i]+pos).addEventListener("click", func);
		document.getElementById(list[i]+pos).classList.remove("fade");
	}
}

function deactivate(pos){
	var list = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
	for(let i=0; i<list.length; i++){
		document.getElementById(list[i]+pos).removeEventListener("click", func);
		document.getElementById(list[i]+pos).classList.remove("scale");
		document.getElementById(list[i]+pos).classList.add("fade");
	}	
}

activate("11");
activate("12");
activate("13");
activate("21");
activate("22");
activate("23");
activate("31");
activate("32");
activate("33");

// Define array for the noughts and crosses
var gameResult = [nought, cross];
var play_pos = {"a": "11",
				"b": "12",
				"c": "13",
				"d": "21",
				"e": "22",
				"f": "23",
				"g": "31",
				"h": "32",
				"i": "33"};

// Grab each element square ID and push it to an array
var squareIDs = [];
var done = [];
var done_val = [];
var ndone = ["11", "12", "13", "21", "22", "23", "31", "32", "33"];

// Count clicks so that every second click resets the X value
var x = 0;
function resetClick() {
	x = 0;
	gameSquare.value = x;
}

function count() {
	if(x<1){
		x += 1;
	}
	else{
		x = 0;
	}
}

$("p.reset" ).click(function() {
         location.reload(true);
});

function disp_win(val){
	if(val == 1){
		$("h1").replaceWith("<h1 style='text-align:left'><span class='nought'> O WON!</span></h1>");
		$(nought).addClass("scale");
		$(cross).addClass("fade");
		$(nought).removeClass("fade");
	}
	else if(val == 2){
		$("h1").replaceWith("<h1 style='text-align:left'><span class='cross'> X WON!</span></h1>");
		$(cross).addClass("scale");
		$(nought).addClass("fade");
		$(cross).removeClass("fade");
	}
	else if(val == 3){
		$("h1").replaceWith("<h1 style='text-align:left'><span> IT'S A DRAW!</span></h1>");
		$(cross).addClass("fade");
		$(nought).addClass("fade");
	}

	deactivate("11");
	deactivate("12");
	deactivate("13");
	deactivate("21");
	deactivate("22");
	deactivate("23");
	deactivate("31");
	deactivate("32");
	deactivate("33");
}

function check_big(){
	if((done_val.includes("11 1") && done_val.includes("21 1") && done_val.includes("31 1"))
		||(done_val.includes("12 1") && done_val.includes("22 1") && done_val.includes("32 1"))
		||(done_val.includes("13 1") && done_val.includes("23 1") && done_val.includes("33 1"))
		||(done_val.includes("11 1") && done_val.includes("12 1") && done_val.includes("13 1"))
		||(done_val.includes("12 1") && done_val.includes("22 1") && done_val.includes("23 1"))
		||(done_val.includes("13 1") && done_val.includes("23 1") && done_val.includes("33 1"))
		||(done_val.includes("11 1") && done_val.includes("22 1") && done_val.includes("33 1"))
		||(done_val.includes("13 1") && done_val.includes("22 1") && done_val.includes("31 1"))){
			console.log("O WON");
			disp_win(1);
		}
	else if((done_val.includes("11 2") && done_val.includes("21 2") && done_val.includes("31 2"))
		||(done_val.includes("12 2") && done_val.includes("22 2") && done_val.includes("32 2"))
		||(done_val.includes("13 2") && done_val.includes("23 2") && done_val.includes("33 2"))
		||(done_val.includes("11 2") && done_val.includes("12 2") && done_val.includes("13 2"))
		||(done_val.includes("12 2") && done_val.includes("22 2") && done_val.includes("23 2"))
		||(done_val.includes("13 2") && done_val.includes("23 2") && done_val.includes("33 2"))
		||(done_val.includes("11 2") && done_val.includes("22 2") && done_val.includes("33 2"))
		||(done_val.includes("13 2") && done_val.includes("22 2") && done_val.includes("31 2"))){
			console.log("X WON");
			disp_win(2);
		}
	else if(done_val.length==9){
		console.log("DRAW");
		disp_win(3);
	}
}

function check_sq(d, box){
	var result = 0;
	var list = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
	console.log(box);

	var nought_win = 
	   d.inArray("1 a"+box, squareIDs) > -1 
	&& d.inArray("1 b"+box, squareIDs) > -1 
	&& d.inArray("1 c"+box, squareIDs) > -1
	|| d.inArray("1 a"+box, squareIDs) > -1
	&& d.inArray("1 e"+box, squareIDs) > -1
	&& d.inArray("1 i"+box, squareIDs) > -1
	|| d.inArray("1 b"+box, squareIDs) > -1
	&& d.inArray("1 e"+box, squareIDs) > -1
	&& d.inArray("1 h"+box, squareIDs) > -1
	|| d.inArray("1 c"+box, squareIDs) > -1
	&& d.inArray("1 e"+box, squareIDs) > -1
	&& d.inArray("1 g"+box, squareIDs) > -1
	|| d.inArray("1 c"+box, squareIDs) > -1
	&& d.inArray("1 f"+box, squareIDs) > -1
	&& d.inArray("1 i"+box, squareIDs) > -1
	|| d.inArray("1 d"+box, squareIDs) > -1
	&& d.inArray("1 e"+box, squareIDs) > -1
	&& d.inArray("1 f"+box, squareIDs) > -1
	|| d.inArray("1 g"+box, squareIDs) > -1
	&& d.inArray("1 h"+box, squareIDs) > -1
	&& d.inArray("1 i"+box, squareIDs) > -1
	|| d.inArray("1 g"+box, squareIDs) > -1
	&& d.inArray("1 a"+box, squareIDs) > -1
	&& d.inArray("1 d"+box, squareIDs) > -1;
	if(nought_win){
		return 1;
	}
	
	var cross_win = 
	   d.inArray("0 a"+box, squareIDs) > -1 
	&& d.inArray("0 b"+box, squareIDs) > -1 
	&& d.inArray("0 c"+box, squareIDs) > -1
	|| d.inArray("0 a"+box, squareIDs) > -1
	&& d.inArray("0 e"+box, squareIDs) > -1
	&& d.inArray("0 i"+box, squareIDs) > -1
	|| d.inArray("0 b"+box, squareIDs) > -1
	&& d.inArray("0 e"+box, squareIDs) > -1
	&& d.inArray("0 h"+box, squareIDs) > -1
	|| d.inArray("0 c"+box, squareIDs) > -1
	&& d.inArray("0 e"+box, squareIDs) > -1
	&& d.inArray("0 g"+box, squareIDs) > -1
	|| d.inArray("0 c"+box, squareIDs) > -1
	&& d.inArray("0 f"+box, squareIDs) > -1
	&& d.inArray("0 i"+box, squareIDs) > -1
	|| d.inArray("0 d"+box, squareIDs) > -1
	&& d.inArray("0 e"+box, squareIDs) > -1
	&& d.inArray("0 f"+box, squareIDs) > -1
	|| d.inArray("0 g"+box, squareIDs) > -1
	&& d.inArray("0 h"+box, squareIDs) > -1
	&& d.inArray("0 i"+box, squareIDs) > -1
	|| d.inArray("0 g"+box, squareIDs) > -1
	&& d.inArray("0 a"+box, squareIDs) > -1
	&& d.inArray("0 d"+box, squareIDs) > -1;
	if(cross_win){
		return 2;
	}
	var dr = 0;
	for(let i=0; i<list.length; i++){
		if( ! (squareIDs.includes("1 "+list[i]+box) || squareIDs.includes("0 "+list[i]+box))){
			dr = 1;
		}
	}
	if(dr == 0){
		console.log("DRAW!");
		return 3;
	}
	return result;
}
// 1 = NOUGHT, 0 = CROSS

// On clicking a square count the clicks and change the class, this will work only once per square

function draw_box(box, val){
	var list = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
	for(let i=0; i<list.length; i++){
		var nam = list[i]+box;
		document.getElementById(nam).classList.remove("cross");
		document.getElementById(nam).classList.remove("noughts");
		document.getElementById(nam).classList.add(val);	
	}
}

function func(){
	console.log(squareIDs);
	console.log(done_val);
	var box = $(this).attr("id").slice(-2);
	var place = $(this).attr("id")[0];
	count();

	if (x == 1) {

		$(this).addClass("nought");
		$(this).removeClass("blank");
		var txt = "'cross'> X TO ";
	
	}else if(x == 0) {
		
		$(this).addClass("cross");
		$(this).removeClass("blank");	
		var txt = "'nought'> O TO ";	
		resetClick(); 
	}
	squareIDs.push(x + " " + $(this).attr("id"));
	
	var win = check_sq($, box)
	
	if(win == 1){
		done.push(box);
		var nought_win = true;
		var cross_win = false;
		draw_box(box, "nought");
		deactivate(box);
		ndone.splice(ndone.indexOf(box), 1);
		done_val.push(box+" 1");
	}
	else if(win == 2){
		done.push(box);
		var cross_win = true;
		var nought_win = false;
		draw_box(box, "cross");
		deactivate(box);
		ndone.splice(ndone.indexOf(box), 1);
		done_val.push(box+" 2");
	}
	else if(win == 3){
		done.push(box);
		deactivate(box);
		ndone.splice(ndone.indexOf(box), 1);
		done_val.push(box+" 3");
	}
	
	if(done.includes(play_pos[place])){
		$("h1").replaceWith("<h1 style='text-align:left'><span class="+txt+"PLAY ANYWHERE!</span></h1>");
		for(let i = 0; i < ndone.length; i++){
			activate(ndone[i]);
		}
	}
	else{
		for(let i = 0; i < ndone.length; i++){
			deactivate(ndone[i]);
		}
		activate(play_pos[place]);

		if(place == "a"){
			$("h1").replaceWith("<h1 style='text-align:left'><span class="+txt+"PLAY IN THE TOP LEFT</span></h1>");
		}
		else if(place == "b"){
			$("h1").replaceWith("<h1 style='text-align:left'><span class="+txt+"PLAY IN THE TOP CENTER</span></h1>");
		}
		else if(place == "c"){
			$("h1").replaceWith("<h1 style='text-align:left'><span class="+txt+"PLAY IN THE TOP RIGHT</span></h1>");
		}
		else if(place == "d"){
			$("h1").replaceWith("<h1 style='text-align:left'><span class="+txt+"PLAY IN THE CENTER LEFT</span></h1>");
		}
		else if(place == "e"){
			$("h1").replaceWith("<h1 style='text-align:left'><span class="+txt+"PLAY IN THE CENTER</span></h1>");
		}
		else if(place == "f"){
			$("h1").replaceWith("<h1 style='text-align:left'><span class="+txt+"PLAY IN THE CENTER RIGHT</span></h1>");
		}
		else if(place == "g"){
			$("h1").replaceWith("<h1 style='text-align:left'><span class="+txt+"PLAY IN THE BOTTOM LEFT</span></h1>");
		}
		else if(place == "h"){
			$("h1").replaceWith("<h1 style='text-align:left'><span class="+txt+"PLAY IN THE BOTTOM CENTER</span></h1>");
		}
		else if(place == "i"){
			$("h1").replaceWith("<h1 style='text-align:left'><span class="+txt+"PLAY IN THE BOTTOM RIGHT</span></h1>");
		}
	}
	
	check_big();
	if ($("ul.game li.blank").length) {

	} else {
		console.log("TIE!");
	};
  
};