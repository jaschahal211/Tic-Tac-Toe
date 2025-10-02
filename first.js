let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let new_btn=document.querySelector("#new-btn");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turn0=true;
let count=0;
const winpattern = [
  [0,1,2],
  [0,3,6],
  [3,4,5],
  [6,7,8],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        console.log("button was clicked");
        if(turn0===true)
        {
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        count++;
        box.disabled=true;
        checkWinner();
    })
});
const disable=()=>{
    for(let box of boxes){
    box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    }
}

const checkWinner=()=>{
    for(let pattern of winpattern)
    {
        console.log(pattern[0],pattern[1],pattern[2]);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!==""&&pos2!==""&&pos3!==""){
        if(pos1===pos2 && pos2===pos3)
        {
            console.log("winner is ",pos1);
            winnerMsg(pos1);
        }
        else{
            if(count>=9)
            {
                msg.innerText=`Try Again.No Winner.`;
            }
        }
    }}
};
const winnerMsg=(winner)=>{
    msg_container.classList.remove("hide");
    msg.innerText=`Congratulations,Winner is ${winner}`;
}
const reset=()=>{
    turn0=true;
    msg_container.classList.add("hide");
    enable();
}
new_btn.addEventListener("click",reset);
reset_btn.addEventListener("click",reset);