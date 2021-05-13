let numberOfFaces = 5;
let numberOfGames = 0;
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");


function generateFaces(){
for(let i = 0 ; i < numberOfFaces ; i++){

    const randomTop = Math.floor(Math.random()*400 +1);
    const randomLeft = Math.floor(Math.random()*400 +1);
    face = document.createElement("img");
    face.src = "smile.png";
    face.style.top = randomTop + "px";
    face.style.left = randomLeft + "px";

    theLeftSide.appendChild(face);
     }
    const leftSideImages = theLeftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        theRightSide.appendChild(leftSideImages);
        theLeftSide.lastChild.addEventListener("click", nextLevel);
        document.body.addEventListener("click", gameOver);

    
}

function nextLevel(){
    event.stopPropagation();
    numberOfFaces += 5;
    numberOfGames += 1;
    while(theLeftSide.firstChild){
            theLeftSide.removeChild(theLeftSide.firstChild);
    }

    while(theRightSide.firstChild){
            theRightSide.removeChild(theRightSide.firstChild);

    }

    generateFaces();
}

function gameOver(){
    alert("Game Over!!!\n You found " + numberOfGames + " faces!");
    theLeftSide.lastChild.removeEventListener("click", nextLevel);
    document.body.removeEventListener("click", gameOver)
}


function restartGame(){
    event.stopPropagation();
    location.reload(true);
}
