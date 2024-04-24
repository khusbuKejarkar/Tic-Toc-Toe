let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newgm-btn");
let msgContiner = document.querySelector(".msg-contnier");
let msg = document.querySelector("#msg");

let turnO =true;   //plyerX, plyerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContiner.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        // if(turnO===true) or if(turnO) both r same
        if(turnO){  //playerO
         box.innerText = "O";
         turnO = false;
        } else{  //playerX
         box.innerText = "X";
         turnO = true;     
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContiner.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );

        let pos1Vlu = boxes[pattern[0]].innerText;
        let pos2Vlu = boxes[pattern[1]].innerText;
        let pos3Vlu = boxes[pattern[2]].innerText;

        if (pos1Vlu != "" && pos2Vlu != "" && pos3Vlu !="") {
            if(pos1Vlu===pos2Vlu && pos2Vlu===pos3Vlu){
                // console.log("winner",pos1Vlu);
                showWinner(pos1Vlu);
            }

        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

