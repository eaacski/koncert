// Modtager ID (elementId) på det HTML element som skal
// vise et tilfældigt citat fra en liste (Citatliste)
function visDagensCitat(elementId, citatliste) {
	var citatIndeks=Math.floor(Math.random()*citatliste.length);
document.getElementById(elementId).innerText=citatliste[citatIndeks];
	
}
//Modtager ID (elementId) på det HTML element som skal på listen

function visMusikliste(elementId, mp3liste){
	for (var i=0; i<mp3liste.length; i++){
		document.getElementById(elementId).insertAdjacentHTML("afterbegin",'<p>'+mp3liste [i]+'</p><p><audio controls><source src="'+ mp3liste[i]+'" type="audio/mpeg"></audio></p>');
	}
	
}

function videoKontrol(elementId, visKontroller){
	
	if (visKontroller===true) {
		document.getElementById(elementId).setAttribute("controls","");
	}else{
		document.getElementById(elementId).addEventListener("click",function() {
			if (document.getElementById(elementId).paused){
				document.getElementById(elementId).play();
			}
			else{
				document.getElementById(elementId).pause();
			}
		})
		
											}
	}


//hovedprogram-del

var musikliste=["Bouncy_Fun_1.mp3","Walker.mp3","Funky_Groove.mp3"];

var citater = [
	"Alt, hvad jeg ved er, at jeg intet ved. (Buzz Slammer)",
	"Det har jeg aldrig gjort, så det klarer heg helt sikker. (Dave Light)",
	"Find ikke fejl, find en løsning. (Kid Neumann)",
	"Husk, at være sød ved andre, ellers får du en på låget. (Bud Spencer)",
	"Den som prutten lugte kan....... (Arne Nissen)"
];
															  
visDagensCitat("citat",citater);
visMusikliste("musikliste",musikliste);
videoKontrol("koncertvideo",false);