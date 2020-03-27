let numOfSquares = 6
let colors = generateRandomColors(numOfSquares)
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let warna = document.getElementById("warna");
let hasil = document.querySelector("#hasil");
let h1 = document.querySelector("h1");
let mulaiButton = document.querySelector("#mulai");
let mudahMode = document.querySelector("#mudahMode");
let susahMode = document.querySelector("#susahMode");

mudahMode.addEventListener("click", function(){
    mudahMode.classList.add("select");
    susahMode.classList.remove("select");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    warna.textContent = pickedColor;
    for(i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else {
            squares[i].style.display = "none";
        }
    }
})
susahMode.addEventListener("click", function(){
    susahMode.classList.add("select");
    mudahMode.classList.remove("select");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    warna.textContent = pickedColor;
    for(i=0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
})

mulaiButton.addEventListener("click", function(){
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    warna.textContent = pickedColor;
    hasil.textContent = "";
    this.textContent = "New Colors"

    for(i=0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "burlywood"
})
warna.textContent = pickedColor;


function pickColor(){
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

 function generateRandomColors(num){
    let arr = []

    for(i=0; i < num; i++){
        arr.push(randomColor())
    }

    return arr
}

function randomColor(){
   let a = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   let c = Math.floor(Math.random() * 256);
   return "rgb(" + a + ", " + b + ", " + c + ")";
}


for(let i=0; i < squares.length; i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
        let clickColor = this.style.background;

        if(clickColor === pickedColor){
            hasil.textContent = "Benar~!!!"
            mulaiButton.textContent = "Mulai lagi ?"
            changeColors(clickColor);
            h1.style.background = clickColor
        }else{
            this.style.background = "#223344"
            hasil.textContent = "Coba Lagi"
        }
    })
}

function changeColors(color){
    for(i=0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

