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
function visOpdateringsDato (elementId, farve, placering, ledetekst){
	var dokumentDato = new Date(document.lastModified).toLocaleTimeString("da-DK");
	var opdateretTekst ="";
	
	if (ledetekst === true){
		opdateretTekst="Sidst opdateret:"+ dokumentDato;
		} else{
			opdateretTekst=dokumentDato;
		}
	document.getElementById(elementId).style.color =farve;
	document.getElementById(elementId).style.textAlign=placering;
	document.getElementById(elementId).innerText=opdateretTekst;
}

//hovedprogram-del

var musikliste=["anxiety-julie-michaels.mp3","fall-lisa-hannigan.mp3","my-Baby-nina-simone.mp3", "no-roots-alice-merton.mp3"];

var citater = [
	"Næsten-Øko tomater 2 kr. pr. stk.",
	"Bananer 2 kr. pr. stk - køb dem inden Peter spiser dem alle sammen",
	"Varme dåseøl fra Harboe - kom og hent lortet gratis",
	"Franskbrød fyldt med krummer, nu kun 10kr."

];
															  
visDagensCitat("citat",citater);
visMusikliste("musikliste",musikliste);
videoKontrol("koncertvideo",false);
visOpdateringsDato("sidefod", "white", "center", true);