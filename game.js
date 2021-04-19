let lastNum = null
let lastIndex = null
let arrList = []

function onStart(num) {
    arrList = [...Array(parseInt(num)).keys()]
    shaffArray = [...arrList, ...arrList].sort(() => Math.random() - 0.5)
    console.log(shaffArray)

    appendHTMLCodetoMainGame()
    document.getElementById("h1").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("main-game").style.display = "flex";
    $("#game-over").empty();
}

function appendHTMLCodetoMainGame() {
    shaffArray.forEach((num, index) => {
        const html = `<div class="container">
            <div class="card" id="${index}">
                <div class="front" onclick="flip(${num}, ${index})">
                </div>
                <div class="back">
                    ${num}
                </div>
            </div>
        </div>`
        $(".main-game").append(html);
    });
}

function flip(num, index) {
    $(`#${index}`).addClass('flipped');
    setTimeout(() => {
        if (lastNum !== null && lastNum !== num) {
            $(`#${index}`).removeClass('flipped');
            $(`#${lastIndex}`).removeClass('flipped');
            lastNum = null
            lastIndex = null
        } else if (lastNum === num) {
            arrList.splice(arrList.indexOf(num), 1)
            lastNum = null
            lastIndex = null
        } else {
            lastNum = num
            lastIndex = index
        }
        if (arrList.length === 0) {
            console.log('game over')
            document.getElementById("h1").style.display = "block";
            document.getElementById("form").style.display = "block";
            document.getElementById("main-game").style.display = "none";
            const html = `<h1>Game Over</h1>`
            $("#game-over").append(html);
            $(".main-game").empty();
        }
    }, 1000);

}

// end of line