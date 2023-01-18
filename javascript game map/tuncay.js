var cliks = 0;

function getRandomColor() {
				
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];//hier word een random kleur gekozen zodat het elke keer een andere kleur is
    } 
    return color; // dit is return zodat het niet dezelfde kleur blijft wanneer er een nieuw voorwerp tevoorschijn komt


} 

var clickedTime; var createdTime; var reactieTijd; // dit zijn variabelen zodat je de reactietijd en score kan zien

function makeBox() {
        var time=Math.random();
        time=time*1300; //tijd dat een rondje of vierkantje spawned
    
    setTimeout(function() {
    
        if (Math.random()>0.5) {
        
            document.getElementById("box").style.borderRadius="100px";//dit is de border radius zodat het een rondje is
            
            } else {
            
                document.getElementById("box").style.borderRadius="0";// hier is de border radius 0 omdat het een vierkant is
            } 
            
        var top= Math.random();
            top= top*300;
        var left= Math.random();//hier is het grote van het speel veld top is de hoogte en left is de breedte
            left= left*1100; 
            
        document.getElementById("box").style.top = top + "px";// dit is hoever het blokje of rondje van boven naar beneden kan komen
        document.getElementById("box").style.left = left + "px"; // dit van hoever het blokje of rondje van links naar rechts kan
    
        document.getElementById("box").style.backgroundColor=getRandomColor(); // hier word een aparte kleur gepakt en voor het vierkantje gekozen
    
        document.getElementById("box").style.display="block";
        
        createdTime=Date.now();
        
    }, time); 

}

document.getElementById("box").onclick=function() {
cliks++;

    clickedTime=Date.now();
    
    reactieTijd=(clickedTime-createdTime)/1000; // hier word de tijd waarin je klikt geregistreerd
    
    document.getElementById("printReactionTime").innerHTML="Je reactie tijd is: " + reactieTijd + "seconds"; // en hier word de tijd te zien op het scherm
    
    document.getElementById("score").innerText = "HighScore: " + cliks; // bij de highscore kan je je score zien van hoeveel vierkantjes of rindjes je raak heb gelkikt
    
    this.style.display="none";// er is geen display anders zou het er raar uit komen te zien
    


    makeBox();
    
    
}


makeBox(); 





