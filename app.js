var marginTop = 47.5; // Position inital de ma balle dans l'alignement y 
var marginLeft = 48.75; // Position initial de ma balle, dans l'alignement x 
var vitesse = 0.5; // Vitesse initial de ma balle a 0.5% par "clique"

window.onkeydown = function(e) {
    var key = e.keyCode || e.which;
    

    switch(key) {
        case 37: // Diriger la balle vers la gauche 
            document.querySelector(".mid-ball").style.left = (marginLeft -= vitesse) +"%";
            var margSpace = 0.5;
            if(marginLeft < -3) {
                alert('Sortie de terrain');
                marginLeft = 48.75;
                marginTop = 47.5;
            }
        break;
        case 39: // Diriger la balle vers la droite
            document.querySelector(".mid-ball").style.left = (marginLeft += vitesse) +"%";
            if(marginLeft > 100) {
                alert('Sortie de terrain');
                marginLeft = 48.75;
                marginTop = 47.5;
                
            }
        break;
        case 38: // Diriger la balle vers le haut
            document.querySelector(".mid-ball").style.top = (marginTop -= vitesse) +"%";
            if(marginTop < -5) {
                alert('Sortie de terrain');
                marginTop = 47.5;
                marginLeft = 48.75;
            }
        break;
        case 40: // Diriger la balle vers le bas
            document.querySelector(".mid-ball").style.top = (marginTop += vitesse) +"%";
            if(marginTop > 100) {
                alert('Sortie de terrain')
                marginTop = 47.5; 
                marginLeft = 48.75;
            }
        break;    
        case 32: // Barre d'espace, rajoute de la vitesse a ma balle. 
            vitesse += 1;
        break;
        case 96: // Numéro 0 permet de reduire la vitesse de ma balle. 
            vitesse -= 0.5;
        break;
        default:

        break;
        }
    };
